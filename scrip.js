

const key = "cfaa66d8393d28daa280eb3edf4e42fb"

function ColocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name + " - " + dados.sys.country
    document.querySelector(".temp").innerHTML =Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function BuscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    ColocarDadosNaTela(dados)
    

}

function CliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    BuscarCidade(cidade)
}