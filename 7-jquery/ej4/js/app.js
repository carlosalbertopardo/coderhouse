/*  

EJERCICIO N°1 - Anclas con efectos:
" Hacer anclas con efectos a todas las secciones:"


- Crear un ancla que vaya al footer
- Crear un ancla que vaya desde el footer hasta la parte de arriba de la pagina.
- Crear anclas customizadas que vayan a distintas secciones


- Utilizar los efectos animate y scrollTo.

*/


console.log($('.go-to-footer'));

$('.go-to-footer').click(function (event) {

	console.log(event);

	console.log('in!!!');

	$('html, body').animate(
	{
		scrollTop: $('body').height() - $(window).height()

	},
	'slow');



});



