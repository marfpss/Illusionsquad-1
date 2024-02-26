const header = document.querySelector('header');

function scrollOnHeader(){
    header.classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', scrollOnHeader)

var controller = new ScrollMagic.Controller();
