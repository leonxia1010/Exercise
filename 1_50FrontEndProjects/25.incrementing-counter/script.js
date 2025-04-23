const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerHTML = '0';

  function updateCounter() {
    const target = +counter.getAttribute('data-target');
    const currentValue = +counter.textContent;

    const increment = target / 200;

    if (currentValue < target) {
      counter.textContent = Math.ceil(currentValue + increment);
      setTimeout(updateCounter, 5);
    } else {
      counter.textContent = target;
    }
  }
  updateCounter();
});
