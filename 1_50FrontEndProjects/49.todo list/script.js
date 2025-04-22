const enterInput = document.getElementById('input-text');
const inputText = document.getElementById('input-bar');
const todoList = document.getElementById('todo-list');
const todoStorage = JSON.parse(localStorage.getItem('todoList')) || [];

/* const todoStorage = [
  { todo: 'dasdsa', completed: true },
  { todo: 'jiojio', completed: true },
]; */

if (todoStorage) {
  todoStorage.forEach((todo) => {
    addTodo(todo);
  });
}

enterInput.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = '';

  if (todo) {
    todoText = todo.todo;
  } else {
    todoText = inputText.value;
  }

  const todoEl = document.createElement('li');
  todoEl.innerText = todoText;
  todoList.appendChild(todoEl);

  if (todo && todo.completed) {
    todoEl.classList.add('complete');
  }

  inputText.value = '';

  todoEventListener(todoEl);

  updateLs();
}

function todoEventListener(todoEl) {
  todoEl.addEventListener('click', () => {
    todoEl.classList.toggle('complete');
    updateLs();
  });

  todoEl.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    todoEl.remove();
    updateLs();
  });
}

function updateLs() {
  const todoEls = document.querySelectorAll('li');
  let currentStorage = [];
  todoEls.forEach((todo) => {
    currentStorage.push({
      todo: todo.innerText,
      completed: todo.classList.contains('complete'),
    });
  });

  localStorage.setItem('todoList', JSON.stringify(currentStorage));
}
