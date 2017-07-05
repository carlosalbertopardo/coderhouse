

/* Comandos

  localStorage.setItem('bgcolor', 'red');

  localStorage.getItem('bgcolor');

  localStorage.clear();

*/


var gato = {
	id: 1234,
	color: '#fff',
	raza: 'siames',
	edad: 2,
	maullar: function () {
		console.log('MIAUUUUUU!!!!');		
	}
}

var string1 = JSON.stringify(gato);

console.log(string1);
