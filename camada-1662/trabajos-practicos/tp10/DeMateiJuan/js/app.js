$(document).ready(function() {

  $("button").click(function(event) {
    event.preventDefault();

    var titulo = $("#titulo").val();
    var contenido = $("#contenido").val();
    var importancia = $("#importancia").val();

    if (titulo === "") {
      console.log("Debe ingresar un titulo");
    } else if (contenido === "") {
      console.log("Debe ingresar un contenido");
    } else {
      $("#noticias").prepend("<article class='alert alert-" + importancia + "noticia-pod'><h3>" + titulo + "</h3><p>" + contenido + "</p></article>");
    }

  });

});
