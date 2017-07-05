var ingresarAlumno = confirm("Desea ingresar un alumno?");

var contador = 0;

var alumnos = [];


if (ingresarAlumno) {

	while(ingresarAlumno) {

		var alumno = prompt("Por favor, ingrese un alumno");
		console.log(alumno);
		ingresarAlumno = confirm('ingresar otro?');

		contador++
		console.log("La cantidad de alumnos que ingresaron son: " + (contador));

		alumnos.push(alumno);
		console.log(alumnos);

		

		for (var i = 0; i < alumnos.length; i++) {

			if (alumnos[i] == 'maradona') {

				console.log("true");

			} else {

				console.log("false");
			}
			
		}

		

	}

	console.log('terminó el ingreso de alumnos.')
	

} else {

	console.log("fin del programa");
}

