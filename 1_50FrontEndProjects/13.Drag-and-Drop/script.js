const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach((empty) => {
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', drop);
});

function dragStart() {
  this.classList.add('hold');
  setTimeout(() => {
    this.className = 'invisible';
  }, 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragOver(e) {
  e.preventDefault();
}

function drop() {
  this.className = 'empty';
  this.appendChild(fill);
}
