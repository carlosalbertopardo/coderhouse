var ingresarAlumno=confirm("Bienvenido. Desea ingresar un alumno");
var alumnos=[];
if(ingresarAlumno){
	while(ingresarAlumno){
		var alumno = prompt("Por favor ingrese el nombre de un alumno:");
		alumnos.push(alumno.toLowerCase());
		ingresarAlumno=confirm("Desea ingresar otro alumno");
	}
}

function estaMaradona (arreglo) {
	var esta=false;
	for(var i=0;i<arreglo.length;i++){
		if(arreglo[i]==="maradona"){
			esta=true;
		}
	}
	return esta;
}

if(alumnos.length ===1){
	console.log("Vino 1 alumno a la clase");
}
else{
	console.log("Vinieron "+alumnos.length+" alumnos a la clase");	
}

if(estaMaradona(alumnos)){
	console.log("Maradona vino a la clase");
}
else{
	console.log("Maradona vino no a la clase");
}

console.log(alumnos);