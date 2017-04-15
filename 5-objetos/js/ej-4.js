/*  

EJERCICIO N°4
"Dado el siguiente objeto, 
crear sus setters y getters."
-Crear tambíen un método que 
muestre por pantalla si la persona
puede entrar en una montaña rusa (Altura > 1.5).
*/

var persona = {
	nombre: "Bart",
	apellido: "Simpson",
	edad: 10,
	altura: 1.3,
	colorDePelo: "Rubio",
	getNombreCompleto: function(){
		return this.nombre + ' ' + this.apellido;
	},
	esAlto: function () {
		if (this.altura > 1.5) {
			return true
		}

		return false
	},
	crecer: function (cantidad) {
		this.altura = this.altura + canti
	}

}

console.log(persona.getNombreCompleto());
console.log(persona.esAlto());

