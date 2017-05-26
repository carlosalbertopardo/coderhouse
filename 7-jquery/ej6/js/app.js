/*  

EJERCICIO N°6

	Crear un componente con 3 radio buttons que hagan cambiar de color al auto

*/

var radioButtons = $('input[type="radio"]');

radioButtons.change(function () {

	var imagen = $('img')[0];
	var ruta = 'img/'+ this.value + '.png';

	$(imagen).fadeOut( 500 , function() {

		$('img')[0].src = ruta;
		$(imagen).fadeIn(500);

	});	
	

})
