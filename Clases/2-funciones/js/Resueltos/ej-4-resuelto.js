/*  

EJERCICIO N°4
"Crear una funcion que se llame "construirSaludo" la cual reciba un nombre y un día ingresado por pantalla.
Luego crear una función "mostrarMensaje" que reciba el mensaje creado y lo muestre por pantalla y por consola."

*/


//En primer lugar creamos la función que construya nuestro saludo
function construirSaludo(nombreIngresado, diaIngresado) {

	//Con el nombre y el dia que recibe la funcion, creamos nuestro mensaje.
	var mensaje = 'Hola ' + nombreIngresado + '!! Espero que pases una buena jornada en este día ' + diaIngresado;

	//Luego hacemos que la funcion retorne ese mensaje.
	return mensaje;

}

//Tambien creamos la funcion para mostrar el mensaje.
function mostrarMensaje (mensajeCreado) {
	console.log(mensajeCreado);
	alert(mensajeCreado);
}

//Ahora si. Empezamos con nuestro programa:

//Primero ingresamos un nombre por pantalla
var nombre = prompt('Por favor ingrese su nombre');
//Luego ingresamos el dia
var dia = prompt('Por favor ingrese que dia es hoy');

//Luego creamos nuestro saludo con las variables creadas.
var saludo = construirSaludo(nombre, dia);

//Finalmente utilizamos la funcion mostrarMensaje para mostrar nuestro saludo por pantalla.
mostrarMensaje (saludo);

// Fin :D
