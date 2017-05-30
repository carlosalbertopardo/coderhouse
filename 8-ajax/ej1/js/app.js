/*  

EJERCICIO N°1

Nuestro primer ajax :)

- Traer hacia nuestro html la información de colores.json utilizando ajax
- Crear una seccion que tenga cada uno de los colores del json de fondo, agregando los estilos en linea.

*/

$.ajax({
	type: 'GET', //  POST
	dataType: "json",
	url: 'js/colores.json', 
	success: function (data) {


		var objetoColores = data;
		var arrayDeColores = objetoColores.colorsArray;

		for (var i = 0; i < arrayDeColores.length; i++) {
	
			console.log(arrayDeColores[i].colorName);
	
			var seccion = $('<section></section>');
			seccion.css('background-color', arrayDeColores[i].colorName)

			seccion.html(arrayDeColores[i].colorName);
			$('body').append(seccion);


		}


	},
	error: function (data) {
		console.log(data);
		console.log('No se encontró el archivo');
	}
});

