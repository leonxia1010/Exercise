const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close');

const navBar = document.querySelector('.nav-bar');

menuBtn.addEventListener('click', () => navBar.classList.add('visible'));

closeBtn.addEventListener('click', () => navBar.classList.remove('visible'));
