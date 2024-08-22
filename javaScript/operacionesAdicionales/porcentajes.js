export function porcentaje(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = (numero1 * numero2) / 100;
    document.getElementById("resultado").innerHTML = "El " + numero2 + "% de " + numero1 + " es: " + resultado;
}