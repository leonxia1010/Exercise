const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');
const checkBoxes = document.querySelectorAll('.check');

checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener('change', (e) => {
    toDoTrick(e.target);
  });
});

function toDoTrick(changedItem) {
  if (good.checked && cheap.checked && fast.checked) {
    if (changedItem === good) {
      fast.checked = false;
    } else if (changedItem === cheap) {
      good.checked = false;
    } else if (changedItem === fase) {
      cheap.cheaked = false;
    }
  }
}
