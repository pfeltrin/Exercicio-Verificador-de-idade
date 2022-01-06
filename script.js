function verificar() {   
    var nome = document.querySelector('textname') 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var nome = document.getElementById('textname')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if(idade >=0 && idade < 18){
            //criança
            img.setAttribute('src','homem1.png')
        } else if(idade < 50){
            //adulto
            img.setAttribute('src','homem2.png')
        }else{
            //idoso
            img.setAttribute('src','homem3.png')
        } 
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade >=0 && idade < 18){
            //criança
            img.setAttribute('src','mulher1.png')
        } else if(idade < 50){
            //adulta
            img.setAttribute('src','mulher2.png')
        }else{
            //idosa
            img.setAttribute('src','mulher3.png')
    }
}
    
    res.innerHTML = `Olá ${nome.value} você é ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}