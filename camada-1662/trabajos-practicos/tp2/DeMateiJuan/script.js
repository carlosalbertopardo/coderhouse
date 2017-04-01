var userDay = prompt("Ingrese un día de la semana (en minúsculas y sin acentos).");

var week = ["lunes", "martes", "miercoles", "jueves", "viernes"];
var weekend = ["sabado", "domingo"];

console.log(userDay);

for (var i = 0; i < week.length; i++) {
  if (userDay == week[i]) {
    alert("El día ingresado es hábil... ☹")
    break;
  }
}

for (var i = 0; i < weekend.length; i++) {
  if (userDay == weekend[i]) {
    alert("Estamos en fin de semana... 🙌🏻")
    break;
  }
}
