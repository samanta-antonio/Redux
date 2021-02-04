<?php 
require('db_connect.php');
$andro = $_GET['andro'];
$sql = "select * from $andro";
$resultado = comRetorno ($sql);

$conteudo = json_encode(mysqli_fetch_all($resultado,MYSQLI_ASSOC));
print_r ($conteudo);
header("Access-Control-Allow-Origin: * ")
?>

