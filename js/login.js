document
.getElementById("formLogin")
.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        var dados = {

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
            "php/login.php",
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

            alert(resultado.mensagem);

            if(resultado.sucesso){

                localStorage.setItem(
                    "id_usuario",
                    resultado.id
                );

                window.location.href =
                "reservas.html";

            }

        });

    }
);