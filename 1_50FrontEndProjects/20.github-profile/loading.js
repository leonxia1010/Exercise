const loading = 'loading...';
const main = document.getElementById('main');
const loadingContainer = document.createElement('div');
let idx = 0;
export function createLoading() {
  idx = 1;
  const loadingContainer = document.createElement('div');
  loadingContainer.className = 'card loading';
  main.innerHTML = '';
  main.appendChild(loadingContainer);
  loadingAnimation(loadingContainer);
}

async function loadingAnimation(parentEl) {
  const text = loading.slice(0, idx);
  const result = text
    .split('')
    .map(
      (letter, index) =>
        `<span style="transition-delay: ${index * 50}ms">${letter}</span>`
    )
    .join('');
  parentEl.innerHTML = result;

  idx++;
  if (idx > loading.length) {
    await wait(100);
    parentEl.classList.add('active');
    await wait(700);
    parentEl.classList.remove('active');
    await wait(800);
    idx = 0;
  }

  setTimeout(() => {
    loadingAnimation(parentEl);
  }, 100);
}

export function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
