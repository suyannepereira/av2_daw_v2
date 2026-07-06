<?php

header("Content-Type: application/json");

require "conexao.php";

$sql = "SELECT * FROM quartos";

$resultado = $conexao->query($sql);

$quartos = [];

while($linha = $resultado->fetch_assoc()){

    $quartos[] = $linha;

}

echo json_encode($quartos);

?>