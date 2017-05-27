/*  

EJERCICIO N°10

Cajoneras!!

	- Realizar componentes en los cuales al hacerle click a su header se muestre le contenido.
	- Ademas, al apretar el botón, "Marcar como leído" se debe pone el header en otro color y hacer desaparecer al botón.

*/



(function () {

	$(document).ready(function() {


		function inicializarCajoneras() {

			var cajoneras = $('.cajonera');

			cajoneras.each(function(index, element) {

				var cajonera = $(this);
				var header = cajonera.find('.header');
				var contenido = cajonera.find('.contenido');
				var boton = cajonera.find('button');

				header.on('click', function () {

					if(!cajonera.hasClass('active')) {
						contenido.slideDown();
						cajonera.addClass('active');
					} else {
						contenido.slideUp();
						cajonera.removeClass('active');
					}

				});

				//boton
				boton.on('click', function (event) {
					event.stopPropagation();
					$(this).parent().addClass('leido');
					$(this).hide();
				})

			})

		}

		function abrirMenu() {

			$('nav').animate({
				right: 0
			});

		}

		function cerrarMenu() {

			$('nav').animate({
				right: "-200px"
			})

		}


		function inicializarMenu() {

			$('.menu .abrir').click(function () {

				abrirMenu();

			})

			$('.menu .cerrar').click(function () {

				cerrarMenu();

			})

		}




		inicializarMenu();
		inicializarCajoneras();

	})

})()