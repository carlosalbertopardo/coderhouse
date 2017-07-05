function agregarAlumnos(){

	var agregarAlumno = prompt('Ingrese el nombre del alumno').toLowerCase();
	var alumnos = [];
	alumnos.push(agregarAlumno);
	var confirmarOtroAlumno = confirm('Desea agregar otro Alumno?');

	// conditional

	while(confirmarOtroAlumno){

		agregarAlumno = prompt('Ingrese el nombre del alumno').toLowerCase();
		alumnos.push(agregarAlumno);
		confirmarOtroAlumno = confirm('Desea agregar otro Alumno?');

	}

	console.log('Se ingresaron: ' + alumnos.length + ' alumno/s');

	// funcion maradona

	function maradona(array){
		console.log("vino maradona a clase?");
		if(array.indexOf("maradona") > -1){
	    console.log(true); // puse console.log por que con return true no me aparece nada en consola

	} else {
		console.log(false);
	}
}

maradona(alumnos);

alert('Lista de Alumnos: ' + alumnos);

}


agregarAlumnos();
