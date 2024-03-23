const headerMenu = document.querySelector('.header__menu');
const toggleMenuBtn = document.querySelector('.header__toggle-menu');

toggleMenuBtn.addEventListener('click', () => {
    headerMenu.classList.toggle('show');
});