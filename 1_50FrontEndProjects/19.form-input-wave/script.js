const labels = document.querySelectorAll('label');
console.log(labels.length);
labels.forEach((label) => {
  console.log(label.innerHTML);
  label.innerHTML = label.textContent
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
    )
    .join('');
});
