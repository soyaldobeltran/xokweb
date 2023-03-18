const menuButtom = document.querySelector('.menu');
const navMenu = document.querySelector('.mobile-menu')
const closeButtom = document.querySelector('.menu-close')

menuButtom.addEventListener('click', () => {
    navMenu.classList.toggle('active')
})
closeButtom.addEventListener('click', () => {
    navMenu.classList.remove('active')
})