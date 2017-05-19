/*  

EJERCICIO N°3

	Crear una pagina web en la cual el usuario aprete cualquier
	letra del teclado y aparezca en la pantalla.

*/


(function () {


		function inicializarTooltips() {

			var tooltips = $('.tooltip');


			tooltips.mouseover(function () {

				console.log('ine!!');
					console.log($(this));

				$(this).find('.tooltip-content').show()

			});


			tooltips.mouseout(function () {

				$(this).find('.tooltip-content').hide()

			});


		}

		inicializarTooltips();

})()