function palindromo(){

    frase = window.document.querySelector('input#txtcaixa').value.toUpperCase().trim()

    res = window.document.getElementById('res')

    separado = frase.split(' ')

    junto = separado.join('')

    inverso = ''

    if(frase.length === 0){
        res.innerHTML = 'Caixa vazia, digita algo mlk'
        return
    }

    for(var i = junto.length-1; i>=0; i--){
        inverso+=junto[i]
    }

    if(junto === inverso){
        res.innerHTML = 'Resposta: Temos um palíndromo'
    }

    else{
        res.innerHTML = 'Resposta: <strong>NÃO</strong> é um palíndromo'
    }

}