/*

# Mejorar DE NUEVO el modulo IMDB
​Curriculum Vitae.
- Crear un formulario con los siguientes campos
	o	Nombre (input=text)
	o	Apellido (input=text)
	o	Género (2 radio button: )
	o	Edad (input=number)
	o	Ocupación (select)
	o	Estudios -> (input=text)
	o	Foto -> (input=text solo con la ruta de la imagen)
- La página debe tener un botón que diga “Generar cv”.
- Una vez presionado el botón, El formulario tiene que ocultarse y se mostrará un CV con toda la información ingresada.
- Una vez renderizado el CV abajo debe aparecer 2 botones: 
	o	Imprimir” -> imprime el CV generado
	o	“Ingresar otro CV” -> volvemos al formulario

*/



(function () {

	$('#cv-form input, #cv-form select, #cv-form textarea').each( function (index, element){

		console.log(index);
		console.log(element.tagName);

	});


})()



