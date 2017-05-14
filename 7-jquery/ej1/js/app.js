/*  

EJERCICIO N°1

Jquery Baby!!
Empecemos a reconocer los selectores de jQuery con un pequeño ejercicio:
- Importar la libreria de jquery
- Agregar la clase "pod" a todos los li
- Agregar la clase Simpson al h1 y a los h2 de cada pod
- Agregar a Maggie al final de la lista (append,prepend, after, before  )

	<li class="pod">
		<h2>Maggie</h2>
		<img src="img/maggie.png">
		<p class="description">
			Margaret Evelyn "Maggie" Simpson es un personaje ficticio de la serie de televisión de dibujos animados Los Simpson. Es la tercera hija del matrimonio protagonista, Homer y Marge Simpson, y la más joven de ellos. Sus hermanos mayores son Bart y Lisa Simpson. Siempre se la ve succionando un chupete y cuando camina, suele tropezar con el mono y cae de frente.
		</p>							
	</li>


- Mover a bart a la primera posicion de la lista
- Ocultar los personajes cuando hacemos click en ellos.

*/


//var simpson = document.getElementById('marge');

/*
var todosLosPods = document.getElementsByTagName('li');

for (var i = 0; i < todosLosPods.length; i++) {
 	todosLosPods[i].className = 'pod';
} 
*/

$(document).ready( function () {

	$('.list li').addClass('pod');
	console.log($('.list li'));

	$('h1').addClass('simpsons-font');
	$('h2').addClass('simpsons-font');


	var pod = $('<li class="pod">');
	var titulo = $('<h2>Maggie</h2>');
	var imagen = $('<img src="img/maggie.png">');
	var description = $('<p class="description">Margaret Evelyn "Maggie" Simpson es un personaje ficticio de la serie de televisión de dibujos animados Los Simpson. Es la tercera hija del matrimonio protagonista, Homer y Marge Simpson, y la más joven de ellos. Sus hermanos mayores son Bart y Lisa Simpson. Siempre se la ve succionando un chupete y cuando camina, suele tropezar con el mono y cae de frente.</p></li>');

	pod.append(titulo).append(imagen).append(description);
	 		
	console.log(pod);

	$('ul').append(pod);

	$('.pod').click(function () {

		console.log(this);

		$(this).fadeOut();

		console.log('hola!!');

	});


	jQuery('h1').click(function () {
		$('.pod').show();
	})


});
