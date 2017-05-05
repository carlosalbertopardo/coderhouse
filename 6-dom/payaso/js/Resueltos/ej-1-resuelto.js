/*  

EJERCICIO N°1 - HAZ FELIZ AL PAYASO!!!

*/


//Demosle un poco de color a las mejillas!

var mejillas = document.getElementsByClassName('mejilla');

for (var i = 0; i < mejillas.length; i++) {
	
	mejillas[i].style.backgroundColor = "red";

}

// Pipi no tiene Nariz! Creemosle una!

// - Agregar nariz dic con id nariz, en la parte-media. create element y append
var nariz = document.createElement("div"); //Creamos un div que va a ser nuestra nariz
nariz.id = "nariz"; //Le asignamos el id nariz para que tome los etilos del CSS
var parteMedia = document.getElementById("parte-media"); //Buscamos el lugar donde poner la nariz
parteMedia.appendChild(nariz); //Apendeamos la nariz al DOM


// Pero que es esa cara triste? Agregemosle una sonrisa a esa boca.

var boca = document.getElementById("boca");
boca.className = "risa";



// Esas cejas quedan un poco raras. Borremoslas!
var cejas = document.getElementsByTagName('span');

for (var i = 0; i < 2; i++) {
	cejas[0].parentNode.removeChild(cejas[0]);
}


// Hay que maquillar a pipi. Pintemosle la cara!
var cabeza = document.getElementById('cabeza');
cabeza.style.backgroundColor = "#fdddca";

// Un payaso no es nada sin su pelo. Agreguemole un afro colorido!

var cueroCabelludo = document.getElementById("pelo");
var pelo = cueroCabelludo.children[0];
pelo.src = "img/pelo-payaso.png";


// Solo nos falta poner a pipi en su lugar de trabajo.
var fondo = document.getElementsByTagName('main');
fondo[0].style.backgroundImage = "url('img/curtain.jpg')";

// Por ultimo! Pongamos un cartel del show de pipi

var cartel = document.getElementById("cartel");
cartel.innerHTML = "¡pipi está feliz!";
cartel.style.fontSize = "40px";
cartel.style.color = "#fff";
cartel.style.textTransform = "uppercase";
cartel.style.backgroundColor = "#FFB6C1";