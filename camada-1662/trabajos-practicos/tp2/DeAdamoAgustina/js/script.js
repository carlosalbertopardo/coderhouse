var diaDeSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
var finDeSemana = ["Sabado","Domingo"];

var diaIngresado = prompt("Ingrese un día");

for (var i= 0; i < diaDeSemana.length; i++) {
	if ( diaDeSemana[i] == diaIngresado){
		alert("El día ingresado es un día hábil");
	}
}

for (var i = 0; i < finDeSemana.length; i++) {
	if (finDeSemana[i] == diaIngresado){
		alert("Estamos en el fin de semana :)")
	}
}

