/*  

EJERCICIO N°8

	- Cargar el header dependiendo de el tamaño de la pantalla
	- En caso de hacer un resize de la pantalla se deberá cargar la imagen correspondiente.
	- Centrar el heacer horizontalmente en todo momento.

*/


console.log('in');


var imagen = $('#header-image');

imagen.on('load', function () {
	console.log('se termino de cargar la imagen');
	centerImage();	
})

var size = $(window).width();

console.log(size);

var desktop = 1920;
var tablet = 1200;
var mobile = 768;

if( size < mobile )	{
	imagen.attr('src','img/chavo-768.png'); 
} else {
	imagen.attr('src','img/chavo-1920.png'); 
}