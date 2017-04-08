var number1 = prompt("Ingrese el primer nro.");
var number2 = prompt("Ingrese el segundo nro.");

var parseNumber1 = Number(number1);
var parseNumber2 = Number(number2);


function suma(num1, num2) {

	console.log('El resultado de la suma es: ' + (num1 + num2));
	
}

suma(parseNumber1, parseNumber2);


function resta(num1,num2) {

	console.log('El resultado de la resta es: ' + (num1 - num2));

}

resta(parseNumber1, parseNumber2);


function multiplicacion(num1,num2) {

	console.log('El resultado de la multiplicación es: ' + (num1 * num2));

}

multiplicacion(parseNumber1, parseNumber2);


function division(num1, num2) {

	console.log('El resultado de la división es: ' + (num1 / num2));

}

division(parseNumber1, parseNumber2);