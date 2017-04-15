'use strict'

/*  

EJERCICIO N°6
"Crear una funcion que genere animales, 
la cual reciba los siguientes parámetros:
- tipo: string () gato, perro, loro, etc..),
- nombre: string
- edad: number
- hablar: function

La funcion debe retornar el objeto "animal" 
para luego incluirlo en un array 
llamado "animales".
Finalmente mostrar el array por 
pantalla y llamar al método 
hablar de cada aniamal.
Cargar al menos 3 animales.

*/

var animales = {}

function crearAnimal (id, tipo, nombre, edad, hablar) {

	var animal = {
		tipo: tipo,
		nombre: nombre,
		edad: edad,
		hablar: hablar
	}

	animales[id] = animal;

	console.log(animales);

}

var maullar = function() {
	console.log('miau')
}

var ladrar = function() {
	console.log('GUAU!')
}

crearAnimal('GatoGarfield',',gato', 'Garfield', 8, maullar );
