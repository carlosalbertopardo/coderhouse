/*  

EJERCICIO N°4
"Dado el siguiente objeto, crear sus setters y getters."
-Crear tambíen un método que muestre por pantalla si la persona
puede entrar en una montaña rusa (Altura > 1.5).
*/

/*

SOLUCION: Que son los Getters y Setters?

Los Métodos "getter" se utilizan para obtener información,
mientras que los "setters" se utilizan para modificarla,

Veamos como funcionan:
- En primer lugar, creamos nuestro objeto persona, con sus atributos nombre, apellido, edad, altura y color de pelo.
*/


var persona = {
	nombre: "Bart",
	apellido: "Simpson",
	edad: 10,
	altura: 1.3,
	colorDePelo: "Rubio",
	// GETTERS! Primero definimos sus getters, que con la propiedad "this" podemos acceder a los valores actuales de los atributos del objeto
	getNombre: function(){
		return this.nombre;
	},
	getApellido: function(){
		return this.apellido;
	},
	getEdad: function(){
		return this.edad;
	},
	getAltura: function(){
		return this.altura;
	},
	getColorDePelo: function(){
		return this.altura;
	},	
	// SETTERS! Luego creamos su setters, los cual reciben por parámetro un valor y se lo podemos asignar a cada una de los atributos del objeto
	setNombre: function(nuevoNombre){
		this.nombre = nuevoNombre ;
	},
	setApellido: function(nuevoApellido){
		this.apellido = nuevoApellido;
	},
	setEdad: function(nuevaEdad){
		this.nuevaEdad = nuevaEdad;
	},
	setAltura: function(nuevaAltura){
		this.nuevaAltura = nuevaAltura;
	},
	setColorDePelo: function(nuevoColorDePelo){
		this.nuevoColorDePelo = nuevoColorDePelo;
	},	
	//Despues podemos crear algunos métodos adicionales que nos sirven para resolver el resto del ejercicio.
	getNombreCompleto: function(){
		return this.nombre + ' ' + this.apellido;
	},
	esAlto: function () { // Hacemos una function que pregunte si nuestra altura es mayor a 1.5 y retorne sy valor de verdad.
		if (this.altura > 1.5) {
			return true
		}

		return false
	},
	crecer: function (cantidad) {
		this.altura = this.altura + canti
	}

}

// Y podemos llamas a algunos de sus getters:
console.log(persona.getNombre());
console.log(persona.getEdad());

//Podemos usar lagunos de sus setters para modificar algunas propiedades...
persona.setNombre('Marge');
persona.setApellido('Bouvier');
persona.setEdad(38);

//Tambien mostrar por pantalla sus otros métodos
console.log(persona.getNombreCompleto());
console.log(persona.esAlto());

