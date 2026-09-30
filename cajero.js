const prompt = require('prompt-sync')();
let salir = "no";
let resultado;
while (salir === "no"){
    let num1 = prompt("Digita el primer numero  ");
    let operador = prompt ("Digita el operador + - * /  ");
    let num2 = prompt ("Digita el segundo numero  ");

    if (operador == "+"){
        resultado = Number(num1) + Number(num2);
        console.log (resultado);
    }
    else if (operador == "-"){
        resultado = Number (num1) - Number(num2);
        console.log (resultado);
    }
    else if (operador == "*"){
        resultado = Number(num1) * Number(num2);
        console.log (resultado);
    }
    else if (operador == "/"){
        resultado = Number(num1) / Number(num2);
        console.log (resultado);
    }
    else {
        console.log ("Error digitaste algo mal");
    }
    salir = prompt ("Deseas salir, digita si o no  ");
    console.log ("/////////////////////////////////");
}
console.log ("saliste de la calculadora");