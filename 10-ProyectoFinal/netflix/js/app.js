/*  

EJERCICIO N°4

- Utilizar la api de spotify para traer información de los discos de un artista.

*/


/*  

Trabajo práctico final.

Netflix roulete

La appy de netflix roulete nos permite hacer ajax request devolviendonos 1 solo resultado como pelicula o serie sugerida

Un ejemplo es esta url:
http://netflixroulette.net/api/api.php?title=The%20Boondocks&year=2005

La base de la url será: http://netflixroulette.net/api/api.php?
- El primer filtro es el "title=" donde pondremos nuesytro título.
- el segundo parámetro es el año.
- director=Quentin%20Tarantino
- actor=Nicolas%20Cage

*/


$.ajax({
	type: 'GET', //Tipo de operación que voy a realizar
	dataType: "json", //El tipo de datos que voy a traer
	url: 'http://netflixroulette.net/api/api.php?title=The%20Boondocks&year=2005', //La url de donde estan los datos
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