/*  

EJERCICIO N°4

- Utilizar la api de spotify para traer información de los discos de un artista.

*/


/*  

Trabajo práctico final.

iTunes Data 

https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searchexamples

*/


$.ajax({
	type: 'GET', //Tipo de operación que voy a realizar
	dataType: "jsonp", //El tipo de datos que voy a traer
	url: 'https://itunes.apple.com/search?term=jack+johnson', //La url de donde estan los datos
	success: function (data) { //Lo que voy a hacer si llega bien la informacion
		console.log(data);

		/*
		var albums = data.items;

		for (var i = 0; i < albums.length; i++) {
			console.log(albums[i].name);

			//Cargar Titulo
			var titulo = $('<h2></h2>');
			titulo.html(albums[i].name);
			$('body').append(titulo);


			//Cargar imagen
			var imagenes = albums[i].images;
			console.log(imagenes[0].url);
			var imagen = $('<img>');
			imagen.attr('src', imagenes[0].url );

			$('body').append(imagen);

		}*/


	},
	error: function (data) { //Lo que voy a hacer si llega mal la información
		console.log(data);
		console.log('could not find the file');
	}
});