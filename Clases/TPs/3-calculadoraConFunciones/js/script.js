/*
TP3: Mejorar la calculadora separando en funciones cada operación
•	Deberá poder ingresar 2 valores
•	Deberá poder ingresar que operación quiere realizar
•	Cada operación tendrá que ser una función con los 2 paramentos para sumar, restar, multiplicar o dividir;
•	Deberá mostrar el resultado de la operación en consola
*/

// Primero declaramos nuestras funciones
function sumar(numero1,numero2){
	return numero1 + numero2;
}

function restar(numero1,numero2){
	return numero1 - numero2;
}

function multiplicar(numero1,numero2){
	return numero1 * numero2;
}

function dividir(numero1,numero2){
	return numero1/numero2;
}

//Luego necesitamos una función que dependiendo de que operación se realize devuelva un resultado específico.
function calcular (numero1, numero2, operacion){
	var resultado;

	if(operacion === 'suma') {
		resultado = sumar(numero1, numero2);
	} else if (operacion === 'resta') {	
		resultado = restar(numero1, numero2);
	} else if (operacion === 'multiplicacion') {
		resultado = multiplicar(numero1, numero2);
	} else if (operacion === 'division') {
		resultado = dividir(numero1, numero2);
	} else {
		alert('Por favor ingrese una operación válida.')
	}
	return resultado;
}


//Luego ingresamos los 2 valores por prompt y los almacenamos en variables
var valor1 = parseInt(prompt('Por favor ingrese el primer valor numerico.'));
var valor2 = parseInt(prompt('Por favor ingrese el segundo valor numerico'));

//Luego le pedimos al usuario la operacion que quiere realizar
var operacion = prompt('Ingrese la operacion a realizar entre ambos en minuscula: suma, resta, multiplicacion o division');

//Luego calcularemos el resultado llamando a la función calcular, la cual devolvera un resultado dependiendo de la operación
var resultado = calcular(valor1,valor2, operacion);

//Por último, mostramos el resultado por pantalla.
alert('El resultado de la operación es: ' + resultado);


