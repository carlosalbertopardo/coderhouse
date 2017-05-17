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

$(document).ready( function () {

	//Agregamos la clase pod a los LI
	$('.list li').addClass('pod');
	console.log($('.list li'));

	//Agregamos la clase "simpsons-font" a los h1 y los h2
	$('h1').addClass('simpsons-font');
	$('h2').addClass('simpsons-font');


	//Creamos una estructura de HTML
	var pod = $('<li class="pod">');
	var titulo = $('<h2>Maggie</h2>');
	var imagen = $('<img src="img/maggie.png">');
	var description = $('<p class="description">Margaret Evelyn "Maggie" Simpson es un personaje ficticio de la serie de televisión de dibujos animados Los Simpson. Es la tercera hija del matrimonio protagonista, Homer y Marge Simpson, y la más joven de ellos. Sus hermanos mayores son Bart y Lisa Simpson. Siempre se la ve succionando un chupete y cuando camina, suele tropezar con el mono y cae de frente.</p></li>');

	//Appendeamos todo al pod
	pod.append(titulo).append(imagen).append(description);
	//Luego appendeamos el pod al elemento ul en el DOM
	$('ul').append(pod);

	//Creamos un evento que cuando yo le haga click a CUALQUIER elemento con la clase "pod", me ejecute un fadeOut()
	$('.pod').click(function () {

		$(this).fadeOut();

		//This es el elemento al que le estoy haciendo click
		console.log(this);

	});


	//Cuando hagamos click en el título, los pods vuelven a aparecer.
	jQuery('h1').click(function () {
		$('.pod').show();
	})


});
