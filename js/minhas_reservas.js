var idUsuario =
localStorage.getItem("id_usuario");

fetch(
    "php/listar_reservas.php?id_usuario=" +
    idUsuario
)

.then(function(resposta){

    return resposta.json();

})

.then(function(reservas){

    var lista =
    document.getElementById("listaReservas");

    lista.innerHTML = "";

    for(var i = 0; i < reservas.length; i++){

        lista.innerHTML +=

        "<div class='card'>" +

        "<h3>" +
        reservas[i].nome +
        "</h3>" +

        "<p>" +
        reservas[i].descricao +
        "</p>" +

        "<p><strong>Check-in:</strong> " +
        reservas[i].checkin +
        "</p>" +

        "<p><strong>Check-out:</strong> " +
        reservas[i].checkout +
        "</p>" +

        "<button class='botao' onclick='alterarReserva(" +
        reservas[i].id +
        ",\"" +
        reservas[i].checkin +
        "\",\"" +
        reservas[i].checkout +
        "\")'>Alterar Reserva</button>" +

        "<br><br>" +

        "<button class='botaoCancelar' onclick='cancelarReserva(" +
        reservas[i].id +
        ")'>Cancelar Reserva</button>" +

        "</div>";

    }

});

function alterarReserva(id, checkin, checkout){

    var form =
    document.getElementById("formAlterar");

    form.innerHTML =

    "<div class='card'>" +

    "<h2>Alterar Reserva</h2>" +

    "<label>Check-in</label><br>" +

    "<input type='date' id='novoCheckin' value='" +
    checkin +
    "'>" +

    "<br><br>" +

    "<label>Check-out</label><br>" +

    "<input type='date' id='novoCheckout' value='" +
    checkout +
    "'>" +

    "<br><br>" +

    "<button class='botao' onclick='salvarAlteracao(" +
    id +
    ")'>Salvar Alterações</button>" +

    "</div>";

}

function salvarAlteracao(id){

    var dados = {

        id:id,

        checkin:
        document
        .getElementById("novoCheckin")
        .value,

        checkout:
        document
        .getElementById("novoCheckout")
        .value

    };

    fetch(
        "php/alterar_reserva.php",
        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
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

        location.reload();

    });

}

function cancelarReserva(id){

    var confirmar =
    confirm("Deseja realmente cancelar esta reserva?");

    if(!confirmar){

        return;

    }

    fetch(
        "php/cancelar_reserva.php",
        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:
            JSON.stringify({

                id:id

            })

        }

    )

    .then(function(resposta){

        return resposta.json();

    })

    .then(function(resultado){

        alert(resultado.mensagem);

        location.reload();

    });

}