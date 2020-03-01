import Credit from '../models/creditModel.js';
import axios from 'axios';
const tasa = 3.7;

export async function calculate(req, res) {
    try {
        return res.json(calcular(req.body.amount, req.body.time, tasa));
    } catch (error) {
        res.status(500).json({ message: 'Error al calcular crédito', error });
    }
}

export async function pay(req, res) {
    try {
        const credito = req.body.credito;
        const body = {
            "sms": {
                "mobilePhoneNumber": "+529982404088",
                "message": `Se ha pagado un monto de ${req.body.monto} a su crédito`
            }
        }
        const config = {
            headers : {
                "X-Client" : process.env.X_Client,
                "X-User": process.env.X_User,
                "X-Password": process.env.X_Password,
                "x-api-key": process.env.X_api_key,
                "Content-Type": "application/json"
            }
        };
        axios.post(
            'https://mwiuw3q1fj.execute-api.us-east-1.amazonaws.com/dev/v1/sandbox/messaging-services/sms',
            body,
            config)
            .then((result) => res.json(result))
            .catch(error => res.json(error));
        return res.json({message: `Listo, gracias por tu pago del crédito ${credito}!`});
    } catch (error) {
        res.status(500).json({ message: 'Error al hacer un pago de crédito', error });
    }
}

function calcular(monto, cuotas, tasa) {
    let items = getAmortizacion(monto, tasa, cuotas, 'mensual', 'mensual');
    let valor = setMoneda(items[0][3]);
    let msg = "Usted pagará " + valor + ", mensualmente durante " + items.length + " meses.";
    return {
        table: items,
        message: msg
    }
}
function getAmortizacion(monto, tasa, cuotas, periodo, tasa_tipo) {
    let valor_de_cuota = getValorDeCuotaFija(monto, tasa, cuotas, periodo, tasa_tipo);
    let saldo_al_capital = monto;
    let items = new Array();

    for (let i = 0; i < cuotas; i++) {
        let interes = saldo_al_capital * getTasa(tasa, tasa_tipo, periodo);
        let abono_al_capital = valor_de_cuota - interes;
        saldo_al_capital -= abono_al_capital;
        let numero = i + 1;

        interes = interes.toFixed(2);
        abono_al_capital = abono_al_capital.toFixed(2);
        saldo_al_capital = saldo_al_capital.toFixed(2);

        let item = [numero, interes, abono_al_capital, valor_de_cuota, saldo_al_capital];
        items.push(item);
    }
    return items;
}
function getValorDeCuotaFija(monto, tasa, cuotas, periodo, tasa_tipo) {
    tasa = getTasa(tasa, tasa_tipo, periodo);
    let valor = monto * ((tasa * Math.pow(1 + tasa, cuotas)) / (Math.pow(1 + tasa, cuotas) - 1));
    return valor.toFixed(2);
}
function getTasa(tasa, tasa_tipo, periodo) {
    if (tasa_tipo == 'anual') {
        tasa = tasa / 12
    }
    tasa = tasa / 100.0
    if (periodo == 'mensual') { };
    return tasa;
}
function setMoneda(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num)) num = "0";
    let sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    let cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) cents = "0" + cents;
    for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + '$' + num + ((cents == "00") ? '' : '.' + cents));
}