const smallCups = document.querySelectorAll('.cup-small');
const percentage = document.getElementById('percentage');
const litersEl = document.getElementById('liters');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => {
    highlightCups(idx);
  });
});

console.log(smallCups.length);

function highlightCups(idx) {
  if (
    idx === smallCups.length - 1 &&
    smallCups[idx].classList.contains('full')
  ) {
    idx--;
  } else if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    litersEl.textContent = '2L';
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 100}%`;
    percentage.textContent = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    litersEl.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
