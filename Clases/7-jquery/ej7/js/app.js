



$('#crazy-box').mouseenter(function () {

	var positionActual = $(this).position().left;

	console.log(positionActual);

	var nuevaPos = positionActual + 30;
	$(this).css('left',nuevaPos + 'px');

})
