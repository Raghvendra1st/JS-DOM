// 1. Select Elements
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// 2. Function to add a task
function addTask() {
    const taskValue = input.value;

    if (taskValue === '') {
        alert("Please enter a task!");
        return;
    }

    // Create the 'li' element
    const li = document.createElement('li');
    
    // Set the inner HTML of the li
    li.innerHTML = `
        <span class="task-text">${taskValue}</span>
        <button class="delete-btn">X</button>
    `;

    // 3. Add Event Listeners to the new elements
    
    // Toggle completion on click
    li.querySelector('.task-text').addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    // Delete task on click
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // 4. Append to the list and clear input
    taskList.appendChild(li);
    input.value = '';
}

// Listen for button click
addBtn.addEventListener('click', addTask);

// Listen for "Enter" key
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});