document
.getElementById("formCadastro")
.addEventListener(
    "submit",
    function(event){
        event.preventDefault();

        var dados = {
            nome:
            document
            .getElementById("nome")
            .value,

            email:
            document
            .getElementById("email")
            .value,

            senha:
            document
            .getElementById("senha")
            .value

        };

        fetch(
            "php/cadastro.php",
            {
                method:"POST",

                headers:{
                    "Content-Type":
                    "application/json"
                },

                body:
                JSON.stringify(dados)

            }
        )
        .then(function(resposta){
            return resposta.json();

        })
        .then(function(resultado){
            alert(
                resultado.mensagem
            );

        });

    }
);