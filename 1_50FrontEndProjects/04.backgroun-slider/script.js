const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const imgs = document.querySelectorAll('.slider');
const body = document.body;
let idx = 0;

function setBgImg() {
  body.style.backgroundImage = imgs[idx].style.backgroundImage;
}

setBgImg();

function setActiveSlide() {
  imgs.forEach((img) => {
    img.classList.remove('active');
  });
  imgs[idx].classList.add('active');
}

leftBtn.addEventListener('click', () => {
  idx--;
  if (idx < 0) {
    idx = imgs.length - 1;
  }

  setActiveSlide();
  setBgImg();
});

rightBtn.addEventListener('click', () => {
  idx++;
  if (idx > imgs.length - 1) {
    idx = 0;
  }

  setActiveSlide();
  setBgImg();
});
