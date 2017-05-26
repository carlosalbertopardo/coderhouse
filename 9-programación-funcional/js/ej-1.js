/*  

EJERCICIO N°1

Realizar 2 funciones
- La funcion "sumar2" recibirá como argumento un numero.
- La funcion "sumar2AlArray" recibirá un array argumento y se le sumará "2" a cada elemento en cada posicion.
- La funcion "negar" recibirá como argumento un booleano.

Analizar los valores de salida dentro y fuera de cada una de las funciones.

*/

/*
var numero = 20;
console.log(numero);


function sumar2(numero2) {
	
	numero2 = numero2 + 2;
	console.log(numero2);

}

sumar2(numero);

console.log(numero);
*/


var arrayDeNumeros = [0,2,4,6];
console.log(arrayDeNumeros);

function sumar2(arrayN) {

	for (var i = 0; i < arrayN.length; i++) {
		arrayN[i] = arrayN[i] + 2;
	}

	console.log(arrayN);

}

sumar2(arrayDeNumeros);

console.log(arrayDeNumeros);