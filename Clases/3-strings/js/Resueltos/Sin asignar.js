var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
var letras = cadena.split("");
var resultado = "";
for(i in letras) {
if(letras[i] == 'a') {
	console.log('lalalalal');
continue;

	console.log('pepepepe');

}
else {
resultado += letras[i];
}
}
alert(resultado);
// muestra "En un lugr de l Mnch de cuyo nombre no quiero cordrme..."