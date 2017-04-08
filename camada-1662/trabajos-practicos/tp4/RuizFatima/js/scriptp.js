'use strict';
var ingresarAlumno = confirm("Bievenido. Desea ingresar un alumno?");
var nombreAlumno = [];
var largoArray = 0;

if(ingresarAlumno){

	while(ingresarAlumno) {

		var alumno = prompt("Por favor ingrese el nombre de un alumnno");
		ingresarAlumno = confirm('ingresar otro?')
		nombreAlumno.push(alumno);
		largoArray ++;
	}
	console.log('La cantidad de alumnos que se ingresaron es: ' + largoArray);
	console.log('Los alumnos ingresados son: ' + nombreAlumno);
	console.log("¿Maradona fue ingresado?");
	function detectarMaradona(maradona) {
		for (var i = 0; i < largoArray; i++) {	
				var mensaje;
				if ( maradona[i] === 'maradona'|| maradona[i] === 'MARADONA') {
					//console.log("true");
					mensaje="true";
				} else{
					mensaje="false";
				}		
		} 
		console.log(mensaje);	

	}
	detectarMaradona(nombreAlumno);	
				
}