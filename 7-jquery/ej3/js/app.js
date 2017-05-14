/*  

EJERCICIO N°3

*/


$('.content').hide();


$('.tab').click(function () {

	var tabId = $(this).attr('id');
	var stringId = tabId.split('-');

	var id = stringId[1];	

	if (!$(this).hasClass('active')) {

		$(this).addClass('active');
		$('#content-'+id).show();

		cerrarOtrasTabs(id);

	}


})



function cerrarOtrasTabs(id) {

	//Sacarle la clase active a los tab hermanos
	$('#tab-'+id).siblings().removeClass('active');

	//Ocultar los tabs hermanos
	$('#content-'+id).siblings().hide();

}


$('#tab-2').click();