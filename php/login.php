<?php

header("Content-Type: application/json");

require "conexao.php";

$dados =
json_decode(
    file_get_contents("php://input"),
    true
);

$email =
$dados["email"];

$senha =
$dados["senha"];

$sql =
"SELECT *
FROM usuarios
WHERE email='$email'
AND senha='$senha'";

$resultado =
$conexao->query($sql);

if($resultado->num_rows > 0){

    $usuario = $resultado->fetch_assoc();

    echo json_encode([

        "sucesso" => true,
        "mensagem" => "Login realizado com sucesso",
        "id" => $usuario["id"]

    ]);

}
else{

    echo json_encode([

        "sucesso" => false,
        "mensagem" => "E-mail ou senha inválidos"

    ]);

}

?>