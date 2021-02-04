<?php
    require('db_connect.php');
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $nome = $_POST['nome'];
        $msg = $_POST['mensagem'];
        $email = $_POST['email'];

        $sql = "INSERT into clientes (nome, email) values ('$nome','$email');";
        semRetorno($sql);
        $sqlResultado = "SELECT id_cliente from clientes where email = '$email'";
        $id_cliente = mysqli_fetch_assoc(comRetorno($sqlResultado));
        $id_final = $id_cliente ['id_cliente'];
        $sqlComentarios = "INSERT into comentarios (id_cliente, msg) values ('$id_final','$msg');";
        semRetorno($sqlComentarios);
        header ("Access-Control-Allow-Origin: * ");


    }
?>