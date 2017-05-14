/*  

EJERCICIO N°3

- Crear una pagina web en la cual el usuario aprete cualquier letra del teclado y esta aparesca en el centro de la pantalla.
- Si la letra es z. abajo a la izquierda tiene que aparecer el zorro (Revisar las imagenes y onkeyup).
- Una vez que aparesca la letra Z, arrojar un alert sacar el funcionamiento de la keys. (utilizar eventListeners)

*/


(function () {

	var contador = 0;

	document.body.addEventListener('keyup', detectarTecla);

	function detectarTecla (event) {

	 	if (event.keyCode <= 90 && event.keyCode >= 48 || event.keyCode >= 96 && event.keyCode <= 105) {

			contador++;


	 		var letra = document.getElementById('letter');
	 		letra.innerHTML = event.key;


	 		var imagen = document.getElementById('meme');


	 		if (event.keyCode === 90) {
	 			imagen.src = 'img/happy.png'
	 			
	 			document.body.removeEventListener('keyup', detectarTecla);

	 		} else {

		 		if(contador >= 5 && contador < 10) {
		 			imagen.src = 'img/kidding.png'
		 		} else if(contador >= 10 && contador < 15) {
		 			imagen.src = 'img/angry.png'
		 		} else if(contador >= 15) {
		 			imagen.src = 'img/beg.png'
		 		}

	 		}

			console.log(event.key);
			console.log(event.keyCode);

		}


	}	
})()

