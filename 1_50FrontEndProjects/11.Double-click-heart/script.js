const container = document.getElementById('container');
const count = document.getElementById('count');
let clickTime = 0;
let countValue = 0;

// container.addEventListener('click', (e) => {
//   if (clickTime === 0) {
//     clickTime = new Date().getTime();
//   } else {
//     if (new Date().getTime() - clickTime < 800) {
//       createHeart(e);
//       clickTime = 0;
//     } else {
//       clickTime = new Date().getTime();
//     }
//   }
// });

container.addEventListener('dblclick', (e) => {
  const x = e.pageX;
  const y = e.pageY;

  const containerTop = e.target.offsetTop;
  const containerLeft = e.target.offsetLeft;

  const xInside = x - containerLeft;
  const yInside = y - containerTop;
  console.log(xInside, yInside);

  const heart = document.createElement('i');
  heart.classList.add('fa-solid');
  heart.classList.add('fa-heart');

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  container.appendChild(heart);

  countValue++;
  count.textContent = countValue;
  setTimeout(() => heart.remove(), 1000);
});
