/*  

EJERCICIO N°3

	Crear una pagina web en la cual el usuario aprete cualquier
	letra del teclado y aparezca en la pantalla.

Ejercicio: Teléfono

-	Maquetar el teclado del Telefono y un display
-	Los botones deberan ser clickeables y mostrar lo clickeable en el display
-	Adicionalmente capturar el teclado para marcar y mostrar en el display
-	El teclado tendrá 2 botones:
-	El primer botón va a ser agregar contacto. El cual pedirá un nombre y agrgará el contacto a la base de datos y en el localStorage.
-	Renderizar la lista de contactos.
-	El segundo botón llamará por teléfono. En caso de encontrar el contacto en la base, dirá “Llamando a NOMBREDELCONTACTO”.
	Cuando haga click en el contacto, llamar al contacto.
-	El teléfono debe tener 8 numeros


*/


(function () {

	var contactos = [

		{
			nombre:'Batman',
			telefono:'24587845'
		},
		{
			nombre:'La mujer maravilla',
			telefono:'24587005'
		},
		{
			nombre:'He-Man',
			telefono:'45963215'
		}
	]


	function llamar() {

	}


	function agregarContacto() {

	}


	function renderizarContactos () {

		


	}


	function inicializarTeclado() {


		$('.tecla').click(function () {

			var numero = $(this).attr('id');

			console.log($('.display').html());

			if( $('.display').html().length < 8 ) {
				$('.display').html( $.trim($('.display').html() ) + numero );				
			}

		});

	}

	inicializarTeclado();









})()
