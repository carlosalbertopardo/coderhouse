/*  

EJERCICIO N°2

Fun with flags!!

- En nuestra carpeta tenemos un archivo .json en donde encontramos mucha información sobre banderas de paises.
- Traer esa información con ajax y renderizar todas las banderas con el nombre de cada país a su lado.


*/


(function () {

	$(document).ready(function () {

		$.ajax({
			type: 'GET',
			dataType: "json",
			url: 'json/flags.json',
			success: function (data) {
				console.log(data);
			},
			error: function (data) {
				console.log(data);
				console.log('could not find the file');
			}
		});

	});

})();