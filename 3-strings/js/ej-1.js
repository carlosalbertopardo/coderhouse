'use strict';

/*  

EJERCICIO N°1
"crear una funcion donde dado un texto, 
verifique si tiene alguna letra 'u'. 
Confirmar por consola."

*/

var texto = 'Había una vez una vaca, en la quebrada de Humahuaca';
var texto2 = 'manuelita vivia en pehuajo';
var texto3 = 'Este dedito se fue al mercado';
var texto4 = 'vaca';

function encontrarLetra(textoDondeBuscar, queBuscar) {

	var valor = textoDondeBuscar.indexOf(queBuscar);

	if (valor !== -1) {
		console.log(textoDondeBuscar);
		console.log(queBuscar);
		console.log('El texto ingresado tiene el texto ' + queBuscar + ' en la posicion ' + valor);
	} else {
		console.log('El texto no tiene ningun texto ' + queBuscar);
	}
	
}

encontrarLetra(texto, 'vaca');
encontrarLetra(texto, 'vacas');