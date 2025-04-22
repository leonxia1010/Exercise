// .square
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const squareAmount = 500;
const container = document.getElementById('container');

const generateSquares = (amount) => {
  for (let i = 1; i <= amount; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);
    square.addEventListener('mouseover', (e) => addColor(e.currentTarget));
    square.addEventListener('mouseleave', (e) => removeColor(e.currentTarget));
  }
};

const addColor = (element) => {
  const color = generateColor(colors);
  console.log(element.style.backgroundColor);
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
};

const generateColor = (colorsArr) => {
  const color = colors[Math.floor(Math.random() * colorsArr.length)];
  return color;
};

generateSquares(squareAmount);
