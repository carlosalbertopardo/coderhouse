var finDeSemana = ['Sabado', 'Domingo'];
var dia = prompt('Que día es hoy?');

var diaMayus = dia.toUpperCase();

for (var i = 0; i < finDeSemana.length; i++) {

  if (diaMayus == 'SABADO' || diaMayus == 'DOMINGO') {
    console.log('Hoy es fin de semana!');
    break;
  } else {
    console.log('Es dia de semana!');
    break;
  }
}