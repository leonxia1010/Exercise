const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    toggle(button);
  });
});

function toggle(node) {
  const thisContainer = node.parentNode;

  thisContainer.classList.toggle('expand');
}
