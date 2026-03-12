function progressoDia() {
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

function atualizarBarra(){
    const progresso = progressoDia() //faz o progresso

    const barra = document.querySelector("#progresso") //seleciona a barra
    
    barra.style.width = (progresso * 100) + "%" //ele altera corretamente a matemática
    //para o CSS, e o % é a unidade de medida que o CSS lê
}
