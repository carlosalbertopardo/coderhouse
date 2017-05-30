/*  

EJERCICIO N°9

Hagamos un "Read More!"

El componente readMore es algo muy común en los sitios web. La idea del componente es que nosotros podamos poner cualquier tipo
de contenido, pero solo vemos una parte del mismo. Al apretar un botón readMore, el usuario podrá ver el contenido entero.


	Entonces
	- Realizar un componente el cual solo se vea solo una parte de su texto
	- Al apretar el botón readMore, el contenedor se verá entero.

*/

(function () {

	$(document).ready(function () {

		var components = $('.read-more-component');

		//each

		components.each(function (indice, elemento) {

			console.log(indice);
			console.log(elemento);

			var readMoreButton = $(elemento).find('.read-more');
			var readLessButton = $(elemento).find('.read-less');
			var content = $(elemento).find('.read-more-content');
			var stop = $(elemento).find('.stop');


			var alturaMaxima = content.height();
			var alturaMinima = stop.position().top; 

			content.height(alturaMinima);

			readMoreButton.on('click', function (event) {

				content.height(alturaMaxima);
				readMoreButton.hide();
				readLessButton.show();

			});


			readLessButton.on('click', function (event) {

				content.height(alturaMinima);
				readLessButton.hide();
				readMoreButton.show();

			});



		});

/*

*/

	})


})()