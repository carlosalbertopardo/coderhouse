/*  

EJERCICIO N°1

Nuestro primer ajax :)

- Traer hacia nuestro html la información de colores.json utilizando ajax
- Crear una seccion que tenga cada uno de los colores del json de fondo, agregando los estilos en linea.

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
		console.log('No se encontró el archivo');
	}
});