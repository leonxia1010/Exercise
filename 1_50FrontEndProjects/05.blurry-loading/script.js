const blurry = document.querySelector('.blurry');
const count = document.getElementById('count');

const time = 30;
let load = 0;

const int = setInterval(loading, time);

function loading() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  blurry.style.filter = `blur(${scale(50, 100, load)}px)`;
  count.style.opacity = `${1 - load / 100}`;
  count.textContent = `${load}%`;
}

const scale = (max_value, max_load, current_value) => {
  return max_value - current_value / (max_load / max_value);
};
