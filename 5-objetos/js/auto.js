
var auto = {
	color: '#0000FF',
	modelo: 95,
	patente: 'AFK123',
	marca: 'Ford',
	prendido: false,
	velocidad: 0,
	velocidadMaxima: 60,
	arrancar: function () {
		this.prendido = true;
	},
	apagar: function () {
		this.prendido = false;
	},
	acelarar: function () {

		if( this.velocidad < this.velocidadMaxima ) {
			this.velocidad = this.velocidad + 10;
		} else {
			console.log('Ya estas en la velocidad maxima.')
		}

	}
}