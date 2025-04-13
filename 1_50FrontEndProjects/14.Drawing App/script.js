// 画笔的逻辑就是目标点画个圈，再和上一个点连起来

const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const canvas = document.getElementById('canvas');
const colorEl = document.getElementById('color');
const clear = document.querySelector('.clear');
const sizeEl = document.querySelector('.size');
const ctx = canvas.getContext('2d');

let size = 10;
let x1;
let y1;
let isPressed = false;

colorEl.value = '#312890';
let color = colorEl.value;

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x1 = e.offsetX;
  y1 = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
  x2 = e.offsetX;
  y2 = e.offsetY;

  if (isPressed === true) {
    drawCircle(x2, y2);
    drawLine(x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
  }
});

canvas.addEventListener('mouseup', () => {
  isPressed = false;

  x1 = undefined;
  y1 = undefined;
});

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

increase.addEventListener('click', () => {
  size += 5;
  if (size > 30) {
    size = 30;
  }
  sizeEl.textContent = size;
});

decrease.addEventListener('click', () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  sizeEl.textContent = size;
});

colorEl.addEventListener('change', (e) => {
  color = colorEl.value;
});

function drawCircle(x1, y1) {
  ctx.beginPath();
  ctx.arc(x1, y1, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
