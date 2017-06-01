/*  

Trabajo Final: Pokedex!

- Utilizar la api de https://pokeapi.co/ para armar nuestro pokedex.

*/


function traerInformacion () {


	//var page = 'offset=' + 20;

	$.ajax({
		type: 'GET', //Tipo de operación que voy a realizar
		dataType: "json", //El tipo de datos que voy a traer
		url: 'http://pokeapi.co/api/v2/pokemon/', //La url de donde estan los datos
		success: function (data) { //Lo que voy a hacer si llega bien la informacion
			console.log(data.results);

			var pokemonList = data.results;

			for (var i = 0; i < pokemonList.length; i++) {
				console.log(pokemonList[i].name);

				//Cargar Titulo

				var nameContainer = $('<a></a>');
				nameContainer.html(pokemonList[i].name);
				nameContainer.attr('href', pokemonList[i].url);


				//Attach click event
				nameContainer.click(function (event) {
					
					event.preventDefault();
					var ajaxUrl = event.target.href;

					showPokemon(ajaxUrl);

				});

				var pokemon = $('<li></li>');
				pokemon.append(nameContainer);


				$('.pokemon-list ul').append(pokemon);




				//Cargar imagen?
				/*
				var imagenes = albums[i].images;
				console.log(imagenes[0].url);
				var imagen = $('<img>');
				imagen.attr('src', imagenes[0].url );

				$('body').append(imagen);
*/
			}


		},
		error: function (data) { //Lo que voy a hacer si llega mal la información
			console.log(data);
			console.log('could not find the file');
		}
	});


}




(function () {

	$(document).ready(function () {

		traerInformacion();

	})

})()

