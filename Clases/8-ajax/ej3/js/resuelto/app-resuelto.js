/*  

EJERCICIO N°3

- Hacer un componente que importe html
- Al hacer click en la imagen de cada director, haremos una llamada ajax a un archivo que contiene su biografía.
- Una ves que tengamos el Html, deberemos incluirlo en nuestra pagina.
- Si hacemos click en otro director, debemos cargar su información en la "descripcion"

*/
(function () {

	$(document).ready(function () {

		$.ajax({
			type: 'GET',
			dataType: "html",
			url: 'includes/tarantino.html',
			success: function (data) {
				console.log(data);
				$('.descripcion').append(data);
			},
			error: function (data) {
				console.log(data);
				console.log('could not find the file');
			}
		});

	});

})()