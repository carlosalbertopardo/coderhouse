/*  

EJERCICIO N°3

Dado el siguiente array, encontrar si tiene el valor "-" reemplazarlo por "valor vacío".
Al finalizar el programa, mostrar el array e indicar la cantidad de veces que el valor fue reemplazado.

*/

var continentes = ['Asia','América','Europa','-','Oceanía','África','-','Antártida'];


/* 

SOLUCIÓN

En primer lugar recorremos el array con un ciclo y preguntamos en cada posición 
si el valor en el lugar donde estamos parados es igual a "-"(Cuidado! es un string!)
En caso de que la condición se cumpla, reemplazo el valor por el texto "valor vacío"

*/

// Inicializo una variable donde voy a guardar la cantidad de veces que cambie un valor.
var cantidadDeValoresVacios = 0;

//Recorro el Array
for (var i = 0; i < continentes.length; i++) {
	
	//Pregunto si la posicion en la que estoy tiene el valor '-'
	if(continentes[i] == '-') {
		//Si se cumple, reemplazo y sumo 1 a la cantidad de valores que cambié
		continentes[i] = 'Valor Vacío';
		cantidadDeValoresVacios++;	
	}

}

// Finalmente muestro por pantalla :).
console.log(continentes);
console.log('Reemplazamos el valor ' + cantidadDeValoresVacios + ' veces!');

