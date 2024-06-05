c = 0

function clicou(){
    imagem = window.document.getElementById('imagem')
    mensagem = window.document.getElementById('mensagem')


    if(c==0){
        imagem.src = 'imagens/balao300.webp'
        mensagem.innerHTML = `To só vendo.`
        c++
    }

    else if(c==1){
        imagem.src = 'imagens/balao400.webp'
        mensagem.innerHTML = `Jae meno, cabô a graça, já pode parar.`
        c++
    }

    else if(c==2){
        imagem.src = 'imagens/balao500.webp'
        mensagem.innerHTML = `PARA MENO, FALANDO SÉRIO PÔ, VAI ESTOURAR!!`
        c++
    }

    else if(c==3){
        imagem.src = 'imagens/balao600.webp'
        mensagem.innerHTML = `PARAAAAAAAAAAAADSADASFSDFGEWDFXWCFEWXFW`
        c++
    }

    else{
        mensagem.innerHTML = ``
        imagem.src = 'imagens/balaofinal2.webp'
    }

}

