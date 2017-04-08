'use strict';

/*
Ingresar un listado de nombres de alumnos por pantalla, Cada vez que se ingresa un nuevo usuario, preguntar si se quiere ingresar otro utilizando la funcion "Confirm". En caso de que el usuario no quiera ingresar otro alumno, mostrar los siguientes resultados por consola:

1.Indicar la cantidad de alumnos que se ingresaron.
2.Preguntar si "maradona" vino a la clase.
  Hacerlo con otra funcion que tome un array como parámetro y retorne true or false dependiendo si lo encontró.
3.Mostrar el listado de alumnos por pantalla.
*/
var alumnos = [];
var agregarNuevo = true;
var maradonaPresente = ['Maradona','maradona'];

function listadoAsistencia() {
  while (agregarNuevo == true) {
    var quiereAgregar = confirm('Quiere agregar un alumno?');
    if (quiereAgregar == true) {
      agregarNuevo = true;
      console.log('El usuario quiere agregar otro alumno.');
      alumnos.push(prompt('Ingrese un alumno.'));
    } else {
      agregarNuevo = false;
      console.log('El usuario ya no quiere agregar alumnos.');
      console.log('Se han ingresado ' + alumnos.length + ' alumnos.');
      console.log(alumnos);
    }
  }
}
function verificarMaradona() {
  for (var i = 0; i < alumnos.length; i++) {
    for (var j = 0; j < maradonaPresente.length; j++) {
      if (alumnos[i] == maradonaPresente[j]) {
        var vinoDiegote = true;
        console.log('Diegote vino a clase? ' + vinoDiegote);
      }
    }
  }
}
listadoAsistencia();
verificarMaradona();
