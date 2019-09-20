

		$(document).ready(function(){
			$("#circle").hide();
			$("#box").animate({height:"280px"},"slow");
			$("#box").animate({width:"450px"},"slow");
			$("#circle").fadeIn(5000);

		});
		function blinker(){
			$('#blinking').fadeOut("slow");
			$('#blinking').fadeIn("slow");
		}
		setInterval(blinker, 3000);

