/* hacer un listado de alumnos ingresados 
por pantalla, hasta que el usuario 
ingrese el numero 0  */

var ingresarAlumno = confirm("Bievenido. Desea ingresar un alumno?");

if(ingresarAlumno){

	while(ingresarAlumno) {

		var alumno = prompt("Por favor ingrese el nombre de un alumnno");
		console.log(alumno);
		ingresarAlumno = confirm('ingresar otro?')

	}

	console.log('termino el ingreso de alumnos');

} else {

	console.log("fin del progama");

}