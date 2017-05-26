/*
# Mejorar el modulo IMDB
​
- El modulo Debera, de forma privada o publica, mostrar/renderizar las peliculas en el DOM
- El objeto pelicula ahora Debera tener la propiedad descripcion e imagen
- El titulo Debera ser un H1, la descipcion un P y la imagen un img
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
    addMovie: function (id, title, description, poster) {
      var exists = checkMovie(id, movies);
      if (!exists) {
        console.log('Movie is not in database');
        var newMovie = {
          id: id,
          title: title,
          description: description,
          poster: poster
        }
        movies.push(newMovie);
      } else {
        console.log('Movie already added');
      }
    },
    getMovies: function () {
      console.log(movies);
      for (var i = 0; i < movies.length; i++) {

        var title = document.createElement('h1');
        var titleContent = document.createTextNode(movies[i].title);
        title.appendChild(titleContent);
        document.body.appendChild(title);

        var poster = document.createElement('img');
        poster.setAttribute('src', movies[i].poster);
        document.body.appendChild(poster);

        var description = document.createElement('p');
        var descriptionContent = document.createTextNode(movies[i].description);
        description.appendChild(descriptionContent);
        document.body.appendChild(description);
      }
    }
  }

})()

Imdb.addMovie(1, "The Avengers", "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg");
Imdb.addMovie(2, "Avengers: Age of Ultron", "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's Mightiest Heroes to stop the villainous Ultron from enacting his terrible plans.", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg");

Imdb.getMovies()
