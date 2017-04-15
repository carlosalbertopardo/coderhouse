var number1 = prompt("Ingrese el primer nro.");
var number2 = prompt("Ingrese el segundo nro.");

var parseNumber1 = Number(number1);
var parseNumber2 = Number(number2);

var operacion = prompt("Por favor Ingrese tipo de operación: suma, resta, multiplicacion o division");


function cuentas(num1, num2) {

	if (operacion === 'suma') {

		console.log('El resultado de la suma es: ' + (num1 + num2));

	} else if (operacion === 'resta') {

		console.log('El resultado de la resta es: ' + (num1 - num2));

	} else if (operacion === 'multiplicacion') {

		console.log('El resultado de la multiplicación es: ' + (num1 * num2));

	} else if (operacion === 'division') {

		console.log('El resultado de la división es: ' + (num1 / num2));

	}

	
}

cuentas(parseNumber1, parseNumber2);