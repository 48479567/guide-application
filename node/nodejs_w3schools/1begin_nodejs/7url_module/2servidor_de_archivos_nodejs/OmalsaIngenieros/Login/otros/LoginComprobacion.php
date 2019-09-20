
<?php





$codigo = $_POST['usuario'];
$Pasword = $_POST['contraseña'];
 
$sql = "SELECT * FROM $tbl_name WHERE $codigo = 'codigo'";

$result = $conexion->query($sql);


if ($result->num_rows > 0) {

     
 
 $row = $result->fetch_array(MYSQLI_ASSOC);}
 if (password_verify($Pasword, $row['Pasword'])) { 
 
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $codigo;
    $_SESSION['start'] = time();
    $_SESSION['expire'] = $_SESSION['start'] + (5 * 60);

    echo "Bienvenido! " . $_SESSION['username'];
    echo "<br><br><a href=panel-control.php>Panel de Control</a>"; 

 } else { 
   echo "Username o Password estan incorrectos.";

   echo "<br><a href='login.html'>Volver a Intentarlo</a>";
 }
 mysqli_close($conexion); 
 */
 ?>
<?php include('functions.php');
$dni=$_GET['dni'];
$nombres=$_GET['nombres'];
$apellidos=$_GET['apellidos'];

ejecutarSQLCommand("INSERT INTO `usuarios` (dni, nombres, apellidos)
VALUES ( 
'$dni' ,
'$nombres' ,
'$apellidos')
");
 ?>


