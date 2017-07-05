/*  

EJERCICIO N°3
Crear un componente de tabs con jQuery

*/

/*
RESOLUCION:
Recordá ir paso a paso.
*/

(function () { //Encapsulamos nuestro código por buenas prácticas

	function inicializarTabs() {

		//Escondo todos los contenidos de las tabs
		$('.content').hide();

		//Adjunto los event handles cuando haga click en cada elemento que tenga la clase "tab"
		$('.tab').click(function () {

			//Obetengo el número que está en el Id del elemento
			var tabId = $(this).attr('id');
			var stringId = tabId.split('-');
			var id = stringId[1];	

			//Prengunto si la tab está NO esta activa: Si no está activa la activo:
			if (!$(this).hasClass('active')) {

				//Le agregao la clase "active" a la tab
				$(this).addClass('active');
				//Y muestro el contenido del elemento content concatenado con el id de la tab que obtuve
				$('#content-'+id).show();

				//Por ultimo cierro las tabs activas anteriormente:
				cerrarOtrasTabs(id);

			}

		})

	}

	//Esta funcion revisa las tabs hermanas y las cierra si están activas
	function cerrarOtrasTabs(id) {

		//Sacarle la clase active a los tab hermanos
		$('#tab-'+id).siblings().removeClass('active');

		//Ocultar los tabs hermanos
		$('#content-'+id).siblings().hide();

	}

	//Por último inicializo el componente
	inicializarTabs()

	//De YAPA: Puedo activar una tab llamando al evento
	$('#tab-1').click();


})()



