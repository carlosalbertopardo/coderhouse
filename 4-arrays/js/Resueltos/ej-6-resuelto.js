/*  

EJERCICIO N°6

Dado el siguiente array, 
crear una funcion la cual reciba un array de empresas
y le quite todos los elementos\
que estén despues de la posicion donde esté Google.

*/

var empresas = ['Nintendo','Google','Microsoft','Apple','Samsung','Sony'];

function sacarElementos(arrayARecorrer) {

	for (var i = arrayARecorrer.length - 1 ; i > 0; i--) {
	
		if (arrayARecorrer[i] !== 'Google') {
			arrayARecorrer.pop();

		} else {

			console.log(arrayARecorrer);
			break			
		}

	}

}

sacarElementos(empresas);
