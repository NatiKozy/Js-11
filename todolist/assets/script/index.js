const taskInput = document.querySelector('#taskInput');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

function createTask() {
    const listItem = document.createElement('li');
    listItem.classList.add('listElem');
    listItem.textContent = taskInput.value;
    list.append(listItem);
    taskInput.value = "";
}

button.addEventListener('click', createTask);

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter")
    createTask()
})

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('lined');
        event.target.classList.toggle('listElem');
    }
});


