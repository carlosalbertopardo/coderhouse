/*  

EJERCICIO N°9

Hagamos un "Read More!"

	- Realizar un componente el cual solo se vea una parte de su texto y al apretar un boton se vea el texto completo

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
				boton.on('click', function () {
					$(this).parent().addClass('leido');
					$(this).hide();
				})

			})



		}


		inicializarCajoneras();




	})
})()