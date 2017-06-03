/*
TP5: Películas
• Crear un array de películas
• Crear una función que agregue objetos “película” al array “películas”:  
• El objeto película deberá tener ID, titulo, descripción, año, duración, actores, director.
• Deberá tener métodos para editar todas sus propiedades menos su ID, y para los actores tendrá que ir agregando uno a uno
*/


//En primer lugar creamos nuestro array de peliculas, donde meteremos todas las nuevas peliculas
var peliculas = [];

//Creamos nuestra función que cree peliculas
function agregarPelicula(id, titulo, descripcion, year, duracion, director) {

	//Nuestra pelicula va a ser un nuevo objeto
	var pelicula = {
		id:id,
		titulo:titulo,
		descripcion:descripcion,
		año:year,
		actores:[], //inicializamos actores como un array vacío para cargarlo despues.
		director:director,
		setTitulo: function(tituloCambiado){
			this.titulo = tituloCambiado;
		},
		setDescripcion: function(descCambiado){
			this.descripcion = descCambiado;
		},
		setAño: function(añoCambiado){
			this.año = añoCambiado;
		},
		setDuracion: function(duracionCambiada){
			this.duracion = duracionCambiada;
		},
		setDirector: function(directorCambiado){
			this.director = directorCambiado;
		}
		agregarActor: function(nuevoAactor){ //Hacemos un metodo para poder agregar actores
			this.actores.push(nuevoAactor);
		},
	}

	//Finalmente metemos nuestra pelicula en el array de pelis.
	peliculas.push(pelicula);

}

//Probemos nuestra función!
var pelicula1 = agregarPelicula(1, 'Jurassic Park', 'Dinosaurios!!!', 1993, '90 min', 'Steven Spielberg' );
var pelicula2 = agregarPelicula(1, 'Jurassic Park 2', 'Mas Dinosaurios!!!', 1997, '92 min', 'Steven Spielberg' );
