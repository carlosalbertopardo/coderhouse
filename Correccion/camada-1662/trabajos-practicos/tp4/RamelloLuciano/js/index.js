/*Trabajo Práctico: Ingresar un listado de nombres de alumnos por pantalla, Cada vez que se ingresa un nuevo usuario, preguntar si se quiere ingresar otro utilizando la funcion "Confirm". En caso de que el usuario no quiera ingresar otro alumno, mostrar los siguientes resultados por consola:
1) indicar la cantidad de alumnos que se ingresaron
2) Preguntar si "maradona" vino a la clase. Hacerlo con otra funcion que tome un array como parámetro y retorne true or false dependiendo si lo encontró
4:10
3) Mostrar el listado de alumnos por pantalla.*/


// primero declaro las variables que voy a usar.
var alumnos = [];
var vinoElDiegote = false;
var reIngreso = true;

//aca defino la funcion para ingresar un alumno.
function ingresarUser(){
	var nombre;
	 //este bloque sirve para agregar y para saber si queres seguir agregando mas alumnos a la lista.
	while (reIngreso === true){
		nombre = prompt("Decime el nombre del alumno a ingresar.");
		alumnos.push(nombre);
		reIngreso = confirm("quiere ingresar otro alumno?");
	}
	// Aca nos informa cuantos alumnos hay en la lista
	console.log("se ingresaron " + alumnos.length + " alumnos.");
}

// en esta funcion buscamos al pseudo idolo popular que apoya a la revolucion cubana desde su BMWi8 y 
//su ultra lujosa mansion en Dubai.
function maradonaVino(arr){
	for(var i in arr){
		if(arr[i] === "maradona"){
			vinoElDiegote = true;
		}
	}
	if(vinoElDiegote){
		console.log("Ehhhh!!! Diego!!! que es eso que tenes en la nariz?");	
	}
	else{
		console.log("El Diegote no vino, debe estar desesperado buscandolo a Coppola como loco!");
	}
	
}
// aca expresamos la funcion global a partir de la funcion anonima correspondiente y la autollamamos.

var superPrograma = function(arr){
	ingresarUser();
	console.log(arr);
	maradonaVino(arr);
	
}(alumnos);

