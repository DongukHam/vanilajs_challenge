const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input:first-child");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodos(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDos => toDos.id !== parseInt(li.id));
    saveTodos();
}


function addTodos(newtodo) {
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    span.innerHTML = newtodo.text;
    const button = document.createElement("button");
    button.innerHTML = "X";
    button.addEventListener("click", deleteTodos);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function handletodoSubmit(event){
    event.preventDefault();
    const newtodo = todoInput.value;
    todoInput.value = "";
    // initialize the value of todoInput
    const newTodoObj = {
        text:newtodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    addTodos(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handletodoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(addTodos);
}
