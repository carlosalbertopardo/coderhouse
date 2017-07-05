
/*Crear un array con todos los dias de la semana
Recorrerlos y mostrar cuando sea domingo o sabado un mensaje en consola.*/

/*var diaDeSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Sábado","Domingo"];

for (var i = 0; i < diaDeSemana.length; i++) {
	if ((i >= 5) != 0){
	console.log(diaDeSemana[i]);
	}
	
}
*/



/*
La idea es armar 2 arrays:
1 que tenga los dias de la semana del lunes al viernes, y otro que tenga los dias sabado y domingo.
El usuario tiene que ingresar un día de la semana por pantalla (prompt), 
y despues ustedes hacen una busqueda en los dos arrays por separado usando 2 ciclos for.
Si el valor ingresado por pantalla es igual a uno de los dias de la semana ingresados en el primer array,
muestran un mensaje por pantalla que diga "El dia ingresado es un día hábil"
En el caso de que valor ingresado por pantalla coincida con uno de los dias de la semana 
ingresados en el segundo array, muestran un mensaje por pantalla que diga "Estamos en el fin de semana! :)"
*/


var diaDeSemana = ["Lunes", "Martes", "Miercoles","Jueves", "Viernes"];
var finDeSemana = ["Sabado", "Domingo"];

var dia = prompt("Ingrese un dia de la semana");

var encontro = false;

for (var i = 0; i < diaDeSemana.length; i++) {
	if (diaDeSemana[i] == dia) {
		alert("El dia ingresado es un día hábil " + diaDeSemana[i]);
		encontro = true;
	}else{

	for (var j = 0; j < finDeSemana.length; j++) {
		if (finDeSemana[j] == dia) {
			alert("Estamos en el fin de semana! :) " + finDeSemana[j]);
			encontro = true;
		}
		if (encontro) {
			break;
		};
	}
	}	

	
}


/*
var dias = ["Lunes","Martes","Miercoles","Jueves","Sabado","Domingo"]

//Recorrerlos y mostrar cuando sea domingo o sabado un mensaje en consola.
// MAL ARMADO

for (var i = 0; i < dias.length i++) {

	if (dias[i] == "Domingo" && dias[i] == "Sabado") {
		console.log("en la vuelta" + dias[i] + este es el dia + dias[i]);
	}
}
*/


