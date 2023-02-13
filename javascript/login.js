//Menu

const btnMobile = document.getElementById('btn-mobile'); //adicionando o id a uma constante

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()// consertando o erro de ativação da mesma função tanto com o click quanto c/ touch para que seja executado apenas uma vez.

    const nav = document.getElementById('nav')
    nav.classList.toggle('active') //toggle significa remova caso tenha acrescente caso nao tenha
    const active =nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expedent', 'true');

    if(active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu); //add um evento de click para a função com click.
btnMobile.addEventListener('touchstart ', toggleMenu);// add um evento de click para a função com touch.