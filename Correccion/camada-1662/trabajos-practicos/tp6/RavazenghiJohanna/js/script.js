/* 
TRABAJO PRACTICO N 5
El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director
Debera tener metodos para editar todas sus propiedades, menos su ID, y para los actores tendra que ir agregando uno a uno
*/

/* ALTERNATIVA 1: Con prompt dentro */

var pelicula = {
	ID: 564,
	titulo: [], // Duda: Esta bien con un array vacio si solo va a insertar un nombre?? //
	insertarTitulo: function(){
		var tituloPelicula = prompt(Ingrese el titulo de la pelicula); //Se puede insertar el prompt en la funcion?//
		this.titulo.push(tituloPelicula);
	},
	descripcion:[],
	insertarDescripcion: function(){
		var descripcionPelicula= prompt(Ingrese una breve descripcion); 
		this.descripcion.push(descripcionPelicula);
	},
	año:[],
	insertarAño: function(){
		var añoPelicula= prompt(Ingrese el año de estreno); 
		this.año.push(añoPelicula);
	},
	duracion: [],
	insertarDuracion: function(){
		var duracionPelicula= prompt(Ingrese la duracion de la pelicula); 
		this.duracion.push(duracionPelicula);
	},
	actores: [],
	insertarActores: function(){
		var actoresPelicula = prompt(Ingrese un actor de la pelicula);
		this.actores.push(actoresPelicula);
		var masActoresPelicula = confirm(Desea ingresar otro actor?);
		while(masActoresPelicula){
			actoresPeliculaBis = prompt(Ingrese otro actor de la pelicula);
			this.actores.push(actoresPeliculaBis);
			var masActoresPelicula = confirm(Desea ingresar otro actor?); // Duda: Esta ok repetir una variable que utilicé antes?/
		} 
	},
	director: [],
	insertarDirector: function(){
		var directorPelicula= prompt(Ingrese el nombre del director de la pelicula); 
		this.director.push(directorPelicula);
	}
}


/* ALTERNATIVA 2: Con prompt por fuera e invocando la funcion */

var pelicula = {
	ID: 564,
	titulo: [],
	insertarTitulo: function(nombre){
		this.titulo.push(nombre);
	}
  // FALTA CONTINUAR SI ESTA OK ASI //
}

var tituloPelicula = prompt(Ingrese el titulo de la pelicula);
pelicula.insertarTitulo(tituloPelicula);
