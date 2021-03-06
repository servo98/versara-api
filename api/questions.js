export default [
    {
        isVal: true,
        "name": "ingreso",
        "question": "¿Cuál de las siguientes afirmaciones describe mejor tu situación de ingresos (cantidad de dinero que recibes), comparado con tus gastos (cantidad de dinero que gastas) durante los últimos 12 meses? ",
        "answers": [
            {
                "value": 100,
                "string": "Volando! al final siempre me sobra"
            },
            {
                "value": 75,
                "string": "Bien, al final me sobra algo"
            },
            {
                "value": 50,
                "string":"Ni me sobra ni me falta."
            },
            {
                "value": 25,
                "string":"Gasto más de lo que me entra"
            },
            {
                "value": 0,
                "string":"En la mala, siempre gasto mucho más de lo que me ingresa"
            } 
        ],
        "type" :"radio"
    },
    {
        isVal: true,
        "name": "obligaciones",
        "question": "¿Cuál de las siguientes afirmaciones mejor describe el pago de tus obligaciones (recibos de luz, agua, gas, celular, etc.) durante los últimos 12 meses?",
        "answers": [
            {
                "value": 100,
                "string": "Todas mis cuentas están siempre al día"
            },
            {
                "value": 60,
                "string": "Casi todas mis cuentas están al día, no falta la que se escapa"
            },
            {
                "value": 40,
                "string":"La mayoría de mis cuentas están al día"
            },
            {
                "value": 20,
                "string":"Algunas de mis cuentas están al día"
            },
            {
                "value": 0,
                "string":"¿De qúe me hablas? siempre viendo como cubrir los huecos"
            } 
        ] ,
        "type" :"radio"
    },
    {
        isVal: true,
        "name": "ritmo",
        "question": "¿Con tu ritmo actual de gastos, si tuvieras que vivir con solo el dinero que tienes en este momento, sin sacar de tus pensiones o sacar un crédito, cuánto tiempo alcanzarías a vivir?",
        "answers": [
            {
                "value": 100,
                "string": "6 meses o más"
            },
            {
                "value": 75,
                "string": "3 a 5 meses"
            },
            {
                "value": 50,
                "string":"1 a 2 meses"
            },
            {
                "value": 25,
                "string":"1 a 3 semanas"
            },
            {
                "value": 0,
                "string":"No llego ni a la semana"
            } 
        ] ,
        "type" :"radio"
    },
    {
        isVal: true,
        "name": "metas",
        "question": "Pensando en tus metas financieras a futuro como viajar, tomar vacaciones, estudiar, pensionarte, iniciar un negocio, comprar un carro, un apartamento, etc., ¿Qué tan segura te sientes de cumplir con tus metas?",
        "answers": [
            {
                "value": 100,
                "string": "Muy segura"
            },
            {
                "value": 75,
                "string": "Segura, pero sin exagerar"
            },
            {
                "value": 50,
                "string":"Algo segura"
            },
            {
                "value": 25,
                "string":"Un poquito segura"
            },
            {
                "value": 0,
                "string":"Para nada segura!"
            } 
        ] ,
        "type" :"radio"
    },
    {
        isVal: true,
        "name": "deudas",
        "question": "Pensando en tus deudas, es decir lo que debes en préstamos bancarios, tarjetas, el préstamo de la casa, lo que debes a personas que te han prestado dinero, etc., ¿qué tan manejables son esas deudas? ",
        "answers": [
            {
                "value": 100,
                "string": "Voy sólida, no le debo nada a nadie!"
            },
            {
                "value": 85,
                "string": "Mis deudas son manejables"
            },
            {
                "value": 40,
                "string":"A veces me siento ahogada"
            },
            {
                "value": 0,
                "string":"Tengo a los cobradores todos los meses encima"
            }
        ] ,
        "type" :"radio"
    },
    {
        isVal: true,
        "name": "bancos",
        "question": "Los bancos:",
        "answers": [
            {
                "value": 100,
                "string": "me llaman todo el día para ofrecerme créditos que no necesito"
            },
            {
                "value": 80,
                "string": "me llaman para comprar mis otras deudas"
            },
            {
                "value": 40,
                "string":"jamás me llaman"
            },
            {
                "value": 0,
                "string":"los llamo todo el tiempo"
            },
            {
                "value": 0,
                "string": "ya ni me contestan"
            }
        ] ,
        "type" :"radio"
    },
    {
        isVal: true,
        "name": "seguros",
        "question": "Pensando en seguros que tu o tu familia puedan tener actualmente, tales como seguros de vida, seguros del auto, seguros para discapacidad, seguros para el hogar, entre otros, ¿qué tan segura te sientes que estos seguros son suficientes en un caso de emergencia o inesperado? ",
        "answers": [
            {
                "value": 100,
                "string": "Me siento más segura que un pez en el agua"
            },
            {
                "value": 65,
                "string": "Me siento algo segura, casi como Shakira con Piqué"
            },
            {
                "value": 35,
                "string":"Me siento algo confiada, pero no que digan qué bruto!"
            },
            {
                "value": 15,
                "string":"Siento un fresquito pero no mucho"
            },
            {
                "value": 0,
                "string": "No me siento segura"
            },
            {
                "value": 0,
                "string": "Ni mi familia ni yo tenemos seguros"
            }
        ] ,
        "type" :"radio"
    },
    {
        isVal: true,
        "name": "afirmacion",
        "question": "Qué tan de acuerdo estoy con ésta afirmación: 'planeo financieramente con antelación'",
        "answers": [
            {
                "value": 100,
                "string": "Eso es lo mío!"
            },
            {
                "value": 65,
                "string": "planeo, si, algo"
            },
            {
                "value": 35,
                "string":"Ni si, ni no"
            },
            {
                "value": 15,
                "string":"no, eso no me ocurre"
            },
            {
                "value": 0,
                "string": "Ni cerca!"
            }
        ] ,
        "type" :"radio"
    }
]