fetch("php/listar_quartos.php")

.then(function(resposta){

    return resposta.json();

})

.then(function(quartos){

    var lista =
    document.getElementById("listaQuartos");

    lista.innerHTML = "";

    for(var i = 0; i < quartos.length; i++){

        lista.innerHTML +=

        "<div class='card'>" +

        "<h3>" +
        quartos[i].nome +
        "</h3>" +

        "<p>" +
        quartos[i].descricao +
        "</p>" +

        "<p><strong>Capacidade:</strong> " +
        quartos[i].capacidade +
        " pessoas</p>" +

        "<p><strong>Preço:</strong> R$ " +
        quartos[i].preco +
        "</p>" +

        "<p><strong>Banheiro:</strong> " +
        quartos[i].banheiro +
        "</p>" +

        "<button class='botao' onclick='reservar(" +
        quartos[i].id +
        ")'>Reservar</button>" +

        "</div>";

    }

});

function reservar(id){

    var formulario =
    document.getElementById("formReserva");

    formulario.innerHTML =

    "<div class='card'>" +

    "<h2>Nova Reserva</h2>" +

    "<p><strong>Quarto escolhido:</strong> " +
    id +
    "</p>" +

    "<label>Check-in</label><br>" +

    "<input type='date' id='checkin'>" +

    "<br><br>" +

    "<label>Check-out</label><br>" +

    "<input type='date' id='checkout'>" +

    "<br><br>" +

    "<button class='botao' onclick='confirmarReserva(" +
    id +
    ")'>Confirmar Reserva</button>" +

    "</div>";

}

function confirmarReserva(id){

    var checkin =
    document
    .getElementById("checkin")
    .value;

    var checkout =
    document
    .getElementById("checkout")
    .value;

    if(checkin == "" || checkout == ""){

        alert("Preencha todas as datas.");

        return;

    }

    var dados = {

        id_usuario:
        localStorage.getItem("id_usuario"),

        id_quarto:
        id,

        checkin:
        checkin,

        checkout:
        checkout

    };

    fetch(
        "php/reservar.php",
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

    });

}