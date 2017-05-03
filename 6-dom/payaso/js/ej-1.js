/*  

EJERCICIO N°1
HAZ FELIZ AL PAYASO!!!

*/

// Paso1 - Demosle un poco de color a las mejillas!

var mejillas = document.getElementsByClassName('mejilla');

for (var i = 0; i < mejillas.length; i++) {
	
	mejillas[i].style.backgroundColor = "red";

}

// Paso 2 - Pero que es esa cara triste? Agregemosle una sonrisa a esa boca.

var boca = document.getElementById("boca");
boca.className = "risa";


// Pipi no tiene Nariz! Creemosle una!

// - Agregar nariz dic con id nariz, en la parte-media. create element y append
var nariz = document.createElement("div"); //Creamos un div que va a ser nuestra nariz
nariz.id = "nariz"; //Le asignamos el id nariz para que tome los etilos del CSS
var parteMedia = document.getElementById("parte-media"); //Buscamos el lugar donde poner la nariz
parteMedia.appendChild(nariz); //Apendeamos la nariz al DOM





// Esas cejas quedan un poco raras. Borremoslas!

var cejas = document.getElementsByTagName('span');

for (var i = 0; i < 2; i++) {
	cejas[0].parentNode.removeChild(cejas[0]);
}


/*

- Agregar pelo (Url al tag de imagen)

- agregar fondo del body src del body

*/


