var habil = ['LUNES','MARTES','MIERCOLES','MIÉRCOLES','JUEVES','VIERNES'];
var finde = ['SABADO','SÁBADO','DOMINGO'];

var str = prompt("Ingrese un día");
var dia = str.toUpperCase()

for (var i = 0; i < habil.length;  i++) {
	if (habil[i]==dia) {
	alert('El día ingresado es un día hábil, el día es: ' + habil[i]);
	}
} 
for (var i = 0; i < finde.length;  i++) {
	if (finde[i]==dia) {
	alert('El día ingresado es un día hábil, el día es: ' + finde[i]);
	} 
}
