'use strict';
// TP 2 Javascript: Dia de semana o fin de semana

var IngresarDatos = prompt("Ingrese día de semana:");
var IngresarDatosAux = IngresarDatos.toUpperCase();

var diasDeSemana = ["LUNES", "MARTES", "MIERCOLES", "MIÉRCOLES", "JUEVES", "VIERNES"];
var diasFinde = ["SABADO", "SÁBADO", "DOMINGO"];

for (var i = 0; i < diasDeSemana.length; i++) {

	if (IngresarDatosAux === diasDeSemana[i]) {
		console.log("El dia ingresado es un Dia de semana y es: " + diasDeSemana[i]);
	}
	else if (IngresarDatosAux === diasFinde[i]) {
		console.log("El dia ingresado es un Dia de fin de semana y es: " + diasFinde[i]);
	}
}