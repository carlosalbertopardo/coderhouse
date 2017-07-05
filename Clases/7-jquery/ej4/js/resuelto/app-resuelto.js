/*  

EJERCICIO N°1 - Anclas con efectos:
"Hacer anclas con efectos a todas las secciones:"

- Crear un ancla que vaya al footer
- Crear un ancla que vaya desde el footer hasta la parte de arriba de la pagina.
- Crear anclas customizadas que vayan a distintas secciones


- Utilizar los efectos animate y scrollTo.

*/

/*RESOLUCION
	En este caso utilizaremos el método Animate de jQuery para hacer funcionar las anclas de jQuery.
*/

(function () {

	//En el primer caso, hacemos funcionar el ancla del footer
	$('#to-top').click(function(event) { //Cuando haga click en el elemento que tiene el id "to-top"...

		$('body').animate({  //Uso el metodo animate en el body...
			scrollTop: 0  // para mover el scroll del body hasta la posicion 0 (Arriba de todo).
		}, 2000, function () { //La animación va a durar 2 segundos (2s = 2000 milisegundos)
			console.log('animation completed!!!!');  //Y cuando termine la animación voy a ejecutar la funcion que me avise por consola.
		});

	})

	//Ahora, un poco mas complicado
	$('.anchor').click(function(event) { //Cuando haga click en CUALQUIER elemento que tenga la clase "anchor"

		event.preventDefault(); // Evito el comportamiento por default de los links

		var sectionName = $(this).attr('href'); //Tomo la sección a donde quiero ir con el href

		var newPos = $('#'+sectionName).position().top; //Averiguo la posicion en donde está ese elemento

		$('body').animate({
			scrollTop: newPos //Y voy hasta ahi :)
		}, 2000)

	})

})()


