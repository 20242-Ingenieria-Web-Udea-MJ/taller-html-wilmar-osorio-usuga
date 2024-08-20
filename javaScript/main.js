import {suma} from '../javaScript/operacionesBasicas/suma.js';
import {resta} from '../javaScript/operacionesBasicas/resta.js';
import {division} from '../javaScript/operacionesBasicas/division.js';
import {multiplicación} from '../javaScript/operacionesBasicas/multiplicacion.js';
import {porcentajes} from './operacionesAdicionales/porcentajes.js';
import {raiz} from './operacionesAdicionales/Raiz.js';
import {potencia} from './operacionesAdicionales/potencia.js';

let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

window.insertar = function(number) {
    currentInput += number;
    updateDisplay();
};

window.insertarOperacion = function(op) {
    if (currentInput === '' && op === '-') {
        currentInput = '-';
        updateDisplay();
        return;
    }
    if (currentInput === '') return;

    if (previousInput !== '') {
        calcular();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
};

window.limpar = function() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
};

window.calcular = function() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case 'add':
            result = suma(prev, current);
            break;
        case 'subtract':
            result = resta(prev, current);
            break;
        case 'multiply':
            result = multiplicación(prev, current);
            break;
        case 'divide':
            result = division(prev, current);
            break;
        default:
            return;
    }

    if (result === null) {
        alert("Error en la operación");
        clearDisplay();
        return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
};

function updateDisplay() {
    display.value = currentInput;
}

