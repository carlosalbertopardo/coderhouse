/*Mejorar la calculadora seprando en funciones cada operacione

Debera poder ingresar 2 valores
Debera poder ingresar que operacion quiere realizar
Cada operacion tendra que ser una funcion con los 2 paramentros para sumar, restar, multiplicar o dividir;
Debera mostrar el resultado de la operacion en consola
*/


var numeroIngresado1 = prompt("Ingrese un numero");
var numeroIngresado2 = prompt("Ingrese otro numero");
var operacionIngresada = prompt("Ingrese la operacion que quiere realizar");


var numero1 = Number(numeroIngresado1);
var numero2 = Number(numeroIngresado2);


function suma (number1,number2){
	resultadoSuma = (number1 + number2)
	return resultadoSuma
}

function resta (number1,number2){
	var resultadoResta = (number1 - number2)
	return resultadoResta;
}

function multiplicacion (number1,number2){
	var resultadoMulti = (number1 * number2)
	return resultadoMulti
}

function division (number1,number2){
	var resultadoDivi = (number1 / number2)
	return resultadoDivi
}


var sum = suma(numero1,numero2);
var rest = resta(numero1,numero2);
var mult = multiplicacion(numero1,numero2);
var div = division(numero1,numero2);



switch(operacionIngresada)
	{
		case'suma':
			console.log(sum);
		break;	
		case'resta':
			console.log(rest);
		break;
		case'multiplicacion':
			console.log(mult);
		break;
		default:
			console.log(div);
		break;
	}

