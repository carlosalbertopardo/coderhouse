/* Trabajo Práctico: Ingresar un listado de nombres de alumnos por pantalla, Cada vez que se ingresa un nuevo usuario, 
preguntar si se quiere ingresar otro utilizando la funcion "Confirm". En caso de que el usuario no quiera ingresar otro alumno, 
mostrar los siguientes resultados por consola:

1) Indicar la cantidad de alumnos que se ingresaron
2) Preguntar si "maradona" vino a la clase. Hacerlo con otra funcion que tome un array como parámetro y retorne true or false 
dependiendo si lo encontró  
3) Mostrar el listado de alumnos por pantalla.
*/

var ingresarAlumnos = prompt('Ingrese el nombre de un alumno');
var listaAlumnos = [];
listaAlumnos.push(ingresarAlumnos);
var contador = 1;

var continuar = confirm('Desea ingresar otro alumno?');

while(continuar){
	contador++;
	ingresarAlumnos = prompt('Por favor, ingrese otro alumno');
	listaAlumnos.push(ingresarAlumnos);
	continuar = confirm('Desea ingresar otro alumno?');
}

function encontrarAlumno (arrayDondeBuscar){
	var valor = arrayDondeBuscar.indexOf('Maradona');
	if(valor >= 0){
		console.log(true);
	} else {
		console.log(false);
	}
}

if(!continuar){
	console.log(contador);
	var pregunta = prompt('Desea preguntar si Maradona vino a clase?'); 
	
	if(pregunta == 'Si'|'si'){
		encontrarAlumno(listaAlumnos);
	}	

	console.log(listaAlumnos);
}

/* Lo cambie. Funciona pero para que voy a solicitar una respuesta a si 
Maradona vino a clase si me lo hace la funcion sola... Podria mentirle y la 
funcion me va a decir la verdad...
No seria mejor preguntarle por alguien a eleccion? */

