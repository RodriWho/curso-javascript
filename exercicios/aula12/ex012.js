var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hora`)
if(hora < 6) {
    console.log(`Madrugada!`)
} else if (hora < 12) {
    console.log(`Dia!`)
} else if (hora < 18){
    console.log(`Tarde!`)
} else {
    console.log(`Noite!`)
}