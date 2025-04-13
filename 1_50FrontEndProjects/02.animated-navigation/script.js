const icon = document.querySelector('.icon');
const nav = document.getElementById('nav');

icon.addEventListener('click', () => {
  nav.classList.toggle('hide');
});
