<?php
session_start();

$host_db = "localhost";
$user_db = "root";
$pass_db = "";
$db_name = "OmalsaIngenieros";

$conexion = new mysqli($host_db, $user_db, $pass_db, $db_name);
?>

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8">
    
    <title>Omalsa Ingenieros</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="VPGEstilo.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>

</head>

<body>

	<br>
	<br>

	<hr>

	<h1 align="center" style="color:#E3C0FA;"><?php echo "   "; ?>    Información Puntual <?php echo $_SESSION['Nombre'];?></h1>
	
	<hr>
	
    <nav class="navbar navbar-fixed-left navbar-minimal animate" role="navigation">

		<div class="navbar-toggler animate">

			<span class="menu-icon"></span>

		</div>

			<ul class="navbar-menu animate">

				<li>
					<a class="animate" id="CSC" onclick="ContratoSociosClave()">
						<span class="desc animate"> Vista de Concursos </span>
						<span class="glyphicon glyphicon-user"></span>
					</a>
				</li>

				<li>
					<a class="animate" id="SC" onclick="Documentos()">
						<span class="desc animate"> Vista de Proyectos </span>
						<span class="glyphicon glyphicon-info-sign"></span>
					</a>
				</li>

				<li>
					<a class="animate" id="ESC" onclick="ContratoPersonalDeApoyo()">
						<span class="desc animate"> Vista de Clientes </span>
						<span class="glyphicon glyphicon-comment"></span>
					</a>
				</li>

				<li>
					<a class="animate" id="ESC" onclick="SociosClave()">
						<span class="desc animate"> Vista de los Socios Clave </span>
						<span class="glyphicon glyphicon-comment"></span>
					</a>
				</li>

				<li>
					<a class="animate" id="ESC" onclick="PersonalesDeApoyo()">
						<span class="desc animate"> Personales de Apoyo </span>
						<span class="glyphicon glyphicon-comment"></span>
					</a>
				</li>

				<li>
					<a class="animate" id="ESC" onclick="Documentos()">
						<span class="desc animate">Documentos Realizados</span>
						<span class="glyphicon glyphicon-comment"></span>
					</a>
				</li>

			</ul>

	</nav>



