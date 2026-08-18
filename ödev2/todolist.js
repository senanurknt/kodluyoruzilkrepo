const taskInput = document.getElementById("task");
const listDOM = document.getElementById("list");
const successToast = document.querySelector(".toast.success");
const errorToast = document.querySelector(".toast.error");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("todos") === null) {
    const existingListItems = listDOM.querySelectorAll("li");
    existingListItems.forEach((li) => {
      todos.push(li.textContent.trim());
      addCloseButton(li);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    listDOM.innerHTML = "";
    todos.forEach((todo) => renderTodo(todo));
  }
});

function newElement() {
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    showToast(errorToast);
    return;
  }

  renderTodo(taskValue);
  todos.push(taskValue);
  localStorage.setItem("todos", JSON.stringify(todos));

  showToast(successToast);
  taskInput.value = "";
}

function renderTodo(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;
  addCloseButton(li);
  listDOM.appendChild(li);
}

function addCloseButton(li) {
  const span = document.createElement("span");
  span.className = "close";
  span.innerHTML = "&times;";
  span.onclick = function () {
    const itemText = li.childNodes[0].nodeValue.trim();
    todos = todos.filter((t) => t !== itemText);
    localStorage.setItem("todos", JSON.stringify(todos));
    li.remove();
  };
  li.appendChild(span);

  li.onclick = function (e) {
    if (e.target.tagName !== "SPAN") {
      li.classList.toggle("checked");
    }
  };
}

function showToast(toastElement) {
  if (window.jQuery && $(toastElement).toast) {
    $(toastElement).toast("show");
  } else {
    toastElement.classList.remove("hide");
    toastElement.classList.add("show");
    setTimeout(() => {
      toastElement.classList.remove("show");
      toastElement.classList.add("hide");
    }, 3000);
  }
}