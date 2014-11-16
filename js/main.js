define(function (require) {
	var $ = require('jquery'),
	bootstrap = require('bootstrap'),
	underscore = require('underscore');
	d3 = require('d3');

	$( document ).ready(function() {
		$( ".plot" ).click(function() {
			var sizeW = $("#sizeW").val(),
				sizeH = $("#sizeH").val(),
				pixelsW = $("#pixelsW").val(),
				pixelsH = $("#pixelsH").val(),
				buildW = $("#buildW").val(),
				buildH = $("#buildH").val();
				weight = $("#weight").val();

				$('#filler').html('');



				for (bH = 0; bH < buildH; bH++)
				{
					for(bW = 0; bW < buildW; bW++)
					{
						$('#filler').append('<div class="panel">'+ ((bW+1)+(bH*buildW)) + '</div>');
					}
					$('#filler').append('<div class="row"></div>');
				}

				$('.panel').css( "width", pixelsW );
				$('.panel').css( "height", pixelsH );

				$('.data-info').html(
					'<b>Width: ' + (sizeW*buildW)/100 + ' meter </br>' +
					'Height: ' + (sizeH*buildH)/100 + ' meter </br>' +
					'Square Meters: ' + ((sizeH*buildH)/100)*((sizeW*buildW)/100) + ' m2 </br></br>' +
					'Pixels X: ' + (pixelsW*buildW) + ' px</br>' +
					'Pixels H: ' + (pixelsH*buildH) + ' px</br></br>' +
					'Weight: ' + (buildH*buildW*weight) + ' Kg</b>');
		});
	});

});



