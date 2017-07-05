var pelicula = {
	id:1,
	titulo:'The Matrix',
	descripcion: ' Pelicula de ciencia ficcion',
	año: 1999,
	duracion: 230,
	actores: [],
	director:'Hermanas Wachowski',
	setTitulo: function () { //set new title
		this.titulo = 'Star Wars';
			},
	setDescripcion: function () {//Set new description
		this.descripcion = 'Otra pelicula de ciencia ficcion';
			},
	setAño: function () {//Set new year
		this.año = 1985;
			},
	setDuracion: function () {//Set new duration
		this.duracion = 284;
			},
	setActores: function () { //function for new actor
			var nuevoActor = prompt('Ingrese nombre del actor');
			pelicula['actores'].push(nuevoActor);
			var siguienteActor = confirm('Desea ingresar otro actor');
				if (siguienteActor) { 
					pelicula['setActores']();
				} 
				else {
					console.log('gracias ');
				}
		},
	setDirector: function () {// function for set new director
		this.director = 'George Lucas';
			},

}
/*
console.log(pelicula);
console.log(pelicula['setTitulo']());
console.log(pelicula['setDescripcion']());
console.log(pelicula['setAño']());
console.log(pelicula['setDuracion']());
console.log(pelicula['setActores']());
console.log(pelicula['setDirector']());
console.log(pelicula);
*/
