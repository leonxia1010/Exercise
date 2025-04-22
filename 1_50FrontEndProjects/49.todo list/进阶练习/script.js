const taskForm = document.getElementById('task-form');
const openTaskFormBtn = document.getElementById('open-task-form-btn');
const closeBtn = document.getElementById('close-task-form-btn');
const cancelBtn = document.getElementById('cancel-btn');
const discardBtn = document.getElementById('discard-btn');
const title = document.getElementById('title-input');
const date = document.getElementById('date-input');
const description = document.getElementById('description-input');
const dialog = document.getElementById('confirm-close-dialog');
const tasksContainer = document.getElementById('tasks-container');
const todoLists = JSON.parse(localStorage.getItem('todo')) || [];
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn');
let editingTask = {};
let isEditing = false;

// initialize
if (todoLists.length) {
  todoLists.forEach((task) => {
    renderTaskContainer(task);
  });
}

// CRUD task
function removeSpecialChars(string) {
  return string.replace(/[^A-Za-z0-9\-\s]/g, '');
}

function addOrUpdateTask() {
  let taskToBeAddedOrEdited = {
    id: '',
    title: title.value,
    date: date.value,
    description: description.value,
  };
  //   edit
  if (isEditing) {
    const targetTaskIdx = todoLists.findIndex((task) => {
      return task.id === editingTask.id;
    });
    taskToBeAddedOrEdited.id = todoLists[targetTaskIdx].id;
    todoLists[targetTaskIdx] = taskToBeAddedOrEdited;
  } else {
    //   add
    taskToBeAddedOrEdited.id = `${removeSpecialChars(title.value.trim())
      .split(' ')
      .join('-')}-${Date.now()}`;
    todoLists.push(taskToBeAddedOrEdited);
  }

  localStorage.setItem('todo', JSON.stringify(todoLists));
  renderTaskContainer(taskToBeAddedOrEdited);
  reset();
}

// DOM
function renderTaskContainer(task) {
  const { id, title, date, description } = task;
  let taskEl = document.getElementById(id);
  if (!taskEl) {
    taskEl = document.createElement('div');
    taskEl.setAttribute('class', 'task');
    taskEl.id = id;
    tasksContainer.appendChild(taskEl);
  }
  taskEl.innerHTML = `
         <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button onclick="editTask(this)" type="button" class="btn">Edit</button>
          <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
        `;
}

function deleteTask(deleteBtn) {
  const deleteTaskIdx = todoLists.findIndex((task) => {
    return task.id === deleteBtn.parentElement.id;
  });
  todoLists.splice(deleteTaskIdx, 1);
  localStorage.setItem('todo', JSON.stringify(todoLists));
  deleteBtn.parentElement.remove();
  reset();
}

function editTask(editBtn) {
  editingTask = todoLists.find((task) => {
    return task.id === editBtn.parentElement.id;
  });
  taskForm.classList.remove('hidden');
  addOrUpdateTaskBtn.textContent = 'Update Task';
  title.value = editingTask.title;
  date.value = editingTask.date;
  description.value = editingTask.description;
  isEditing = true;
}

function reset() {
  title.value = '';
  date.value = '';
  description.value = '';
  addOrUpdateTaskBtn.textContent = 'Add Task';
  taskForm.classList.add('hidden');
  editingTask = {};
  isEditing = false;
}

// eventListener
openTaskFormBtn.addEventListener('click', () =>
  taskForm.classList.remove('hidden')
);

closeBtn.addEventListener('click', () => {
  const formValue = title.value || date.value || description.value;
  const updatedFormValue =
    editingTask.title !== title.value ||
    editingTask.date !== date.value ||
    editingTask.description !== description.value;
  if (formValue && updatedFormValue) {
    dialog.showModal();
  } else {
    reset();
  }
});

cancelBtn.addEventListener('click', () => {
  dialog.close();
});

discardBtn.addEventListener('click', reset);

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addOrUpdateTask();
  reset();
});
