/*  

EJERCICIO N°9

Hagamos un "Read More!"

El componente readMore es algo muy común en los sitios web. La idea del componente es que nosotros podamos poner cualquier tipo
de contenido, pero solo vemos una parte del mismo. Al apretar un botón readMore, el usuario podrá ver el contenido entero.


	Entonces
	- Realizar un componente el cual solo se vea solo una parte de su texto
	- Al apretar el botón readMore, el contenedor se verá entero.

*/

(function () { // Encapsulamos todo en una funcion que se autonivoque por buenas practicas.

	$(document).ready(function () { // El ready se dispara una vez que los elementos del DOM estan listos


		/* Le idea de este ejercicio es ver como podemos encapsular nuestro codigo,
		para que  podamos poner en nuestra pagina varios componentes del mismo tipo */
		
		var components = $('.read-more-component'); //cada componente seran los que tengan la clase read-more-component

		components.each(function (indice, elemento) { // Utilizamos el metodo Each de jQuery para hacer algo por cada uno de los componentes

			// el each nos trae 2 argumentos:
			console.log(indice); // El indice seria como el numero de vuelta del ciclo for
			console.log(elemento); // El elemento es el actual componente

			//Ligamos cada elemento BUSCANDOLO DENTRO de cada componente con el .find
			var readMoreButton = $(elemento).find('.read-more');
			var readLessButton = $(elemento).find('.read-less');
			var content = $(elemento).find('.read-more-content');
			var stop = $(elemento).find('.stop');


			var alturaMaxima = content.height();
			var alturaMinima = stop.position().top; 

			content.height(alturaMinima);

			//Ligamos los clicks de cada boton
			readMoreButton.on('click', function (event) {

				content.height(alturaMaxima);
				readMoreButton.hide();
				readLessButton.show();

			});

			//Volvemos a la posicion original con el read less.
			readLessButton.on('click', function (event) {

				content.height(alturaMinima);
				readLessButton.hide();
				readMoreButton.show();

			});

		});

	})

})()