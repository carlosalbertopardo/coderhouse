"use strict";

/*Crear una funcion que agregue objetos peliculas
​
El objeto pelicula Debera tener ID, titulo, descripcion, año,
 duracion, actores, director

Debera tener metodos para editar todas sus propiedades,
 menos su ID, y para los actores tendra que ir agregando uno a uno
Crear una funcion que agregue objetos peliculas

El objeto pelicula Debera tener ID, titulo, descripcion, año,
 duracion, actores, director
Debera tener metodos para editar todas sus propiedades,
 menos su ID, y para los actores tendra que ir agregando uno a uno*/

var pelicula = {
    id: 123,
    titulo: "Deadpool",
    descripcion: "Deadpool es un super anti heroe que va por ahi matando gente haciendo chistes negros",
    anio: 2016,
    duracion: 128,
    actores: [],    
    director: "Tim Miller",
    pushActores: function(pushActor){
        this.actores.push(pushActor);
    }
}

var input = prompt("Ingrese un actor para contribuir a la base de datos:");

pelicula.pushActores(input); //se ingresa el primer actor

var inputConfirm = confirm("¿Desea agregar algun actor/actriz mas?");

if(inputConfirm == true){
    var input2 = prompt("Ingrese otro actor/actriz:")
    pelicula.pushActores(input2); //se ingresan los demas actores
}
else{
    alert("Mucha gracias por su contribucion");
}

for (var key in pelicula){
    if (typeof(pelicula[key]) !== "function"){
        console.log(pelicula[key]);
    }
}