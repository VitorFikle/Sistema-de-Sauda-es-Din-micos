function formatarNumero(n) { //função que conserta os números
    if (n < 10) { //se o número for menor que 10
        return '0' + n //retorna o zero à esquerda do número
    }
    return n //retorna o número para a função se o número não for menor que 10
}

const saudacoes = document.querySelector("#saudacoes")

function gerarMensagem(hora, horarioFormatado) { //função que faz a comparação dos horários.
    if (hora >= 6 && hora < 12) { //manhã
        saudacoes.textContent = `Bom dia, Vitor! Agora são ${horarioFormatado} da manhã. \nTenha um bom dia ☀️ !`
    }

    else if (hora >= 12 && hora < 18) { //tarde
        saudacoes.textContent = `Boa tarde, Vitor! Agora são ${horarioFormatado} da tarde. \nEspero que esteja tendo um bom dia 🌻 !`
    }

    else if (hora >= 18 && hora < 23) { //noite
        saudacoes.textContent = `Boa noite, Vitor! Agora são ${horarioFormatado} da noite. \nComo foi seu dia? É hora de descansar 🛏️ !`
    }

    else if (hora >= 0 && hora < 6) { //madrugada
        saudacoes.textContent = `Boa noite, Vitor! Agora são ${horarioFormatado}. \nO que faz acordado a essa hora? Já passou da hora de dormir, hein 🥱 !`
    }
}

function atualizarRelogio() {
    const mundo = new Date() //pega a "API" da data do mundo

    let hora = mundo.getHours() //pega a hora
    let minuto = mundo.getMinutes() //pega os minutos
    let segundos = mundo.getSeconds() //pega os segundos

    horaFormatada = formatarNumero(hora) //adicionar o zero à esquerda em horas menores que 10
    minutoFormatada = formatarNumero(minuto) //conserta os minutos
    segundosFormatada = formatarNumero(segundos) //conserta os segundos

    let horarioFormatado = `${horaFormatada}:${minutoFormatada}:${segundosFormatada}` //junta tudo

    gerarMensagem(hora, horarioFormatado)
}

setInterval(() => { atualizarRelogio() }, 1000);
//a cada 1 segundo, ele irá executar essa função, forçando a atualizar os dados
