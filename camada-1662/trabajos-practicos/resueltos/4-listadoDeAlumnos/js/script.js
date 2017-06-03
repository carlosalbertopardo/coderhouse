/*
TP4: Alumnos
Ingresar un listado de nombres de alumnos por pantalla. Cada vez que se ingresa un nuevo usuario, preguntar si se quiere ingresar otro utilizando la función "Confirm". En caso de que el usuario no quiera ingresar otro alumno, mostrar los siguientes resultados por consola:
•	Indicar la cantidad de alumnos que se ingresaron
•	Preguntar si "Maradona" vino a la clase. Hacerlo con otra función que tome un array como parámetro y retorne true o false dependiendo si lo encontró
•	Mostrar el listado de alumnos por pantalla.
*/


//En un principio podriamos crear una funcion que revise si el string 'maradona' esta en un array
function estaMaradona(arrayDondeBuscar){

	//Recorremos el array:
	for (var i = 0; i < arrayDondeBuscar.length; i++) {
		arrayDondeBuscar[i].toUpperCase() === 'MARADONA';
		return true; // Si se encuentra a Maradona, la funcion retorna true
	}

	return false; //Caso contrario, retorna false.

}

//Ahora creamos una función qu cree alumnos y los almacene
function agregarAlumnos(){
		
	//Creamos un array vacío donde almacenaremos nuestros alumnos
	var alumnos = [];


	//Ingresamos el nombre de un alumno por prompt
	var nombreAlumno = prompt('Ingrese el nombre del alumno').toLowerCase();

	//Metemos el nombre del alumno ingresado en el array de alumnos
	alumnos.push(nombreAlumno);

	/* Llamamos a una funcion confirm, la cual nos preguntará si queremos ingresar un nuevo alumno
	confirm devuelve un valor booleano (true o false) */
	var ingresarOtro = confirm('Desea agregar otro Alumno?');

	//Ingresamos a un ciclo que se ejecutará mientras la variable ingresarOtro sea true
	while(ingresarOtro){ //Si ingresarOtro es true...

		//Ingresamos otro alumno por prompt
		nombreAlumno = prompt('Ingrese el nombre del alumno').toLowerCase();
		
		//Metemos el nombre del alumno ingresado en el array de alumnos
		alumnos.push(nombreAlumno);

		//Volvemos a preguntar si queremos ingresar otro alumno.
		ingresarOtro = confirm('Desea agregar otro Alumno?');

	}

	//Una vez finalizada la carga, motramos los resultados pedidos:
	console.log('Se ingresaron: ' + alumnos.length + ' alumno/s');

	//Ahora preguntamos si Vino maradona a la clase:
	if( estaMaradona(alumnos) ) {
		console.log('Maradona vino a la clase');
	} else {
		console.log('Maradona se hizo la rata!');
	}

	console.log('Listado completo de alumnos: ');
	console.log(alumnos);


}

//Por último, una vez que tenemos creadas todas las funciones, llamamos a la función para iniciar nuestro programa.
agregarAlumnos();
