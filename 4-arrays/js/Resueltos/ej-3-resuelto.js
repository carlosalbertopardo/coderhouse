/*  

EJERCICIO N°3

Dado el siguiente array, encontrar si tiene el valor "-"
reemplazarlo por "valor vacío".
Al finalizar el programa, mostrar el array 
e indicar la cantidad de veces que el valor 
fue reemplazado.

*/

var continentes = ['Asia','America','Europa','-','Oceanía','Africa','-','Antártida'];
var contador = 0;

for (var i = 0; i < continentes.length; i++) {

	if ( continentes[i] === '-') {

		continentes[i] = 'valor vacio';	

		contador = contador + 1;	

	}

}


console.log(continentes);
console.log('el valor fue reemplazado ' + contador + ' veces');

