/*  

EJERCICIO N°10

Cajoneras!!

	- Realizar componentes en los cuales al hacerle click a su header se muestre le contenido.
	- Ademas, al apretar el botón, "Marcar como leído" se debe pone el header en otro color y hacer desaparecer al botón.

*/

(function () {

	$(document).ready(function () {

		var componentes = $('.cajonera');

		componentes.each(function (indice, elemento) {

			var header = $(elemento).find('.header');
			var contenido = $(elemento).find('.contenido');
			var boton = header.find('button');

			header.click(function (event) {

				if(contenido.hasClass('abierto') ){
					//cerrarlo
					contenido.slideUp();
					contenido.removeClass('abierto');

				} else {
					contenido.slideDown();
					contenido.addClass('abierto');
				}

			})

			boton.click(function (event) {

				event.stopPropagation();

				header.css('background-color','lightblue');
				$(event.target).hide();

			});


		})



	});



})()