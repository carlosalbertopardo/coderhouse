'use strict';
var num1 = parseInt(prompt("Ingresar el primer numero"));
var num2 = parseInt(prompt("Ingresar el segundo numero"))
var str = prompt("¿Que operación desea realizad? (ingrese un valor: suma, resta, multiplicación, división)");
var operacion = str.toUpperCase()

if (operacion === 'SUMA') {
	function suma (numero1, numero2){
		var resultado = numero1 + numero2;
		console.log("La " + operacion + " de los dos numeros es: " + resultado)
	}
	suma(num1,num2);
} else if (operacion === 'RESTA') {
	function resta (numero1, numero2){
		var resultado = numero1 - numero2;
		console.log("La " + operacion + " de los dos numeros es: " + resultado)
	}
	resta(num1,num2);
} else if (operacion === 'MULTIPLICACIÓN' || operacion === 'MULTIPLICACION') {
	function multiplicacion (numero1, numero2){
		var resultado = numero1 * numero2;
		console.log("La " + operacion + " de los dos numeros es: " + resultado)
	}
	multiplicacion(num1,num2);
} else if (operacion === 'DIVISIÓN' || operacion === 'DIVISION') {
	function division (numero1, numero2){
		var resultado = numero1 / numero2;
		console.log("La " + operacion + " de los dos numeros es: " + resultado)
	}
	division(num1,num2);
} else{
	alert("Ingresaste un valor incorrecto");
}