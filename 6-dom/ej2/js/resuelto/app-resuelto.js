/*  

EJERCICIO N°2

1) Agregar un evento a los inputs: 
- Que al clickear en ellos se muestre una descripcion de la informacion que tiene que ir en ese campo. 
- al deseleccionar el input, ocultar el mensaje
- Dependiendo del sexo de la persona que ingresa mostrar colocar un prefijo mr. o ms. al saludo.

*/

//Primero que todo tenemos que seleccionar todos nuestro inputs de tipo texto
var textInputs = document.querySelectorAll('input[type="text"]');

//textInputs es una array donde cada una de la posiciones hay un input.
//Como todo array lo recorremos con un ciclo for tradicional.
for (var i = 0; i < textInputs.length; i++) {
	
	//Ahora, por cada input, le asignamos un evento para que cuando me situe en él, haga algo.
	textInputs[i].onfocus = function (event) {

		//Tener en cuenta que "this" en este caso es el input donde estoy accionando
		console.log(this);
		//Es lo mismo que event.target
		console.log(event.target);
		
		//A partir del elemento donde estamos parados, seleccionamos al "Hermano" que tiene la clase description.
		var sibling = this.parentNode.querySelector('.description');
		//Luego mostramos el elemento.
		sibling.style.display = 'block'	

	}

	//Luego, otra vez en el mismo input le agrego un nuevo evento que reaccione cuando el mouse deja de estar sobre el input.
	textInputs[i].onblur = function () {

		//Nuevamente, partir del elemento donde estamos parados, seleccionamos al "Hermano" que tiene la clase description.
		var sibling = this.parentNode.querySelector('.description');
		//En este caso lo queremos esconder
		sibling.style.display = 'none'	

	}

}
