let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('close');
    nav.classList.toggle('show');
});