/*  

EJERCICIO N°3

Armar un accordión utilizando jQuery que posea 4 secciones: Primavera, Verano, Otoño e invierno

*/

/*
RESOLUCION:
Lo recomendable siempre para hacer un componente es ir haciendo las cosas de a poco, paso por paso

*/

(function () { // Encapsulamos nuestro codigo por buenas practicas :)

	//Hagamos una funcion que maneje el funcionamiento de nuestro acordión
	function inicializarAcordion() {

		//En primer lugar, debemos ocultar todos los contenidos, asi el acordión se inicializa cerrado
		$('.accordion-content').hide();

		//Ahora hacemos un evento para cuando hago click en los headers de cada sección
		$('.accordion-header').click(function () {

			//Selecconamos la sección (El padre del elemento donde hicimos click)
			var section = $(this).parent();

			//Preguntamos: la section está abierta? (Usamos la clase active para saber que seccion esta activa y cual no.)
			if (section.hasClass('active')) {

				//Si está activa, la cerramos: 
				//para eso sacamos la clase active de nuestra seccion 
				section.removeClass('active');
				//Encontramos el contenido y lo cerramos con un efecto
				section.find('.accordion-content').slideUp();


			} else {

				//Si la sección no está activa, la abrimos: 
				//Para eso agregamos la clase active de nuestra seccion.
				section.addClass('active');
				//Encontramos el contenido y lo abrimos con un efecto
				section.find('.accordion-content').slideDown();

				/*A su vez, si abrimos una seccion debemos cerrar las secciones hermanas.
				lograr esto creamos una función llamada "cerrarHermanos", la cual recibirá el objeto
				sección de jQuery */
				cerrarHermanos(section);

			}

		})

	}

	//La funcion cerrará a los hermanos de nuestra sección
	function cerrarHermanos(section) {
		
		//Por cada hermano que encuentre, le saco la clase active
		section.siblings().removeClass('active');
		//Y ademas collapso su contenido.
		section.siblings().find('.accordion-content').slideUp();

	}


	//Finalmente inicializamos nuestro accordión :)
	inicializarAcordion();

})()