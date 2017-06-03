/*
TP10: Lista de Artículos
Crear un formulario con 3 campos:
•	Título del Artículo. 
•	Texto del Artículo
•	importancia (será un select box con los valores: “normal”, “novedad” y “urgente” )

A partir de un botón que diga “agregar” ir agregando las noticias en un contenedor en la página.  
Dependiendo del valor que tenga el select “importancia”, se cambiaran los estilos de cada noticia. 
Para eso, deberán generarse previamente clases de CSS para cada uno de los valores obtenidos del select.

*/


(function () { //Por buenas prácticas encapsulamos nuestro código en una IIFE.

	//Ejecutamos nuestro código una vez que terminan de cargarse los elementos del DOM.
	$(document).ready(function() {

		$("#agregar").click(function(event) {
			event.preventDefault(); //Prevenimos el comportamiento por default de los botones

			var titulo = $("#titulo").val();
			var contenido = $("#contenido").val();
			var importancia = $("#importancia").val();

			//creamos nuestro articulo con jQuery
			var articulo = $('<div></div>');
			articulo.addClass('articulo');
			articulo.addClass(importancia);
			
			//Creamos el título del artículo
			var tituloDelArticulo = $('<h2></h2>');
			tituloDelArticulo.html(titulo);

			//Creamos nuestro contenido
			var contenidoDelArticulo = $('<p></p>');
			contenidoDelArticulo.html(contenido);	

			//Luego metemos el título y el contenido en el artículo
			articulo.append(tituloDelArticulo);
			articulo.append(contenidoDelArticulo)

			$("#noticias").prepend(articulo);

		});

	});


})()

