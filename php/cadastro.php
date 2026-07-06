<?php

header(
    "Content-Type: application/json"
);

require "conexao.php";

$dados =
json_decode(
    file_get_contents("php://input"),
    true
);

$nome =
$dados["nome"];

$email =
$dados["email"];

$senha =
$dados["senha"];

$sql =
"INSERT INTO usuarios
(nome,email,senha)
VALUES
('$nome','$email','$senha')";

if(
    $conexao->query($sql)
){

    echo json_encode([
        "sucesso" => true,
        "mensagem" =>
        "Cadastro realizado com sucesso"
    ]);

}
else{

    echo json_encode([
        "sucesso" => false,
        "mensagem" =>
        "Erro ao cadastrar"
    ]);

}