
function agregarPelicula(id, titulo, descripcion, año, duracion, actores, director){

var pelicula = {
  id:id,
  titulo:titulo,
  descripcion:descripcion,
  año:año,
  actores:actores,
  director:director,
  editarTitulo: function(tituloCambiado){
    this.titulo = tituloCambiado;
  },
  editarDescripcion: function(descCambiado){
    this.descripcion = descCambiado;
  },
  editarAño: function(añoCambiado){
   this.año = añoCambiado;
  },
  editarDuracion: function(duracionCambiada){
    this.duracion = duracionCambiada;
  },
  AgregarActores: function(actorNuevo){
    actores.push(actorNuevo);
  },
  editarDirector: function(directorCambiado){
    this.director = directorCambiado;

  }

}

return pelicula;
}

var actores = [];
var pelicula1 = agregarPelicula(123, 'Rogue one', 'From Lucasfilm comes the first of the Star Wars standalone films, "Rogue One: A Star Wars Story," an all-new epic adventure.', 2016, 133, actores, 'Gareth Edwards (V)' );

var pelicula2 = agregarPelicula(456, 'Gifted', 'Frank Adler (Chris Evans) is a single man raising a child prodigy', 2017, 101, actores, 'Marc Webb' );
