
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskValue = taskInput.value;

    if (taskValue === '') {
        alert("Please enter a task!");
        return;
    }

    
    const li = document.createElement('li');
    
    
    li.innerHTML = `
        <span class="task-text">${taskValue}</span>
        <button class="delete-btn">X</button>
    `;

    
    li.querySelector('.task-text').addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    
    taskList.appendChild(li);

    
    taskInput.value = '';
}


addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});