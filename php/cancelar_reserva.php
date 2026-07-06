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

$sql =
"DELETE FROM reservas
WHERE id='$id'";

if($conexao->query($sql)){

    echo json_encode([

        "sucesso" => true,

        "mensagem" =>
        "Reserva cancelada com sucesso!"

    ]);

}
else{

    echo json_encode([

        "sucesso" => false,

        "mensagem" =>
        "Erro ao cancelar reserva."

    ]);

}

?>