

var mensaje = prompt('Ingrese un dia');

var diasDeLaSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
var finDeSemana = ['sabado', 'domingo'];

for (var i = 0; i < diasDeLaSemana.length; i++) {
  if(diasDeLaSemana[i] === mensaje){
    console.log('El dia ingresado es un dia hábil');
  }
}


for(var i = 0; i< finDeSemana.length ; i++){
  if(finDeSemana[i] === mensaje){
    console.log('Estamos en el fin de semana! :)');
  }
}
