// import {suma} from '../javaScript/operacionesBasicas/suma.js';
// import {resta} from '../javaScript/operacionesBasicas/resta.js';
// import {division} from '../javaScript/operacionesBasicas/division.js';
// import {multiplicación} from '../javaScript/operacionesBasicas/multiplicacion.js';
// import {porcentajes} from './operacionesAdicionales/porcentajes.js';
// import {raiz} from './operacionesAdicionales/Raiz.js';
// import {potencia} from './operacionesAdicionales/potencia.js';



//lee el valor del numero y lo muestra en el display
export function agregarNumero(number) {
    document.getElementById('display').value += number;
}

//lee el valor de la operacion y lo muestra en el display
export function agregarOperacion(operation) {
    document.getElementById('display').value += " " + operation + " ";
}

//Función para agregar un punto decimal, asegurándose de que no haya más de uno en una secuencia numérica
export function agregarPuntoDecimal() {
    const display = document.getElementById('display').value;
    const parts = display.split(/[\s+/*-]/); // Dividir por operadores
    const currentPart = parts[parts.length - 1];
    if (!currentPart.includes('.')) {
        document.getElementById('display').value += '.';
    }
}

//calcula las operaciones relacionadas
export function calcular() {
    let expression = document.getElementById('display').value;
    try {
        if(/\d+\/0(?!\d)/.test(expression)){
            throw new Error("no se puede dividir por cero");
        };
        document.getElementById('display').value = eval(expression);
    } catch (e) {
        document.getElementById('display').value = error.message;
    }
}

//elimina el ultimo caracter del display
export function borrar() {
    const display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}
//limpia el display
export function LimpiarCalculadora() {
    document.getElementById('display').value = '';
}

window.agregarNumero = agregarNumero;
window.agregarOperacion = agregarOperacion;
window.agregarPuntoDecimal = agregarPuntoDecimal;
window.calcular = calcular;
window.LimpiarCalculadora = LimpiarCalculadora;
window.borrar = borrar;

