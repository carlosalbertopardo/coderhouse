/*  

EJERCICIO N°6

	Crear un componente con 3 radio buttons que hagan cambiar de color al auto

*/


(function () {


	function initColorComponents() {

		var colorComponents = $('.color-component');

		colorComponents.each(function (index, element) {

			console.log(element);

			var componentRadios = $(element).find('input[type="radio"]');
			var image = $(element).find('img');

			componentRadios.change(function () {
	
				console.log(this);
				var newColor = this.value;
				changeImage(newColor, image);


			});

		})

	};

	function changeImage(newColor, image) {

		image.fadeOut('slow', function () {

			this.src = 'img/'+newColor+'.png';
			$(this).fadeIn();

		});

	}


	initColorComponents();

})()