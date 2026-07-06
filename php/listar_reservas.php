<?php

header("Content-Type: application/json");

require "conexao.php";

$id_usuario = $_GET["id_usuario"];

$sql =

"SELECT

reservas.id,
quartos.nome,
quartos.descricao,
reservas.checkin,
reservas.checkout

FROM reservas

INNER JOIN quartos

ON reservas.id_quarto = quartos.id

WHERE reservas.id_usuario = '$id_usuario'";

$resultado = $conexao->query($sql);

$reservas = [];

while($linha = $resultado->fetch_assoc()){

    $reservas[] = $linha;

}

echo json_encode($reservas);

?>