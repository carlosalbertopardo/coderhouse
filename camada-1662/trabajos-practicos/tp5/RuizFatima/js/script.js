/*  

TP N°5
Crear una funcion que agregue objetos peliculas

El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director
Debera tener metodos para editar todas sus propiedades, menos su ID, y para los actores tendra que ir agregando uno a uno

*/
console.log("Agregar/Editar datos de pelicula:id, titulo, descripcion, ano, duracion, actores, director"); 
var peliculas = {} 

function crearPelicula (id, titulo, descripcion, ano, duracion, director) {

	var pelicula = {
		titulo: titulo, 
		descripcion: descripcion,
		ano: ano,
		duracion: duracion,
		actores: [],
		director: director,
		agregarActor: function (nombreActor) { 
			this.actores.push(nombreActor); 
		},
		getTitulo: function(){
		return this.titulo;
		},
		getDescripcion: function(){
		return this.descripcion;
		},
		getAno: function(){
		return this.ano;
		},
		getDuracion: function(){
		return this.duracion;
		},
		getDirector: function(){
		return this.director;
		},
		setTitulo: function(nuevoTitulo){
		this.titulo = nuevoTitulo;
		},
		setDescripcion: function(nuevoDescripcion){
		this.descripcion = nuevoDescripcion;
		},
		setAno: function(nuevoAno){
		this.ano = nuevoAno;
		},
		setDuracion: function(nuevoDuracion){
		this.duracion = nuevoDuracion;
		},
		setDirector: function(nuevoDirector){
		this.director = nuevoDirector;
		},


	}

	peliculas[id] = pelicula;

	console.log(peliculas); 
}

crearPelicula(01, "El secreto de sus ojos", "Película argentina de drama-suspenso", 2009, "120 min", "Juan José Campanella");
crearPelicula(02, "Relatos salvajes", "Película argentina de antología y comedia negra-drama", 2014 ,  "120 min", "Damián Szifron");
crearPelicula(03, "El Clan", "película argentina dramática-policial", 2015, "110 min", "Pablo Trapero");