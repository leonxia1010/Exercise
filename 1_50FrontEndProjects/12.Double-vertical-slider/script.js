const container = document.querySelector('.slide-container');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');

let activeSlideIndex = 0;
const slidesLength = rightSlider.querySelectorAll('div').length;

leftSlider.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
  changeSlide('up');
});

downBtn.addEventListener('click', () => {
  changeSlide('down');
});

const changeSlide = (direction) => {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  const sliderHeight = container.clientHeight;

  leftSlider.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
  rightSlider.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
};
