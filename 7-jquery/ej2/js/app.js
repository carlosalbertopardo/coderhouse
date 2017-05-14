/*  

EJERCICIO N°3

Armar un accordión utilizando jQuery que posea 4 secciones: Primavera, Verano, Otoño e invierno

*/

function cerrarHermanos(section) {
	
	section.siblings().removeClass('active');
	section.siblings().find('.accordion-content').slideUp();

}


function inicializarAcordion() {

	$('.accordion-content').hide();

	$('.accordion-header').click(function () {

		var section = $(this).parent();

		if (section.hasClass('active')) {

			section.removeClass('active');
			section.find('.accordion-content').slideUp();


		} else {

			section.addClass('active');
			section.find('.accordion-content').slideDown();

			cerrarHermanos(section);


		}

	})

}


inicializarAcordion();
