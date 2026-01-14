
let tasks = [
    { id: 1, name: "Fix CSS bugs", category: "Work" },
    { id: 2, name: "Buy Milk", category: "Personal" }
];

const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');
const filterInput = document.getElementById('filterInput');

function renderTasks(data) {
    taskList.innerHTML = data.map(task => `
        <li class="task-item" data-id="${task.id}">
            <span><strong>[${task.category}]</strong> ${task.name}</span>
            <button class="delete-btn">Delete</button>
        </li>
    `).join('');
}


addBtn.addEventListener('click', () => {
    const name = document.getElementById('taskInput').value;
    const category = document.getElementById('categorySelect').value;

    if (name) {
        const newTask = { id: Date.now(), name, category };
        tasks.push(newTask);
        renderTasks(tasks); 
        document.getElementById('taskInput').value = ''; 
    }
});


filterInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = tasks.filter(t => t.name.toLowerCase().includes(searchTerm));
    renderTasks(filtered);
});



taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const idToDelete = Number(e.target.parentElement.getAttribute('data-id'));
        tasks = tasks.filter(task => task.id !== idToDelete);
        renderTasks(tasks);
    }
});

renderTasks(tasks);
