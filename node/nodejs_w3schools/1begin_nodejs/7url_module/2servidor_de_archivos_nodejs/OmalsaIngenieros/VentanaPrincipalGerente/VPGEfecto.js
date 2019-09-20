
		$(document).ready(function(){
			$(".ContratoSociosClave").hide();
			$(".Documentos").hide();
			$(".ContratoPersonalDeApoyo").hide();
			$("#circle").hide();
			$("#box").animate({height:"670px"},"slow");
			$("#box").animate({width:"1200px"},"slow");
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

		
		function ContratoSociosClave() {
		$(".demo").hide();
		$(".Documentos").hide();
		$(".ContratoPersonalDeApoyo").hide();
		$(".ContratoSociosClave").show();

		}

		function Documentos() {
		$(".demo").hide();
		$(".ContratoSociosClave").hide();
		$(".ContratoPersonalDeApoyo").hide();
		$(".Documentos").show();

		}

		function ContratoPersonalDeApoyo() {
		$(".demo").hide();
		$(".ContratoSociosClave").hide();
		$(".Documentos").hide();
		$(".ContratoPersonalDeApoyo").show();

		}


		/*

		function Proyectos() {
		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		      document.getElementById("demo").innerHTML = this.responseText;
		    }
		  }; 
		  xhttp.open("GET", "VPG-Proyectos.php", true);
		  xhttp.send();
		}

		function Clientes() {
		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		      document.getElementById("demo").innerHTML = this.responseText;
		    }
		  }; 
		  xhttp.open("GET", "VPG-Clientes.php", true);
		  xhttp.send();
		}

		function SociosClave() {
		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		      document.getElementById("demo").innerHTML = this.responseText;
		    }
		  }; 
		  xhttp.open("GET", "VPG-SociosClave.php", true);
		  xhttp.send();
		}

		function PersonalesDeApoyo() {
		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		      document.getElementById("demo").innerHTML = this.responseText;
		    }
		  }; 
		  xhttp.open("GET", "VPG-PersonalesDeApoyo.php", true);
		  xhttp.send();
		}

		*/

		

