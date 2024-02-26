const header = document.querySelector('header');
function scrollOnHeader() {
    if (scrollY > 0) { 
        header.classList.add('ativo');
    } else {
        header.classList.remove('ativo');
    }
} 
window.addEventListener('scroll', scrollOnHeader);