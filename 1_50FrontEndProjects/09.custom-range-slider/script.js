const numberEl = document.getElementById('value');
const rangeEl = document.getElementById('range');

rangeEl.addEventListener('input', (e) => {
  const value = e.target.value;

  const x = scale(value, 25, 350, 0.01);
  console.log(x);
  numberEl.style.left = `${x}px`;
  numberEl.innerText = value;
});

const scale = (value, thumbWidth, barWidth, ratio) => {
  return (barWidth - thumbWidth) * ratio * value + 0.5 * thumbWidth;
};
