const button = document.querySelector('.button');

button.addEventListener('click', (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonTop = this.EventTarget.offsetTop;
  const buttonLeft = this.EventTarget.offsetLeft;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.top = yInside;
  circle.style.left = xInside;

  this.appendChild(circle);
  setTimeout(circle.remove(), 500);
});
