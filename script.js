const cashRegister = document.querySelector('.cash-register');
const drawer = document.querySelector('.cash-register .drawer');

cashRegister.addEventListener('click', () => {
    drawer.classList.toggle('open');
});