/*  

EJERCICIO N°2

Indicar si las siguientes funciones son puras.
En el caso de ser impuras, volverlas puras.

*/

Por valor:
/numeros
/strings
/booleanos

por referencia
	array
	funciones
	objetos


/* Funcion 1 */

var numero1 = 8;
var numero2 = 10;

function sumar(numero1, numero2) {

	var numero3 = numero1 + numero2

	return numero3;

}


/* Funcion 3 */

var nombre = "Gomez"

function ascender(nombre) {

	nombre =  'Capitán ' + nombre;

	return nombre;

}