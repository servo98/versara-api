import Credit from '../models/creditModel.js';
const tasa = 3.7;

export async function calculate(req, res) {
    try {
        console.log(calcular(300, 24, 3.7))
        // const newPros = new Prospecto(
        //     req.body
        // );
        // const newProspe = await newPros.save();
        return res.json(res);
        return res.json(calcular(req.body.amount, req.body.fee, tasa));
        // return res.json({ result: newProspe });
    } catch (error) {
        res.status(500).json({ message: 'Error al calcular crédito', error });
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