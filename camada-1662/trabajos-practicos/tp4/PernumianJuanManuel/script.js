'use sctrict'

var studentList = []; // Declaro el array vacio

function addStudent() {
	var newStudent = confirm('Quiere agregar un alumno?'); // Pregunto si quiere agregar un alumno nuevo y guardo el boolean en una var

	while(newStudent === true) {
		studentList.push(prompt('Ingrese el nombre del alumno')); // Pregunto el nombre del alumno
		newStudent = confirm('Quiere agregar otro alumno?')	;
	}

	for (var i = 0; i < studentList.length; i++) {
		studentList[i] = studentList[i].toUpperCase();
	}
}

function maradona(studentArray) {

	if (studentArray.indexOf('MARADONA') !== -1) {
		console.log('Maradona is in da house');
	} else {
		console.log('Maradona se rateo!');
	}

	console.log('Los alumnos presentes son: ' + studentList);
	console.log('Hoy vinieron ' + studentList.length + ' alumnos.');
}

addStudent();
maradona(studentList);
