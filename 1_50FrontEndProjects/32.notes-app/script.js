const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach((note) => {
    console.log(note);
    renderNote(note);
  });
}

addBtn.addEventListener('click', () => {
  renderNote();
});

function renderNote(text = '') {
  const note = document.createElement('div');
  note.className = 'note';

  note.innerHTML = `
  <div class = "tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>
  <div class="main ${text ? '' : 'hidden'}"></div> 
  <textarea class="${text ? 'hidden' : ''}"></textarea>
  `;

  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const noteArea = note.querySelector('.main');
  const textAreaEl = note.querySelector('textarea');

  if (text) {
    noteArea.innerText = text;
    textAreaEl.value = noteArea.innerText;
  }

  editBtn.addEventListener('click', () => {
    noteArea.classList.toggle('hidden');
    textAreaEl.classList.toggle('hidden');
  });

  deleteBtn.addEventListener('click', () => {
    note.remove();
    updateLS();
  });

  textAreaEl.addEventListener('input', (e) => {
    const { value } = e.target;
    noteArea.innerText = value;
    updateLS();
  });
  document.body.appendChild(note);
}

function updateLS() {
  const textAreaEls = document.querySelectorAll('textarea');
  const textToSave = [];
  textAreaEls.forEach((textAreaEl) => {
    console.log(textAreaEl.value);
    textToSave.push(textAreaEl.value);
  });

  localStorage.setItem('notes', JSON.stringify(textToSave));
}