<!-- START OF HTML FOR DEMO - NOT NEEDED -->
	
		
	<div class="container" id="box" style="background-color: #444;">

		<div class="demo">

		  <br>

		  <h2 align="center">Tabla Principal de Usuario</h2>
		  <p> Esta tabla te Muestra los campos del Usuario Entrante, entonces se denota los datos puntuales. Para una Informacion inmedita del Usuario para ayuda a encontrar los datos personales que determino al momento de crear su cuenta</p>

		  <br>    

		  <div class="table-responsive">  

			  <table class="table">

			    <thead>
			      <tr>
			        <th>CAMPO</th>
			        <th>DENOTACIÓN</th>
			      </tr>
			    </thead>

			    <tbody>
			        <tr>
			        	<td><strong>Código Principal</strong></td>
			        	<td><?php echo $_SESSION['Codigo Principal']; ?></td>
			        </tr>
			        <tr>
			        	<td><strong>Nombre</strong></td>
			        	<td><?php echo $_SESSION['Nombre']; ?></td>
			        </tr>
			        <tr>
			        	<td><strong>Direccion</strong></td>
			        	<td><?php echo $_SESSION['Direccion']; ?></td>
			        </tr>
			        <tr>
			        	<td><strong>DNI</strong></td>
			        	<td><?php echo $_SESSION['DNI'] ?></td>
			        </tr>
			        <tr>
			        	<td><strong>Telefonos</strong></td>
			        	<td><?php echo $_SESSION['Telefonos']; ?></td>
			        </tr>
			        <tr>
			        	<td><strong>Email</strong></td>
			        	<td><?php echo $_SESSION['Email']; ?></td>
			        </tr>
			        <tr>
			        	<td><strong>Permiso</strong></td>
			        	<td><?php echo $_SESSION['Permiso']; ?></td>
			        </tr>
			        <tr>
			        	<td><strong>Nombre de Usuario</strong></td>
			        	<td><?php echo $_SESSION['username']; ?></td>
			        </tr>
			        <tr>
			        	<td><strong>Estado</strong></td>
			        	<td><?php echo $_SESSION['Estado']; ?></td>
			        </tr>
			    </tbody>

			  </table>

		  		<form>
		            <input class="btn btn-lg btn-success btn-block" type="submit" value="Actualizar">
		        </form>

		  </div>

		</div>
	

		<div class="ContratoSociosClave">
				<?php
					$sql = "SELECT * FROM `contratos_sc`";
					$result = $conexion->query($sql);
					if ($result->num_rows > 0) {     
					 } 

					$sql1 = "SELECT * FROM `socio_clave`";
					$result1 = $conexion->query($sql1);
					if ($result1->num_rows > 0) {     
					 }

					$iSC=0;
					$NombreSocio = array($iSC);
					$CodigoSocio = array($iSC);
					while ($row1 = $result1->fetch_assoc()) {
					$NombreSocio[$iSC] = $row1['Nombres'];
					$CodigoSocio[$iSC] = $row1['codigo'];
					$iSC++;

					}

					$sql2 = "SELECT * FROM `cargos_laborales`";
					$result2 = $conexion->query($sql2);
					if ($result2->num_rows > 0) {     
					 }

					$iCL=0;
					$NombreCargo = array($iCL);
					$CodigoCargo = array($iCL);
					while ($row2 = $result2->fetch_assoc()) {
					$NombreCargo[$iCL] = $row2['Nombre'];
					$CodigoCargo[$iCL] = $row2['codigo'];
					echo $NombreCargo[$iCL];
					$iCL++;

					}


					
						
					
					


				 ?>

				 <br>

			  <h2 align="center">Tabla de Contratos de Socios Clave</h2>
			  <p> Esta tabla te Muestra los campos de los Socios Clave, entonces se denota los datos puntuales. Para una Informacion de ayuda a encontrar los datos personales que determino al momento de crear su cuenta</p>

			  <br> 

			  <div class="table-responsive">   

			      <table class="table ">


			       <?php
			       

			       echo "<thead>
			          <tr>
			            <th>Código del Contrato</th>
			            <th>Codigo del Socio Clave</th>
			            <th>Nombres del Socio Clave</th>
			            <th>DNI</th>
			            <th>Dirección</th>
			            <th>Telefonos</th>
			            <th>Email</th>
			            <th>Fecha de Colegiatura</th>
			            <th>Rango Profesional</th>
			            <th>Identificador de Ingreso</th>
			            <th>Password</th>
			            <th>Estado</th>
			          </tr>
			        </thead>";
			       
			        echo "<tbody>";
			        while($row = $result->fetch_assoc()) {
			        
			            echo "<tr>";
			            foreach ($row as $indice =>$valor){
			            	
			            	
			            echo "<td>".$valor."</td>";

			            if ($indice == "cod_CS") {
			            		for ($j=0; $j < $iSC; $j++) { 
			            			if ($valor == $CodigoSocio[$j]) {
			            			echo "<td>".$NombreSocio[$j]."</td>";	
			            			}
			            		}
			            	}

			            	if ($indice == "cod_Cargo_Laboral") {
			            		for ($j=0; $j < $iCL; $j++) { 
			            			if ($valor == $CodigoCargo[$j]) {
			            			echo "<td>".$NombreCargo[$j]."</td>";	
			            			}
			            		}
			            	}

			            }
			            echo "<tr>";
			        }
			        echo "</tbody>";
			 		?> 

			      </table>

			        <form>
			            <input class="btn btn-lg btn-success btn-block" type="submit" value="Login">
			        </form>

			  </div>
				
		</div>

		<div class="Documentos">
				<?php
					$sql = "SELECT * FROM `documentos`";
					$result = $conexion->query($sql);
					if ($result->num_rows > 0) {     
					 } 
				 ?>

				 <br>

			  <h2 align="center">Tabla de Documentos</h2>
			  <p> Esta tabla te Muestra los campos de los Documentos, entonces se denota los datos puntuales. Para una Informacion de ayuda a encontrar los datos personales que determino al momento de crear su cuenta</p>

			  <br> 

			  <div class="table-responsive">   

			      <table class="table ">


			       <?php
			       

			       echo "<thead>
			          <tr>
			            <th>Código del Contrato</th>
			            <th>Codigo del Socio Clave</th>
			            <th>Nombres del Socio Clave</th>
			            <th>DNI</th>
			            <th>Dirección</th>
			            <th>Telefonos</th>
			            <th>Email</th>
			            <th>Fecha de Colegiatura</th>
			            <th>Rango Profesional</th>
			            <th>Identificador de Ingreso</th>
			            <th>Password</th>
			            <th>Estado</th>
			          </tr>
			        </thead>";
			       
			        echo "<tbody>";
			        while($row = $result->fetch_assoc()) {
			        
			            echo "<tr>";
			            foreach ($row as $indice =>$valor){
			            if ($indice=="Pasword") {
			              $valor="********";
			            }
			            echo "<td>".$valor."</td>";}
			            echo "<tr>";
			        }
			        echo "</tbody>";
			 		?> 

			      </table>

			        <form>
			            <input class="btn btn-lg btn-success btn-block" type="submit" value="Login">
			        </form>

			  </div>
				
		</div>

		<div class="ContratoPersonalDeApoyo">
				<?php
					$sql = "SELECT * FROM `contratos_pa`";
					$result = $conexion->query($sql);
					if ($result->num_rows > 0) {     
					 } 
				 ?>

				 <br>

			  <h2 align="center">Tabla de Contratos de Personal de Apoyo</h2>
			  <p> Esta tabla te Muestra los campos de los Personales de Apoyo, entonces se denota los datos puntuales. Para una Informacion de ayuda a encontrar los datos personales que determino al momento de crear su cuenta</p>

			  <br> 

			  <div class="table-responsive">   

			      <table class="table ">


			       <?php
			       

			       echo "<thead>
			          <tr>
			            <th>Código del Contrato</th>
			            <th>Codigo del Socio Clave</th>
			            <th>Nombres del Socio Clave</th>
			            <th>DNI</th>
			            <th>Dirección</th>
			            <th>Telefonos</th>
			            <th>Email</th>
			            <th>Fecha de Colegiatura</th>
			            <th>Rango Profesional</th>
			            <th>Identificador de Ingreso</th>
			            <th>Password</th>
			            <th>Estado</th>
			          </tr>
			        </thead>";
			       
			        echo "<tbody>";
			        while($row = $result->fetch_assoc()) {
			        
			            echo "<tr>";
			            foreach ($row as $indice =>$valor){
			            if ($indice=="Pasword") {
			              $valor="********";
			            }
			            echo "<td>".$valor."</td>";}
			            echo "<tr>";
			        }
			        echo "</tbody>";
			 		?> 

			      </table>

			        <form>
			            <input class="btn btn-lg btn-success btn-block" type="submit" value="Login">
			        </form>

			  </div>
				
		</div>

		

	</div>


		<a href="../Login/Login.html" class="btn btn-primary" id="fullscreen" data-toggle="tooltip" data-placement="left" title="Full Screen">
			<span class="glyphicon glyphicon-fullscreen"></span>
		</a>

	<br>
	<br>

	<!-- <hr>
		<p id="footer">Misfar ©</p>
	<hr> -->
	<footer>
		<hr>
			<p id="copy">Omalsa Ingenieros</p>
		<hr>
	</footer>
<!-- END OF HTML FOR DEMO - NOT NEEDED -->


	<script src="VPGEfecto.js"></script>

</body>
</html>
