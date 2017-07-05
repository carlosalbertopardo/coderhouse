/*  

EJERCICIO N°3

Transformaciones de listas!

Utilizar el metodo "Map" de los Arrays para multiplicar por dos todos sus valores

*/


var numeros = [10,20,30,40,50];


var arrayTransformado = numeros.map(function (elemento) {

	console.log(elemento);

	return elemento + 2;


});

console.log(numeros);
console.log(arrayTransformado);
