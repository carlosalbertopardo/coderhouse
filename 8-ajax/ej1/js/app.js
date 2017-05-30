/*  

EJERCICIO N°1

Nuestro primer ajax :)

- Traer hacia nuestro html la información de colores.json utilizando ajax
- Crear una seccion que tenga cada uno de los colores del json de fondo, agregando los estilos en linea.

*/

(function () { //Por buenas practicas encapsulamos todo en una funcion que se autoinvoca.

	$(document).ready(function() { //Ejecutamos nuestro programa una ves que todos los elementos del DOM terminaron de cargar
		
		// Hcemos nuestra llamada ajax para traer el json	
		$.ajax({
			type: 'GET', // Hacemos un pedido de informacion
			dataType: "json", // El tipo de datos que vamos a traer es un json
			url: 'js/colores.json',  // URL del lugar donde queremos acceder
			success: function (data) { // Funcion que se ejecuta si no hbubo ningun error en la request

				var objetoColores = data; // Todo viene en la variable "data" 
				var arrayDeColores = objetoColores.colorsArray; // A partir de data obtenemos el array dentro del objeto 

				for (var i = 0; i < arrayDeColores.length; i++) { // Recorremos el array
			
					console.log(arrayDeColores[i].colorName); // de cada objeto obtenemos el color
			
					var seccion = $('<section></section>'); // Creamos un tag section por cada objeto
					
					seccion.css('background-color', arrayDeColores[i].colorName) // Cambiamos el background de la seccion
					seccion.css('text-align', 'center') ; //Otros estilos de CSS para cada section

					seccion.html(arrayDeColores[i].colorName); // Cambiamos el texto de la seccion
					$('body').append(seccion); // Apendeamos la seccion al body de nuestra pagina

				}

			},
			error: function (data) { // Esta funcion se ejecuta en caso de que halla habido algun error al hacer el "get" de la informacion.
				console.log(data);
				console.log('No se encontró el archivo');
			}
		});

	});ro 

})()

// Y asi funciona AJAX permitiendonos hacer requests a servidores sin recargar la pagina :)
// No olviden tener prendido el xammp o cualquier otro servidor local!

