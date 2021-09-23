// ADULTO
// Carne por pessoa = 600 g -> >6h 800
// Cerveja por pessoa = 1200 mL -> >6h 2000
// Refrigerante = 1000 mL -> >6h 2000
// Agua = 1000 mL -> >6h 2000

// CRIANÇAS
// Crianças = metade de um adulto | não bebe cerveja

var inputAdultos = document.querySelector("#inputAdultos")
var inputCriancas = document.querySelector("#inputCriancas")
var inputDuracao = document.querySelector("#inputDuracao")
var btnCalc = document.querySelector("#btnCalc")
var resultado = document.querySelector("#resultado")
var tituloResultados = document.querySelector("#tituloResultados")
var lista = document.querySelector("#lista")

btnCalc.setAttribute('onclick', 'calcular()')

var itens = []

function carne(duracao){
    if (duracao >= 6){
        return 2000
    } else {
        return 100
    }
}

function cerveja(duracao){
    if (duracao >= 6){
        return 1200
    } else {
        return 2000
    }
}

function refri(duracao){
    if (duracao >= 6){
        return 1000
    } else {
        return 2000
    }
}

function agua(duracao){
    if (duracao >= 6){
        return 1000
    } else {
        return 2000
    }
}


function calcular(){

    tituloResultados.innerHTML = " "
    resultado.innerHTML = " "

    var duracao = inputDuracao.value
    var containerResult = document.querySelector("#containerResult")

    if (inputAdultos.value == 0){
        containerResult.style.backgroundColor = "#FBC638"
        alert("Insira a quantidade de adultos presentes no Churrasco")
    } else if (inputDuracao.value == 0){
        containerResult.style.backgroundColor = "#FBC638"
        alert("Insira a duração do Churrasco")   
    } else {
        var qtdCarne = (inputAdultos.value * carne(duracao)) + inputCriancas.value * (carne(duracao) / 2)
        var qtdCerveja = inputAdultos.value * cerveja(duracao)
        var qtdRefri = (inputAdultos.value * refri(duracao)) + inputCriancas.value * (refri(duracao) / 2)
        var qtdAgua = (inputAdultos.value * agua(duracao)) + inputCriancas.value * (agua(duracao) / 2)

        containerResult.style.backgroundColor = "rgba(247, 90, 23, 0.3)"
        tituloResultados.innerHTML = 'Lista de Compras:'
        resultado.innerHTML += `<p>${Math.ceil(qtdCarne / 1000)} kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdCerveja / 355)} latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdRefri / 2000)} garrafas (2 L) de Refrigerante</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdAgua / 2000)} garrafas (2 L) de Água</p>`  
    }
}
