'use strict'

/*  

EJERCICIO N°6
1) Crear una funcion que genere animales, la cual reciba los siguientes parámetros:
- tipo: string () gato, perro, loro, etc..),
- nombre: string
- edad: number
- hablar: function

2) La funcion debe retornar el objeto "animal" para luego incluirlo en un array llamado "animales".
3) Finalmente mostrar el array por pantalla y llamar al método hablar de cada aniamal.
4) Cargar al menos 3 animales.

*/

/* 
SOLUCIÓN -> Una funcion que genere objetos!

- Empezamos a ver algo cercano a lo que se llama un constructor". Vamos a crear una funcion que genere objetos.
- Luego vamos a llamar a la funcion con parámetros diferentes para crear nuevos animales
- La funcion tambien va a ir insertando esos animales en un objeto llamado Animales en la posición del id ( WOAAAA!! );

*/


var animales = {} //Creamos un objeto global llamado Animales, donde van a ir todos los animales que creemos.

// Creamos 3 funciones que usaremos como parámetro de la funcion "Hablar" de los distintos animales que creemos.
var maullar = function() {
	console.log('miau...')
}

var ladrar = function() {
	console.log('GUAU!')
}

var croar = function() { 
	console.log('CROACK!!')
}

//Creamos nuestra funcion generadora de animales que recibe parámetros (id, tipo, nombre, edad, hablar)

function crearAnimal (id, tipo, nombre, edad, hablar) {

	// Con nuestros parámetros creamos el objeto.
	var animal = {
		tipo: tipo, //ATENCION!!! "tipo" y "tipo" son 2 cosas diferentes :) . El primero es el ATRIBUTO DEL OBJETO, mientras que el segundo es el VALOR QUE LE PASAMOS!!
		nombre: nombre,
		edad: edad,
		hablar: hablar
	}

	// Una vez creado el objeto, usamos el ID para insertar el animal en el objeto ANIMALES en la POSICION del ID!
	animales[id] = animal;

	console.log(animales); // Y finalmente mostramos el objeto global de animales

}

//Creemos nuestro animales!
crearAnimal('garfield','Gato', 'Garfield El Gato', 8, maullar );
crearAnimal('Oddie','Perro', 'Oddie el Perro', 4, ladrar );
crearAnimal('Pepe','Sapo', 'Pepe el sapo', 2, croar );


// Al crear distintos animales decimos que estamos creando distintas INSTANCIAS de un objeto.