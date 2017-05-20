/*  

EJERCICIO N°1

Nuestro primer ajax :)
*/


$.ajax({
	type: 'GET',
	dataType: "json",
	url: 'js/colores.json',
	success: function (data) {
		console.log(data);
	},
	error: function (data) {
		console.log(data);
		console.log('could not find the file');
	}
});