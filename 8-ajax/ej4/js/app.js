/*  

EJERCICIO N°4

- Utilizar la api de spotify para traer información de los discos de un artista.

*/


/*  

EJERCICIO N°4

Spotify

*/


$.ajax({
	type: 'GET', //Tipo de operación que voy a realizar
	dataType: "json", //El tipo de datos que voy a traer
	url: 'https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm/albums?album_type=Album&limit=50', //La url de donde estan los datos
	success: function (data) { //Lo que voy a hacer si llega bien la informacion
		console.log(data.items);

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



		}


	},
	error: function (data) { //Lo que voy a hacer si llega mal la información
		console.log(data);
		console.log('could not find the file');
	}
});