var idCount = 1;

function addTodo() {
    var todoList = document.getElementById('todo-list');
    var inputValue = document.getElementById('todo-input');

    var todoItem = document.createElement('div');
    todoItem.setAttribute('id', `todo-${idCount}`);
    todoItem.setAttribute('class', 'todo-item');

    todoItem.innerHTML = `
        <p>${inputValue.value}</p> 
        <div>
            <button onclick="deleteTodo(${idCount})">Delete</button> 
            <button onclick="updateTodoPrompt(${idCount})">Update</button>
        </div>
    `;

    todoList.appendChild(todoItem);

    idCount += 1;
    inputValue.value = ''; // Clear the input field after adding
}

function deleteTodo(id) {
    var todoItem = document.getElementById(`todo-${id}`);
    todoItem.parentNode.removeChild(todoItem);
}

function updateTodoPrompt(id) {
    var newTodo = prompt("Update your todo:");
    if (newTodo) {
        updateTodo(id, newTodo);
    }
}

function updateTodo(id, newValue) {
    var todoItem = document.getElementById(`todo-${id}`);
    todoItem.innerHTML = `
        <p>${newValue}</p> 
        <div>
            <button onclick="deleteTodo(${id})">Delete</button> 
            <button onclick="updateTodoPrompt(${id})">Update</button>
        </div>
    `;
}
