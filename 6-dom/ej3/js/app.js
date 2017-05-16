/*  

EJERCICIO N°3

- Crear una pagina web en la cual el usuario aprete cualquier letra del teclado y esta aparesca en el centro de la pantalla.
- Si la letra es z. abajo a la izquierda tiene que aparecer el zorro (Revisar las imagenes y onkeyup).
- Una vez que aparesca la letra Z, arrojar un alert sacar el funcionamiento de la keys. (utilizar eventListeners)

*/

/*RESOLUCION:
En este caso utilizaremos los eventos de teclado para ver como es su funcionamiento.
*/

//Primero encapsulamos todo nuestro codigo en una IIFE (Por buena práctica)
(function () {

	//Comenzamos declarando nuestra función detectarTecla, la cual recibira como argumento el evento del teclado.
	function detectarTecla (event) {

		//Preguntamos si el código de la tecla pertenece a alguna letra o a algún número.
	 	if (event.keyCode <= 90 && event.keyCode >= 48 || event.keyCode >= 96 && event.keyCode <= 105) {

			contador++; //Incrementamos en 1 la cantidad de veces que el usuario apretó una tecla.

			//Cambiamos el contenido del html del elemento 'letter', que ya está en el DOM
	 		var letra = document.getElementById('letter');
	 		letra.innerHTML = event.key;

	 		//Obtenemos el elemento de la imagen que iremos cambiando.
	 		var imagen = document.getElementById('meme');

	 		//Pregunto si la tecla que apreto el usuario es la Z
	 		if (event.keyCode === 90) {
	 			
	 			//Si es así, cambio la imagen por la del zorro.
	 			imagen.src = 'img/happy.png'
	 			//Y con el método "removeEventListener" saco la funcionalidad del teclado
	 			document.body.removeEventListener('keyup', detectarTecla);

	 		} else {

	 			//Si la tecla que apreté no es la "Z", voy incrementando el contador y cambiando las imagenes dependiendo de su valor.
		 		if(contador >= 5 && contador < 10) {
		 			imagen.src = 'img/kidding.png'
		 		} else if(contador >= 10 && contador < 15) {
		 			imagen.src = 'img/angry.png'
		 		} else if(contador >= 15) {
		 			imagen.src = 'img/beg.png'
		 		}

	 		}

		}


	}

	//Inicializamos nuestro contador
	var contador = 0;

	/*Agregamos el eventListener al body, de esta manera siempre que el usuario aprete una tecla ('keyup'),
	se ejecutará la función detectarTecla*/
	document.body.addEventListener('keyup', detectarTecla);
	
})()

