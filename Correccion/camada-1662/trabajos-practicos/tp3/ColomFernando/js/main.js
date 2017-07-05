var number1 = prompt("Primer numero");
number1 = parseInt(number1);
var operacion = prompt ('Definir opereción a realizar (+ - * /)')
var number2 = prompt("Segundo numero");
number2 = parseInt(number2);

function suma (number1,number2) {
	var suma = number1+number2;
	return suma
}

function resta (number1, number2) {
	var resta = number1-number2;
	return resta
}

function multiplicación (number1, number2) {
	var multiplicación = number1*number2;
	return multiplicación
}

function división (number1, number2) {
	var división = number1/number2;
	return división
}

switch(operacion) {
	case '+':
	console.log(suma(number1, number2));
	break;
	case '-':
	console.log(resta(number1, number2));
	break;
	case '*':
	console.log(multiplicación(number1, number2));
	break;
	case '/':
	console.log(división(number1, number2));
	break;
}