const mundo = new Date()
let hora = mundo.getHours()
let minuto = mundo.getMinutes()

function consertoMinuto() {
    if (minuto < 10) { minuto = '0' + minuto }
}
consertoMinuto()
let horarioFormatado = `${hora}:${minuto}`

function gerarMensagem(hora, horarioFormatado) {
    if (hora >= 6 && hora < 12) {
        console.log(`Bom dia, Vitor. Agora são ${horarioFormatado} da manhã. Tenha um bom dia ☀️ !`)
    }

    else if (hora >= 12 && hora < 18) {
        console.log(`Boa tarde, Vitor! Agora são ${horarioFormatado} da tarde. Espero que esteja tendo um bom dia 🌻 !`)
    }

    else if (hora >= 18 && hora < 23) {
        console.log(`Boa noite, Vitor. Agora são ${horarioFormatado} da noite. Como foi seu dia? É hora de descansar 🛏️ !`)
    }

    else if (hora >= 0 && hora < 6) {
        console.log(`Boa noite, Vitor. Agora são ${horarioFormatado}. O que faz acordado a essa hora? Já passou da hora de dormir, hein 🥱 !`)
    }
}

gerarMensagem(hora, horarioFormatado)