
		$(document).ready(function(){
			$("#circle").hide();
			$("#box").animate({height:"600px"},"slow");
			$("#box").animate({width:"600px"},"slow");
			$("#circle").fadeIn(5000);

		});
		function blinker(){
			$('#blinking').fadeOut("slow");
			$('#blinking').fadeIn("slow");
		}
		setInterval(blinker, 3000);


		$(function () {
		    /* START OF DEMO JS - NOT NEEDED */
		    if (window.location == window.parent.location) {
		        $('#fullscreen').html('<span class="glyphicon glyphicon-resize-small"></span>');
		        $('#fullscreen').attr('href', '../Login/Login.html');
		        $('#fullscreen').attr('title', 'Cerrar Sesión');
		    }    
		    $('#fullscreen').on('click', function(event) {
		        event.preventDefault();
		        window.parent.location =  $('#fullscreen').attr('href');
		    });
		    $('#fullscreen').tooltip();
		    /* END DEMO OF JS */
		    
		    $('.navbar-toggler').on('click', function(event) {
				event.preventDefault();
				$(this).closest('.navbar-minimal').toggleClass('open');
			})
		});


