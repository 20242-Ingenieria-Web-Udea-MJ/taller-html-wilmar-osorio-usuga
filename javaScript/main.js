//lee el valor del numero y lo muestra en el display
export function agregarNumero(number) {
  document.getElementById("display").value += number;
}

//lee el valor de la operacion y lo muestra en el display
export function agregarOperacion(operation) {
  document.getElementById("display").value += " " + operation + " ";
}

//Función para agregar un punto decimal, asegurándose de que no haya más de uno en una secuencia numérica
export function agregarPuntoDecimal() {
  const display = document.getElementById("display").value;
  const parts = display.split(/[\s+/*-]/); // Dividir por operadores
  const currentPart = parts[parts.length - 1];
  if (!currentPart.includes(".")) {
    document.getElementById("display").value += ".";
  }
}

//calcula las operaciones relacionadas
export function calcular() {
  let expression = document.getElementById("display").value;
  try {
    //calcula cuando intentes dividir por cero
    if (/\d+\s*\/\s*0(?!\d)/.test(expression)) {
      document.getElementById("display").value = "No se puede dividir por cero";
    } else {
      document.getElementById("display").value = eval(expression);
    }
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

//elimina el ultimo caracter del display
export function borrar() {
  const display = document.getElementById("display").value;
  document.getElementById("display").value = display.substring(
    0,
    display.length - 1
  );
}
//limpia el display
export function LimpiarCalculadora() {
  document.getElementById("display").value = "";
}

//calcula la raiz
export function raiz() {
  let display = document.getElementById("display").value;
  let raiz = Math.sqrt(display);
  document.getElementById("display").value = raiz;
}
// Calcula la potencia al cuadrado
export function potenciaAlCuadrado() {
    let display = document.getElementById("display");
    let currentValue = parseFloat(display.value.trim());
  
    if (!isNaN(currentValue)) {
        display.value = (currentValue ** 2).toString();
    }
}

window.agregarNumero = agregarNumero;
window.agregarOperacion = agregarOperacion;
window.agregarPuntoDecimal = agregarPuntoDecimal;
window.calcular = calcular;
window.LimpiarCalculadora = LimpiarCalculadora;
window.borrar = borrar;
window.potenciaAlCuadrado = potenciaAlCuadrado;
window.raiz = raiz;
