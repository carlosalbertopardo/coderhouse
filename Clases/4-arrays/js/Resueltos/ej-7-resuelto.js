/*  

EJERCICIO N°7

Dado el siguiente array, insertar el valor "Ford"
exactamente en la mitad del array
Sin reemplazar ninguna posicion del mismo.

*/


var marcas = ['Ferrari','Audi','Nissan','Kia'];
var arrayAux = [];
var valorQueSaque;

for (var i = 0; i < marcas.length / 2; i++) {

	valorQueSaque = marcas.pop();
	arrayAux.push(valorQueSaque);

}

marcas.push('Torino');


var largo = arrayAux.length;

for (i = 0; i < largo; i++) {
	
	valorQueSaque = arrayAux.pop();
	marcas.push(valorQueSaque);

}

console.log(marcas);
console.log(arrayAux);
