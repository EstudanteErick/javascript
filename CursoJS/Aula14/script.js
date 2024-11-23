function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano =  document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.querySelectorAll('input[type="radio"]');
        var idade = ano - Number(fano.value)

        var sexualidade = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            sexualidade = 'Homem'

            if (idade >= 0 && idade < 11) {
                //Criança 
                img.setAttribute('src','criança.png')
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src','adolescente.png')
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src','adulto.png')
                } else {
                    //Idoso
                    img.setAttribute('src','idoso.png')
                }
                

        }
       else if (fsex[1].checked){
        sexualidade = 'Mulher'

        if (idade >= 0 && idade < 11) {
            //Criança 
            img.setAttribute('src','criança-menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','adolescente-menina.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','adulto-mulher.png')
            } else {
                //Idoso
                img.setAttribute('src','idoso-mulher.png')
            }
       }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexualidade} com ${idade} anos`
        res.appendChild(img)
    }
}
    

    
