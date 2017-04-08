/*  

EJERCICIO N°1
"Dado el siguiente Array, informar por pantalla si se 
encontró algun elemento que no sea un string y en que posición está"

*/

var animales = ['Perro','Gato','Ratón','Loro','Aguila', 45873,'Ballena','Tiburón','Oso'];

/* SOLUCIÓN */

//Primero tenemos que recorrer todos los elementos del array con un ciclo "for"

for (var i = 0; i < animales.length; i++) {

	// Para averiguar de que tipo era una variable usabamos la funcion "typeof";

	if (typeof(animales[i]) != 'string' ) { // Preguntamos si no es un string
		console.log("El elemento " + animales[i] + " no es un string, y esta en la vuelta " + i);
	}

}