/*
TP6: Crear el módulo IMDB
•	El array de películas tendrá que ser privado del modulo
•	El modulo tendrá que poder agregar una película (ID y título)
•	Validar que la película ingresada no se encuentre y en caso de encontrarla mostrar un mensaje advirtiendo el error
•	El módulo tendrá que eliminar una película por ID
•	El módulo tendrá que persistir el array de películas en session o local storage para que luego se pueda recuperar y seguir agregando o eliminando
*/

//Creamos nuestro modulo con ina Inmediately invoked function expression (IIFE)
var IMDB = (function() {

	//Parte Privada del módulo
	var peliculas = []; 

	function revisarSiExiste(id, arrayDePeliculas) {

		for (var i = 0; i < arrayDePeliculas.length; i++) {
			if (arrayDePeliculas[i].id === id) {
				return i;
			};
		}

		return false;

	}

	//Parte pública del módulo - public API
	return {
		cargarPelicula: function(id, titulo) {

			var existe = revisarSiExiste(id,peliculas);

			if(existe === false) {
				
				console.log('La pelicula no existe!');

				var pelicula = {
					id:id,
					titulo:titulo
				}

				peliculas.push(pelicula);

			} else {
				console.log('No se puede agregar la pelicula. Ya existe una con el mismo id.');	
			
			}

		},
		mostrarPeliculas: function(){
			console.log('Peliculas ingresadas:');
			for(var i = 0; i < peliculas.length; i++){
				console.log(peliculas[i]);
			}
		},
		eliminarPelicula: function(id){
			
			var existe = revisarSiExiste(id,peliculas);

			if(existe !== false) {

				//Existe en este caso seria la posición donde existe
				peliculas.splice(existe, id);
				console.log("La pelicula con el id: " + id +" fue eliminada");

			} else {
				console.log("No existe ninguna pelicula con el id: " + id);
			}

		},
		guardarPeliculasEnStorage: function(){
			return localStorage.setItem("pelis",JSON.stringify(peliculas));
		},		
		recuperarPeliculasEnStorage: function(){
			return JSON.parse(localStorage.getItem("pelis"));
		},
		borrarPeliculasEnStorage: function(){
			localStorage.clear();
			console.log("peliculas borradas");
		}

	}

})()