'use strict';

var numero = parseInt(prompt("Ingrese el primer numero"));
var numero2 = parseInt(prompt("Ingrese el segundo numero"));
var operacion = prompt("Ingrese la operacion que desea realizar:");

var operacionAux = operacion.toUpperCase();

var resultado = [];

function operaciones(valor1, valor2, operacion){
	switch(operacion){
		case "SUMAR":
			resultado = valor1 + valor2;
			break;
		case "RESTAR":
			resultado = valor1 - valor2;
			break;
		case "DIVIDIR":
			resultado = valor1 / valor2;
			break;
		case "MULTIPLICAR":
			resultado = valor1 * valor2;
			break;
		default:
			resultado = "Valor incorrecto";
			break;
	}
}

operaciones(numero, numero2, operacionAux);

if(resultado == "Valor incorrecto"){
	alert("Alguno de los valores es incorrecto. Vuelva a intentarlo");
}
else{
	alert("El numero que Ud tiene como resultado es: " + resultado);
}