<?php

header("Content-Type: application/json");

require "conexao.php";

$dados =
json_decode(
    file_get_contents("php://input"),
    true
);

$id_usuario =
$dados["id_usuario"];

$id_quarto =
$dados["id_quarto"];

$checkin =
$dados["checkin"];

$checkout =
$dados["checkout"];

$sql =
"INSERT INTO reservas
(id_usuario,id_quarto,checkin,checkout)

VALUES

('$id_usuario','$id_quarto','$checkin','$checkout')";

if($conexao->query($sql)){

    echo json_encode([

        "sucesso" => true,
        "mensagem" => "Reserva realizada com sucesso!"

    ]);

}
else{

    echo json_encode([

        "sucesso" => false,
        "mensagem" => "Erro ao realizar reserva."

    ]);

}

?>