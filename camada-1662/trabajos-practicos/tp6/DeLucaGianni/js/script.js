


var imdb = (function(){

// privado

	var peliculas = [];

	function verificar(id, peliculas){
		for(var i = 0; i < peliculas.length; i++){
			if(peliculas[i].id === id){
				return true;
			}
		}
		return false;
	}

	// publico


	return {
			agregarPelicula: function(id, titulo){
				var existe = verificar(id, peliculas);
				if(!existe){

					var pelicula = {
					id:id,
					titulo:titulo

							}

				peliculas.push(pelicula);

				console.log("La Pelicula fue agregada");

				localStorage.setItem('pelis', JSON.stringify(peliculas));

			} else {
				console.log("OJO, La Pelicula ya existe");
			}


			},

			mostrarPeliculas: function(){
				for(var i = 0; i < peliculas.length; i++){
					console.log(peliculas[i]);
				}
			},

			eliminarPeliculaPorId: function(id){
				peliculas.splice(0, id);
				console.log("La pelicula con el id: " + id +" fue eliminada");
			},

			peliculasEnStorage: function(){
				return JSON.parse(localStorage.getItem("pelis"));
			},

			borrarPeliculasEnStorage: function(){
				return localStorage.clear();
				console.log("peliculas borradas");
			}

	}




})();


