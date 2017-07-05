/*  

EJERCICIO N°10
"Realizar una funcion que tome un array como parametro
y muestre por pantalla la cantidad de elementos tipo number, 
la cantidad de elementos tipo string y la cantidad de elementos tipo boolean. 
Luego llamar a la funcion con 3 arrays distintos."

*/

//Primero creamos 2 arrays para luego llamar a nuestra funcion con distintos parámetros.
var array1 = [123,'azul',true,false,'verde','gris'];
var array2 = ['azul','gris'];


//Creamos nuestra funcion que reciba un array como parámetro.
function checkArray(arrayToCheck) {
	/*Dentro de la función creamos 3 variables diferentes que las utilizarémos como contadores
	para almacenar datos. Es importante destacar que las declaramos detro de la funcion para que
	cada vez que llamamos a la funcion, estas variables se inicializen en 0 nuevamente */
	var cantidadStrings = 0;
	var cantidadNumbers = 0;
	var cantidadBooleans = 0;


	//Empezamos a recorrer el array
	for (var i = 0; i < arrayToCheck.length; i++) {

		/*En cada posición preguntamos el tipo de contenido con "typeof" y sumamos 1 a 
		cada contador en caso de que el tipo coincida */

		if (typeof(arrayToCheck[i]) === 'string') {
			cantidadStrings++;
		} else if (typeof(arrayToCheck[i]) === 'number') {
			cantidadNumbers++
		} else if (typeof(arrayToCheck[i]) === 'boolean') {
			cantidadBooleans++
		}

	}

	/*Y una vez que terminamos de recorrer el array y analizar su contenido 
	mostramos por pantalla los resultados*/
	console.log("La cantidad de elementos de tipo 'string' es '" + cantidadStrings);
	console.log("La cantidad de elementos de tipo 'number' es '" + cantidadNumbers);
	console.log("La cantidad de elementos de tipo 'boolean' es '" + cantidadBooleans);
	console.log('///////Fin del proceso////////');

}

//Finalmente, para correr nuestra funcion, debemos invocarla cuantas veces queramos:
checkArray(array1);
checkArray(array2);