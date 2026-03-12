const barra = document.querySelector("#progress") //seleciona a barra que será pintada

const fundo = document.querySelector("#fundo") //seleciona o fundo que troca cor

const cores = [ //seleciona quais cores eu quero pintar o fundo
    [255, 223, 148], // #FFDF94 // cor da manhã
    [255, 119, 0],   // #FF7700 // tarde
    [0, 44, 178]     // #002CB2 // noite/madrugada
]

const porcentagem = document.querySelector("#porcentagem") //seleciona o lugar da porcentagem

const bar = document.querySelector("#bar")


function progressoDia() { //função que calcula os segundos do dia
    const agora = new Date()

    const segundosAgora =
        agora.getHours() * 3600 + //calcula o valor das horas
        agora.getMinutes() * 60 + //calcula o valor dos minutos
        agora.getSeconds() //adiciona todos esses cálculos ao valor dos segundos

    const totalSegundos = 86400 //define qual o limite que os segundos pode bater

    return segundosAgora / totalSegundos //isso aqui faz com que a função tenha sentido
    //ele retorna a razão entre segundosAgora e totalSegundos, ou seja, quando a divisão
    //for igual a 1, significa que o dia ficou 100% completo. 
}


function atualizarBarra() { //função que irá atualizar a barra constantemente
    const progresso = progressoDia() //faz o progresso

    const barra = document.querySelector("#progress") //seleciona a barra

    barra.style.width = (progresso * 100) + "%" //ele altera corretamente a matemática
    //para o CSS, e o % é a unidade de medida que o CSS lê
}

function porcentagemBarra(progressPercent) { //função que irá mostrar a porcentagem do dia completo
    const progresso = progressoDia()
    let porcentagem = progresso * 100 //cálculo da porcentagem que será exibida abaixo da 
    // barra de progresso
    progressPercent.textContent = `${porcentagem.toFixed(0)}%` //exibição e formatação
    //da porcentagem que aparece

}


function misturador(cor1, cor2, t) {//função que mistura as cores num gradiente
    const r = cor1[0] + (cor2[0] - cor1[0]) * t //etapa 1
    const g = cor1[1] + (cor2[1] - cor1[1]) * t //etapa 2
    const b = cor1[2] + (cor2[2] - cor1[2]) * t //etapa 3

    return [r, g, b]
    //t vai de 0 a 1
}

function atualizarTexto(r, g, b) { //checa se o fundo é escuro ou claro
    const brilho = (r * 299 + g * 587 + b * 114) / 1000 //calculo para saber se é escuro ou claro

    if (brilho > 128) { //se o brilho for maior que 128 (na taxa gama, se eu n me engano)
        return "black" //retorna preto
    }
    else { //se não, retorna branco
        return "white"
    }

}

function atualizarFundo() { //atualiza fundo
    const progresso = progressoDia() //calculo do dia

    //temos 2 trechos: 
    //amarelo -> laranja = trecho 1
    //laranja -> azul = trecho 1

    const totalSegmentos = cores.length - 1 //3 - 1 = 2 trechos
    const posicao = progresso * totalSegmentos //onde estamos no trecho? 0.25 * 2 vira a posição que estamos
    //então ele sempre marcará a cor certa do dia, mesmo que a barra estivesse bugada, por exemplo
    //aqui é o meio do primeiro trecho, no caso

    const indice = Math.floor(posicao) //corta o decimal, ou seja, o 0,5 vira 0
    const t = posicao - indice //se a posição é 0.5 e indice 0, então t = 0.5, ou seja, 50% do caminho do
    //trecho, entre amarelo e laranja

    //t = 0 -> cor 1
    //t = 0.5 -> mistura das duas
    //t = 1 -> cor 2
    //tipo na escolinha quando misturávamos as tintas com guache

    const corAtual = misturador( //magica acontecendo
        cores[indice],
        cores[indice + 1] || cores[indice],
        t
    )

    const r = corAtual[0] //transforma num texto que o CSS pode ler
    const g = corAtual[1] //transforma num texto que o CSS pode ler
    const b = corAtual[2] //transforma num texto que o CSS pode ler

    fundo.style.backgroundColor = `rgb(${r}, ${g}, ${b})` //altera a cor do fundo conforme a cor 
    //atual da barra na linguagem do CSS

    const corTexto = atualizarTexto(r, g, b) //executa a função que atualiza a cor do texto

    saudacoes.style.color = corTexto //troca a cor do texto da saudação
    porcentagem.style.color = corTexto //troca a cor do texto da porcentagem

}

setInterval(() => { //seta um intervalo de execução
    atualizarBarra() //executa o cálculo da porcentagem
    porcentagemBarra(porcentagem) //exibe a porcentagem no lugar ideal
    atualizarFundo() //atualiza o fundo
    bar.setAttribute("aria-valuenow", porcentagem)
}, 1000) //intervalo em milissegundos

