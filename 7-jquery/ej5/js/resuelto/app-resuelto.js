
(function () {


	function inicializarTooltips() {

		var tooltips = $('.tooltip');

		tooltips.on('mouseenter mouseleave', function (event) {
			$(this).find('.tooltip-content').toggleClass('toggle');
		});

	}

	inicializarTooltips();

})()