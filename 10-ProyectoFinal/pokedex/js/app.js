/*  

Trabajo Final: Pokedex!

- Utilizar la api de https://pokeapi.co/ para armar nuestro pokedex.

*/

function makeAjaxRequest(ajaxUrl, callback) {

	$.ajax({
		type: 'GET', //Tipo de operación que voy a realizar
		dataType: "json", //El tipo de datos que voy a traer
		url: ajaxUrl, //La url de donde estan los datos
		success: function (data) { //Lo que voy a hacer si llega bien la informacion
			callback(data);
		},
		error: function (data) { //Lo que voy a hacer si llega mal la información
			console.log(data);
			console.log('could not find the file');
		}
	});

}


function showPokemon(data) {

	//Set Name
	$('#poke-name').html(data.name);

	//Set Type

	var types = data.types;
	$('.types').html('');
	for (var i = 0; i < types.length; i++) {
		var type = $('<li>'+ types[i].type.name +'</li>');
		type.addClass(types[i].type.name);
		$('.types').append(type);
	}

	//Set Image
	var pokeImage = $('#poke-image');
	pokeImage.attr('src',data.sprites.front_default);

	//Set Number
	$('#poke-number').html(data.id);

	//Add Description
	makeAjaxRequest('http://pokeapi.co/api/v2/pokemon-species/'+ data.id, showDescription);

}

function showLoader() {
	$('.loading').show();
}

function hideLoader() {
	$('.loading').hide();
}

function showDescription (data) {
	$('#poke-info').html(data.flavor_text_entries[1].flavor_text);

	//Hide Loading Logo.
	hideLoader();


}

function addPokemons (data) {

	console.log(data.results);

	var pokemonList = data.results;

	for (var i = 0; i < pokemonList.length; i++) {

		//Cargar Titulo
		var nameContainer = $('<a></a>');
		nameContainer.html(pokemonList[i].name);
		nameContainer.attr('href', pokemonList[i].url);

		//Attach click event
		nameContainer.click(function (event) {
			
			$('.init').hide();
			event.preventDefault();
			var ajaxUrl = event.target.href;

			showLoader();
			makeAjaxRequest(ajaxUrl, showPokemon );

		});

		var pokemon = $('<li></li>');
		pokemon.append(nameContainer);

		$('.pokemon-list ul').append(pokemon);

	}

}



(function () {

	$(document).ready(function () {

		//traerInformacion();
		makeAjaxRequest('http://pokeapi.co/api/v2/pokemon/', addPokemons);

	})

})()

