/*
TP2: Días de la semana
•	Deberá poder ingresar un día de la semana
•	Deberá poder compararlo con todos los días de la semana
•	Deberá evaluar si es un día de semana y fin de semana mediante un mensaje similar a 'El día es hábil' sino 'El día es fin de semana';
•	En caso de encontrar el día utilizar la sentencia break y terminar el for
*/


//Creamos 2 arrays con los dias de la semana
var diaDeSemana = ['LUNES','MARTES','MIERCOLES','MIÉRCOLES','JUEVES','VIERNES'];
var finDeSemana = ['SABADO','DOMINGO','SÁBADO'];

//Ingresamos el día con un prompt
var diaIngresado = prompt("Ingrese un día");

//Pasamos nuestro texto ingresado a mayúsculas para disminuir el margen de error del usuario.
diaIngresado = diaIngresado.toUpperCase();

//Recorremos el primer array y comparamos los días
for (var i= 0; i < diaDeSemana.length; i++) {
	if ( diaDeSemana[i] == diaIngresado){

		//Si el día ingresado se encuentra en el primer array, es un día de la semana
		alert("El día ingresado es un día hábil");
	}
}

//Recorremos el segundo array y comparamos los días
for (var i = 0; i < finDeSemana.length; i++) {
	if (finDeSemana[i] == diaIngresado){

		//Si el día ingresado se encuentra en el segundo array, es un día del fin de semana.
		alert("Estamos en el fin de semana :D");
	}
}

//Si no, no aparece ningún mensaje de alerta.
