/*  

EJERCICIO N°3

Armar un accordión utilizando jQuery que posea 4 secciones: Pirmavera, Verano, Otoño e invierno

*/


function inicializarAccordión() {

	var accordion = $('#accordion');

	//ocultar las secciónes:
	accordion.find('.accordion-content').hide();

	//Mostrar contenido
	accordion.find('.accordion-header').click( function () {

		if ( $(this).parent().hasClass('active') ) {

			$(this).parent().removeClass('active');
			$(this).next().slideUp();

		} else {

			//Mostrar contenido
			$(this).next().slideDown();

			//Hacer funcion hide siblings

			$(this).parent().addClass('active');

		}

		//Escoder contenido de los hermanos.

	});


}


inicializarAccordión();