# Taller-Inge-Web
Calculadora en HTML y JavaScript
Descripción
Este proyecto es una calculadora simple creada con HTML, CSS y JavaScript. La calculadora permite realizar operaciones matemáticas básicas como suma, resta, multiplicación y división. Está diseñada para mostrar los números y operadores en un campo de texto (display) mientras el usuario interactúa con los botones de la calculadora.

Características
Operaciones Básicas: Suma, resta, multiplicación y división.
Manejo de Decimales: Permite el uso de números decimales.
Funcionalidad de Borrar: Elimina el último dígito o operador del display.
Funcionalidad de Limpiar: Limpia todo el contenido del display.
Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

plaintext
Copiar código
├── index.html
├── css
│   └── estilo.css
└── javaScript
    ├── main.js
    ├── operacionesBasicas
    │   ├── suma.js
    │   ├── resta.js
    │   ├── division.js
    │   └── multiplicacion.js
    └── operacionesAdicionales
        ├── porcentajes.js
        ├── raiz.js
        └── potencia.js
Archivos Principales
index.html: Contiene la estructura básica de la calculadora, utilizando la etiqueta <table> para organizar los botones y el display.
main.js: Archivo JavaScript principal que maneja las operaciones y la interacción con el display.
operacionesBasicas: Carpeta que contiene módulos JavaScript para operaciones matemáticas básicas.
operacionesAdicionales: Carpeta que contiene módulos JavaScript para operaciones adicionales como porcentajes, raíz cuadrada, y potencia.
Instalación
Clona el repositorio en tu máquina local.
bash
Copiar código
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
Navega al directorio del proyecto.
bash
Copiar código
cd nombre-del-repositorio
Abre el archivo index.html en tu navegador preferido.
Uso
Números y Operaciones: Haz clic en los botones de la calculadora para ingresar números y operaciones. El display mostrará los números y operadores a medida que los introduces.
Calcular Resultado: Haz clic en el botón = para calcular el resultado de la expresión matemática ingresada.
Borrar: Usa el botón C para eliminar el último carácter ingresado.
Limpiar: Usa el botón CE para limpiar todo el contenido del display.
Ejemplo de Código
A continuación se muestra un ejemplo de cómo agregar un número al display:

javascript
Copiar código
export function agregarNumero(number) {
    document.getElementById('display').value += number;
}
Mostrar Operaciones en el Display
La calculadora muestra las operaciones a medida que son ingresadas:

javascript
Copiar código
export function agregarOperacion(operation) {
    document.getElementById('display').value += " " + operation + " ";
}
Cálculo de la Expresión
El cálculo de la expresión ingresada se realiza utilizando la función eval():

javascript
Copiar código
export function calcular() {
    let expression = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(expression);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
Contribuciones
Las contribuciones son bienvenidas. Siéntete libre de abrir un issue o enviar un pull request con mejoras o correcciones.

Licencia
Este proyecto está licenciado bajo la MIT License.

Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
