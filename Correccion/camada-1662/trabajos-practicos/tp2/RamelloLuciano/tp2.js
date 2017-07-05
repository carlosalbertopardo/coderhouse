//Pedimos el input al usuario
var diaDeLaSemana = prompt("Ingresa un dia de la semana, todo en minusculas por favor");

//declaramos los arrays
var semanaHabil = ["lunes", "martes", "miercoles", "jueves", "viernes"];
var finDeSemana = ["sabado", "domingo"];

// buscamos las longides de cada uno de los arrays para que no se calculen en cada giro del for
//y el programa fluya mas rapido  (tengo entendido que es una buena practica)

var largoSemana = semanaHabil.length;
var largoFinDeSemana = finDeSemana.length;

//seteamos unos booleanos para poder comparar y ver que alert es el necesario
var diaHabil = false;
var finde = false;

//iteramos el primer array y vemos que booleano le corresponde a la variable diaHabil
for (var i = 0; i < largoSemana; i++) {

    //si encontramos el input en el array pasamos la variable diaHabil a true.
    if (semanaHabil[i] === diaDeLaSemana) {
        diaHabil = true;
        // si el dia es un dia habil pasamos el alert advirtiendolo
        if (diaHabil === true) {
            alert("es un dia habil");
        }
    }
}

//mismo procedimiento del for anterior, pero con la variable finde en este caso.
for (var j = 0; j < largoFinDeSemana; j++) {
    if (finDeSemana[j] === diaDeLaSemana) {
        finde = true;
        if (finde === true) {
            alert(" es un dia del fin de semana");
        }
    }
}

// en el caso de una tercera opcion dejamos un mensaje aclarando el input incorrecto.
if (diaHabil === false && finde === false) {
    alert("Me parece que estas ingresando mal el dia, o me estas tomando el pelo.(despues de todo soy una computadora con sentimientos ;-( ).)");
}
// fin. (se nota que me inculcaron mucho el tema de comentar el codigo no?)