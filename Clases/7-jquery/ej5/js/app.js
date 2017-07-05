/*  

EJERCICIO N°5

	Crear un formulario donde 1 input tenga un tooltip!

*/

var tooltip = $('.tooltip');
var icono = tooltip.find('.tooltip-icon');
var contenido = tooltip.find('.tooltip-content');

console.log(icono);

icono.on('mouseenter touchstart', function () {
	console.log('AAAADENTRO');
	contenido.show();
})

icono.on('mouseleave touchend', function () {
	console.log('AFUEEEERAAA');
	contenido.hide();	
});

//mouseover , mouseout
