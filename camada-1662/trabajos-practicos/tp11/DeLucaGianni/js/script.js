$(document).ready(function(){
var agregar = $('#submit');
var contenedor = $('#contenedor');

agregar.click(function(e){
	e.preventDefault();
	var valorTitulo = $('#titulo').val();
	var valorDescripcion = $('#desc').val();
	var importancia = $('select').val();

	if(importancia === 'novedad'){
		crear(valorTitulo, valorDescripcion, importancia);
	} else if(importancia === 'urgente'){
		crear(valorTitulo, valorDescripcion, importancia);
	} else if(importancia === 'normal'){
		crear(valorTitulo, valorDescripcion, importancia);
	}

	$('form')[0].reset();
});


function crear(titulo, desc, importancia){
	var html = $('<div class="'+ importancia +'"><h1>'+ titulo +'</h1><p>'+ desc+'</p></div>');
		contenedor.append(html);
}




});