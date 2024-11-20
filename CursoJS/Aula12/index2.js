var agora = new Date()
var hora = agora.getHours()
console.log (`Agora são exatamente ${hora}`)
if (hora < 12) {
    console.log ("Bom Dia!")
}
else if (hora <= 17) {
    console.log ("Boa tarde!")
}
else {
    console.log ("Boa Noite!")
}