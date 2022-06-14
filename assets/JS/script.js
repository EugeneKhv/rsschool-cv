let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu__burger');
let link = document.querySelector('.nav-burger');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

menu.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

