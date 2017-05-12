/*  

EJERCICIO N°1
" Realizar el funcionamiento de un programa
que tome los valores de los inputs y salude al usuario.
Ademas que varía el saludo dependiendo de su edad  "

*/


var boton = document.querySelector('button.btn-primary');

boton.onclick = function (event) {

	event.preventDefault();

	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;

	alert('bienvenido ' + nombre + ' ' + apellido);

}

