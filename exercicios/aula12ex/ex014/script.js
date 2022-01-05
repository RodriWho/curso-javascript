function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${minuto}`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#a3a529'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#2e94c4'
    } else {
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#515154'
    }
}