function calculadora() {
    if(operacion === "sumar"){
        resultado = sumar(numeroA,numeroB);
    }else if(operacion === "restar"){
        resultado = restar(numeroA,numeroB);
    }else if(operacion === "multiplicar"){
        resultado = multiplicar(numeroA,numeroB);
    }else if(operacion === "dividir"){
        resultado = dividir(numeroA,numeroB);
    }else {
        resultado = 'Operacion desconocida';
    }
    
}

const argv = require('process').argv;
const operacion = argv[2];
const numeroA = +argv[3];
const numeroB = +argv[4];

const sumar = require('./modulos/sumar');
const restar = require('./modulos/restar');
const multiplicar = require('./modulos/multiplicar');
const dividir = require('./modulos/dividir');
const saludito = require('./modulos/saludo')

let resultado = 0;

calculadora()


console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+");

console.log(`
%cEl resultado de la operacion "${operacion}" entre ${numeroA} y ${numeroB} da como resultado ${resultado}
`);

saludito()
console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+");