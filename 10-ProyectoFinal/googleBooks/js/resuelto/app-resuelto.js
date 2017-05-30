/*  

EJERCICIO N°4

Spotify

*/


$.ajax({
	type: 'GET', //Tipo de operación que voy a realizar
	dataType: "json", //El tipo de datos que voy a traer
	url: 'https://api.spotify.com/v1/artists/6Q6qTNC2rAegcR5QjzcRgE/albums?album_type=Album&limit=50', //La url de donde estan los datos
	success: function (data) { //Lo que voy a hacer si llega bien la informacion
		console.log(data.items);

		var albums = data.items;

		for (var i = 0; i < albums.length; i++) {

			console.log(albums[i]);

			var albumImageUrl = albums[i].images[0].url;

			var image = '<img src="'+albumImageUrl +'"/>';

			console.log(albums[i].name);
			console.log(image);

			$('main').append('<h2>'+albums[i].name+'</h2>');
			$('main').append(image);

		}

	},
	error: function (data) { //Lo que voy a hacer si llega mal la información
		console.log(data);
		console.log('could not find the file');
	}
});