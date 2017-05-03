/* Crear una funcion que agregue objetos peliculas
  - El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director.
  - Debera tener metodos para editar todas sus propiedades, menos su ID, y para los actores tendra que ir agregando uno a uno.
*/

//titulo, descripcion, year, duracion, actores, director

var peliculas = [];

//abrimos la funcion(como metodo constructor, o clase (no se muy bien la diferencia todavia))
//para agregar peliculas (yo supuse a un array).
//Podes ingresarle todos los datos de una, o cambiarselos despues con la invocacion de los metodos.

  function Pelicula(id, titulo, descripcion, year, duracion, actores, director) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.year = year;
    this.duracion = duracion;
    this.actores = actores;
    this.director = director;
    peliculas.push(this);
  }
//Si queres modificar algun elemento de la pelicula, solo tenes que
//invocar el metodo, EJ: nuevaPelicula.ingresarTitulo(); y va a saltar
// un prompt preguntando el titulo.
// es exactamente lo mismo para el resto de los metodos.
  Pelicula.prototype.ingresarTitulo = function() {
    this.titulo = prompt("Ingresa el titulo.");
  };
  Pelicula.prototype.ingresarDescripcion = function() {
    this.descripcion = prompt("Pone una descripcion");
  };
  Pelicula.prototype.ingresarYear = function() {
    this.year = parseInt(prompt("De que año es?"));
  };
  Pelicula.prototype.ingresarDuracion = function() {
    this.duracion = prompt("Cuanto dura en minutos?");
  };
  Pelicula.prototype.ingresarActores = function() {
    var actores = [];
    var cantidadReparto = parseInt(prompt("Cuantos actores tiene el elenco?"));
    for (var i = 1; i <= cantidadReparto; i++) {
      actores.push(prompt("Ingrese el actor numero " + i + " por favor:"));
    }
    this.actores = actores;
  };
  Pelicula.prototype.ingresarDirector = function() {
    this.director = prompt("Cual es el director de la pelicula?");
  };
