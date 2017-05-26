/*
# Crear el modulo IMDB
​
- El array de peliculas tendra que ser privado del modulo
- El modulo tendra que poder agregar una pelicula (ID y titulo)
- Validar que la pelicula ingresada no se encuentre y en caso de encontrarla mostrar un mensaje advirtiendo el error
- El modulo tendra que eliminar una pelicula por ID
- El modulo tendra que ordernar su array de pelicuas en base a una propiedad enviada por paramentro y mostrarlo en consola
- El modulo tendra que persistir el array de peliculas en session o local storage para que luego se pueda recuperar y seguir agregando o eliminando
*/

'use strict';

var Imdb = (function () {

  var movies = [];

  function checkMovie(id, title) {
    for (var i = 0; i < movies.length; i++) {
      if (movies[i].id === id) {
        return true;
      };
    }
    return false;
  }

  return {
    addMovie: function (id, title) {
      var exists = checkMovie(id, movies);
      if (!exists) {
        console.log('Movie is not in database');
        var newMovie = {
          id: id,
          title: title
        }
        movies.push(newMovie);
      } else {
        console.log('Movie already added');
      }
    },
    getMovies: function () {
      console.log(movies);
    }
  }

})()
