const container = document.getElementById('imgs');
const imgs = container.getElementsByTagName('img');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let idx = 0;

const rotate = setInterval(rotateCarousel, 2000);

function rotateCarousel() {
  idx++;
  transformXImgs();
}

function transformXImgs() {
  if (idx === imgs.length) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgs.length - 1;
  }
  container.style.transform = `translateX(${idx * -500}px)`;
}

function resetInterval() {
  clearInterval(rotate);
  setInterval(rotateCarousel, 2000);
}

leftBtn.addEventListener('click', () => {
  idx--;
  transformXImgs();
  resetInterval();
});

rightBtn.addEventListener('click', () => {
  idx++;
  transformXImgs();
  resetInterval();
});
