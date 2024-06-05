c = 0

function botao_dark (){

    secao = window.document.getElementById('secao')

    h1 = window.document.querySelector('body section h1')

    p = window.document.querySelector('body section p');

    botao = window.document.querySelector('body section div button')
    

    if(c==0){
    document.body.style.backgroundColor = 'black';

    secao.style.backgroundColor = 'rgb(105, 105, 105)'

    botao.style.backgroundImage = "url('../ex014/imagens/botao_light.png')";

    h1.style.color = 'white'
    h1.innerHTML = 'Dark Mode'

    p.style.color = 'white';
    p.innerHTML = 'Você está no Dark Mode'

    c++
    }

    else{
    document.body.style.backgroundColor = 'rgb(0, 191, 255)';

    secao.style.backgroundColor = 'white'

    botao.style.backgroundImage = "url('../ex014/imagens/botao_dark.webp')";

    h1.style.color = 'black'
    h1.innerHTML = 'Light Mode'

    p.style.color = 'black';
    p.innerHTML = 'Você está no Light Mode'

    c=0
    }

    
}