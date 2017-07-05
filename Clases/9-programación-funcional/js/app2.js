'use strict';

function pedirUsuario(nombre, edad) {

	var mensaje;
	if( edad >= 16) {
		mensaje = nombre + " bienvenido a la aplicacion";
	} else {
		mensaje = nombre + ' Raja de aca, sos muy chiquito';
	}

	return mensaje;
}

var resultado = pedirUsuario('carlos',31);

alert(resultado);

