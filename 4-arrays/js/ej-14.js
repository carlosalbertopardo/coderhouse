/*  

EJERCICIO N°14

Crear una function que ordene un array 
dependiendo de sus argumentos
Debe recibir:
- Un array a ordernar
- Un string con la forma de ordenamiento ('asc' o no).

*/

var edades = [4, 8,32,54,16,28,];


function ordenar(arrayAOrdenar, modo){


	arrayAOrdenar.sort(function(a,b){

		if (modo === 'asc') {

			if(a > b) {
				return 1 // Si retorna 1 cambian de lugar
			} else {
				return -1 // Si retorna -1 no cambian de lugar
			}

		} else {

			if(a > b) {
				return -1
			} else {
				return 1
			}

		}

	});

}

ordenar(edades,'asc');

console.log(edades);

ordenar(edades,'desc');
console.log(edades);