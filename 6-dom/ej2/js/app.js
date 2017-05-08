/*  

EJERCICIO N°2

1) Agregar un evento a los inputs: 
que al clickear en ellos se muestre 
una descripcion de la informacion que tiene que ir en ese campo. 

2) Al deseleccionar el input, ocultar el mensaje

3) Dependiendo del sexo de la persona que ingresa mostrar colocar un prefijo mr. o ms. al saludo.

*/

var inputNombre = document.getElementById('nombre');

inputNombre.onclick = function (e) {

	console.log(e.target);

	console.log(this);


	var sibling = this.parentNode.querySelector('.description')

	sibling.style.display = 'block'	


}

inputNombre.onblur = function () {

	var sibling = inputNombre.parentNode.querySelector('.description')
	sibling.style.display = 'none'	

}
