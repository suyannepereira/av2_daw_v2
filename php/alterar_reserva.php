<?php

header("Content-Type: application/json");

require "conexao.php";

$dados =
json_decode(
file_get_contents("php://input"),
true
);

$id =
$dados["id"];

$checkin =
$dados["checkin"];

$checkout =
$dados["checkout"];

$sql =

"UPDATE reservas

SET

checkin='$checkin',

checkout='$checkout'

WHERE id='$id'";

if($conexao->query($sql)){

    echo json_encode([

        "sucesso"=>true,

        "mensagem"=>"Reserva alterada com sucesso!"

    ]);

}else{

    echo json_encode([

        "sucesso"=>false,

        "mensagem"=>"Erro ao alterar reserva."

    ]);

}

?>