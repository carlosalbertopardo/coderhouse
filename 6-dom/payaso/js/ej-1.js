/*  

EJERCICIO N°1 - HAZ FELIZ AL PAYASO!!!

*/

//Demosle un poco de color a las mejillas!

var mejillas = document.getElementsByClassName('mejilla')

for (var i = 0; i < mejillas.length; i++) {
	mejillas[i].style.backgroundColor = 'red';
}


// Pipi no tiene Nariz! Creemosle una!

var nariz = document.createElement('div');
nariz.id ='nariz';

var parteMedia = document.getElementById('parte-media');

parteMedia.append(nariz);

// Pero que es esa cara triste? Agregemosle una sonrisa a esa boca.

var boca = document.getElementById('boca');
boca.className = 'risa';


// Esas cejas quedan un poco raras. Borremoslas!
var cejas = document.getElementsByClassName('ceja');

cejas[0].parentNode.removeChild(cejas[0]);
cejas[0].parentNode.removeChild(cejas[0]);

// Hay que maquillar a pipi. Pintemosle la cara!

var cabeza = document.getElementById('cabeza');
cabeza.style.backgroundColor = 'peru'; 


// Un payaso no es nada sin su pelo. Agreguemole un afro colorido!

var cueroCabelludo = document.getElementById('pelo')
console.log(cueroCabelludo);
cueroCabelludo.children[0].src = 'img/pelo-payaso.png';

// Solo nos falta poner a pipi en su lugar de trabajo.

var main = document.getElementsByTagName('main');
console.log(main);
main[0].style.backgroundImage = "url('img/curtain.jpg')";

// Por ultimo! Pongamos un cartel del show de pipi

var cartel = document.getElementById('cartel');
cartel.innerHTML = 'Bienvenidos al show the pipi el payaso';
cartel.style.fontSize = '40px';
cartel.style.color = '#fff';




