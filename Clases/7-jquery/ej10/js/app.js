/*  

EJERCICIO N°10

Cajoneras!!

	- Realizar componentes en los cuales al hacerle click a su header se muestre le contenido.
	- Ademas, al apretar el botón, "Marcar como leído" se debe pone el header en otro color y hacer desaparecer al botón.

*/

(function () {  // Encapsulamos todo en una funcion que se autonivoque por buenas practicas.

	$(document).ready(function () { // El ready se dispara una vez que los elementos del DOM estan listos

		var componentes = $('.cajonera'); // Cada cajonera va a ser un componente que podremos repetir

		componentes.each(function (indice, elemento) {// Utilizamos el metodo Each de jQuery para hacer algo por cada uno de los componentes

			//Ligamos cada elemento BUSCANDOLO DENTRO de cada componente con el .find
			var header = $(elemento).find('.header');
			var contenido = $(elemento).find('.contenido');
			var boton = header.find('button');


			header.click(function (event) { // cuando hagamos click en el header abrimos o cerramos el componente

				//Preguntamos si esta abierto o cerrado con una clase. 
				if(contenido.hasClass('abierto') ){
					//cerrarlo
					contenido.slideUp();
					contenido.removeClass('abierto');

				} else {
					//Abrirlo
					contenido.slideDown();
					contenido.addClass('abierto');
				}

			})

			boton.click(function (event) { // Click del botón
				event.stopPropagation(); // Usamos el stopPropagation() para que el click no afecte al header.

				header.css('background-color','lightblue');
				$(event.target).hide();

			});

		})

	});

})()