const prompt = require('prompt-sync')();
function pedirNumero(mensaje) {
    numero = prompt(mensaje);
    return Number(numero);
}

function calcular(num1, operador, num2) {
    if (operador == "+"){
        return Number(num1) + Number(num2);
    }
    else if (operador == "-"){
        return Number (num1) - Number(num2);
    }
    else if (operador == "*"){
        return Number(num1) * Number(num2);
    }
    else if (operador == "/"){
        return Number(num1) / Number(num2);
    }
    else {
        return "Operacion no valida";
    }

}

function mostrarResultado(resultado) {
    console.log ("resultado: " + resultado);
}

function atenderOperacion() {
    let num1 = pedirNumero("Digita el primer numero:  ");
    let operador = prompt ("Digita el operador + - * / : ");
    let num2 = pedirNumero ("Digita el segundo numero: ");

    if (num2 == 0 && operador == "/") {
        resultado = "Error: No se puede dividir entre cero";
    } else {
        let resultado = calcular(num1, operador, num2);
    }
    mostrarResultado(resultado);
}

let salir = "no";

while (salir === "no"){
    atenderOperacion();
    salir = prompt ("Deseas salir, digita si o no:  ");
    while (salir !== "si" && salir !== "no") {
        console.log ("Error digitaste algo mal");
        salir = prompt ("Deseas salir, digita si o no:  ");
    }
}

console.log ("saliste de la calculadora");