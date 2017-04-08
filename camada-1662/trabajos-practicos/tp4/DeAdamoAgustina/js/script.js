/*
Trabajo Práctico: Ingresar un listado de nombres de alumnos por pantalla, Cada vez que se ingresa un nuevo usuario, preguntar si se quiere ingresar otro utilizando la funcion "Confirm". En caso de que el usuario no quiera ingresar otro alumno, mostrar los siguientes resultados por consola:
1) indicar la cantidad de alumnos que se ingresaron
2) Preguntar si "maradona" vino a la clase. Hacerlo con otra funcion que tome un array como parámetro y retorne true or false dependiendo si lo encontró
3) Mostrar el listado de alumnos por pantalla.
*/
var listaAlumnos = []
var alumno = prompt("Ingrese el nombre de un alumno");


listaAlumnos.push(alumno);


var ingresoDeAlumno = confirm("Desea ingresar otro nombre?");


if(ingresoDeAlumno){
	while(ingresoDeAlumno){
		alumno = prompt("Ingrese el nombre de un alumno");
		ingresoDeAlumno = confirm("Desea ingresar otro nombre?");
		listaAlumnos.push(alumno);
	}
} else console.log("temrino el programa");


console.log("se ingresaron " + listaAlumnos.length + " alumnos");
console.log(listaAlumnos)


var posicion = listaAlumnos.indexOf("maradona");

function maradonaAsistio(lista) {
	if(listaAlumnos[posicion] == "maradona"){
		console.log("Maradona asistio a a clase")
	} else {
		console.log("maradona no asistio a clase")
	}
}


maradonaAsistio(listaAlumnos);

alert("Estos son los alumnos ingresados " + listaAlumnos);

