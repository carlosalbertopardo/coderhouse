/*  

EJERCICIO N°4
"Dado un array, quitar el primer elemento del mismo."

*/

var equiposDeFutbol = ['River','Boca','Racing','Independiente','San Lorenzo','Huracán'];
console.log(equiposDeFutbol);

/* 
SOLUCIÓN 

Debemos recordar que los arrays funcionan como una pila. Siempre que saco un elemento, 
saco el que está en la última posicion, y siempre que agrego uno, se me agrega en la
última posicion (Como si fuera una pila de cajas!);
No puedo sacar el primer elemento directamente asi que necesito
un array auxiliar para guardar el que saco.

La estrategia que vamos a seguir es:
- Sacar todos los elementos del array y ponerlos en el array auxiliar utilizando las funciones .pop y .push
- Al ponerlos en el array auxiliar, los elementos se me van a apilar al reves de como estaban originalement, quedando "River" como último elemento.
- Ahora puedo sacar a "River" del array auxiliar y tirarlo a la basura.
- Pero ahora tengo que volver a poner todos los elementos en el array original para que queden y el mismo orden que estaban.

*/

//Creo un array auxiliar
var arrayAux = [];

//Creo una variable para guardar el largo del array.
var largo = equiposDeFutbol.length;

//Creo un variable en la cual guardar el elemento que saco de cada array. Se va a ir actualizando constantemente.
var elementoQueSaque = "";

// Recorro el array. 
for (var i = 0; i < largo; i++) {
	
	//Saco el último elemento del array y se lo asigno a la variable "elementoQueSaque";
	elementoQueSaque = equiposDeFutbol.pop();

	//Cargo el elemento que saqué en el array auxiliar.
	arrayAux.push(elementoQueSaque);

	//Esto se repite por cada elemento del array de equipos de futbol.
}

// Ahora puedo sacar a River del array auxiliar, que es lo que se pedía en la consigna.
arrayAux.pop();

console.log("arrayAux = " + arrayAux);

//Ahora que saqué el primer elemento, tengo que volver a poner todos los equipos en el mismo orden en el que estaban originalmente.

//Repito lo mismo que hice antes. Paso de a uno los elementos del arrayAux, al array de equiposDeFutbol.

//Ahora la variable largo es el largo del array auxiliar
largo = arrayAux.length;

// Recorro el arrayAux
for (var i = 0; i < largo; i++) {

	//Saco el último elemento del array y se lo asigno a la variable "elementoQueSaque";
	elementoQueSaque = arrayAux.pop();

	//Cargo el elemento que saqué en el array auxiliar.
	equiposDeFutbol.push(elementoQueSaque);

}

console.log(equiposDeFutbol);

/* Éxito! */