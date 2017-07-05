'use strict';

/*
Crear una funcion que agregue objetos peliculas
  - El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director.
  - Debera tener metodos para editar todas sus propiedades, menos su ID, y para los actores tendra que ir agregando uno a uno.
*/

function addMovie(id,title,description,year,duration,actors,director) {
  var movie = {
    id: id,
    title: title,
    description: description,
    year: year,
    duration: duration,
    actors: actors,
    director: director,
    getId: function () {
      console.log(this.id);
    },
    getTitle: function () {
      console.log(this.title);
    },
    getDescription: function () {
      console.log(this.description);
    },
    getYear: function () {
      console.log(this.year);
    },
    getDuration: function () {
      console.log(this.duration);
    },
    getActors: function () {
      console.log(this.actors);
    },
    getDirector: function () {
      console.log(this.director);
    },
  };
  return movie;
};

var movie1 = addMovie('MOV1','Logan','In the near future, a weary Logan cares for an ailing Professor X somewhere on the Mexican border.',2017,'141 min',['Hugh Jackman','Patrick Stewart'],'James Mangold');

var movie2 = addMovie('MOV2','The Young Offenders','Two teenage boys cycle 160km on stolen bikes pursued by police to find a missing bale of cocaine worth 7 million euro.',2016,'83 min',['Alex Murphy','Chris Walley'],'Peter Foott');
