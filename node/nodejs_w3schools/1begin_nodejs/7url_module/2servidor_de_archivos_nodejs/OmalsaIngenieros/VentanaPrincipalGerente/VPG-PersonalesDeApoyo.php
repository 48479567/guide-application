<?php
session_start();

$host_db = "localhost";
$user_db = "root";
$pass_db = "";
$db_name = "OmalsaIngenieros";

$conexion = new mysqli($host_db, $user_db, $pass_db, $db_name);

$sql = "SELECT * FROM `personal_apoyo`";
$result = $conexion->query($sql);
if ($result->num_rows > 0) {     
 }


 

?>

<!DOCTYPE html>

<html lang="en">

<meta charset="utf-8">

<head>
    <link rel="stylesheet" type="text/css" href="VPGEstilo.css">
    <script src="VPGEfecto.js"></script>
</head>

<body>

<h1></h1>

<div class="container" style="background-color: #444;" id="box">

  <h2>Table</h2>
  <p>The .table-responsive class creates a responsive table which will scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, there is no difference:</p>                                                                                      
  <div class="table-responsive">   

      <table class="table ">


       <?php

       echo "<thead>
          <tr>
            <th>Código del Personal</th>
            <th>Codigo de Profesión</th>
            <th>Nombres</th>
            <th>DNI</th>
            <th>Dirección</th>
            <th>Telefonos</th>
            <th>Email</th>
            <th>Fecha de Graduación</th>
            <th>Rango Profesional</th>
            <th>Identificador de Ingreso</th>
            <th>Contraseña</th>
            <th>Estado</th>

          </tr>
        </thead>";
       
        echo "<tbody>";
        while($row = $result->fetch_assoc()) {
        
            echo "<tr>";
            foreach ($row as $iSCndice =>$valor){
            if ($iSCndice=="Pasword") {
              $valor="**********";
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

</body>

</html>