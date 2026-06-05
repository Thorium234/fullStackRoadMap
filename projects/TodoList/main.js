// Selectors

const toDoInput = document.querySelector(".todo-input");
const toDoBtn = document.querySelector(".todo-btn");
const toDoList = document.querySelector(".todo-list");

// Event Listeners

toDoBtn.addEventListener("click", addToDo);
toDoList.addEventListener("click", deletecheck);
document.addEventListener("DOMContentLoaded", getTodos);

// Functions;
function addToDo(event) {
  event.preventDefault();
  const todoText = toDoInput.value.trim();
  if (todoText === "") {
    alert("You must write something!");
    return;
  }
  const todoObject = { text: todoText, completed: false };
  savelocal(todoObject);
  renderToDo(todoObject);
  toDoInput.value = "";
}
function savelocal(todoObj) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todoObj);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    renderToDo(todo);
  });
}
function renderToDo(todo) {
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");
  const newToDo = document.createElement("li");
  newToDo.innerText = todo.text;
  newToDo.classList.add("todo-item");
  toDoDiv.appendChild(newToDo);
  const checked = document.createElement("button");
  checked.innerText = "Check";
  checked.classList.add("check-btn");
  toDoDiv.appendChild(checked);
  const deleted = document.createElement("button");
  deleted.innerText = "Delete";
  deleted.classList.add("delete-btn");
  toDoDiv.appendChild(deleted);
  if (todo.completed) {
    toDoDiv.classList.add("completed");
  }
  toDoList.appendChild(toDoDiv);
}
function updateLocalTodos(todoItem) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // FIXED: Added [0] to target the <li> text element correctly
  const todoIndex = todos.findIndex(
    (item) => item.text === todoItem.children[0].innerText
  );
  if (todoIndex !== -1) {
    todos[todoIndex].completed = todoItem.classList.contains("completed");
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}
function deletecheck(event) {
  const item = event.target.closest("button");
  if (!item) return;

  if (item.classList.contains("delete-btn")) {
    const todoItem = item.parentElement;
    removeLocalTodos(todoItem);
    
    // FIXED: Directly removes item if no CSS transition is running
    todoItem.remove();
  }
  if (item.classList.contains("check-btn")) {
    const todoItem = item.parentElement;
    todoItem.classList.toggle("completed");
    updateLocalTodos(todoItem);
  }
}
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // FIXED: Added [0] to target the <li> text element correctly
  const todoIndex = todos.findIndex(
    (item) => item.text === todo.children[0].innerText
  );
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

