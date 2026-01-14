// 1. Initial State
let tasks = [
    { id: 1, name: "Fix CSS bugs", category: "Work" },
    { id: 2, name: "Buy Milk", category: "Personal" }
];

const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');
const filterInput = document.getElementById('filterInput');

// 2. Render Function (Modular & Reusable)
function renderTasks(data) {
    taskList.innerHTML = data.map(task => `
        <li class="task-item" data-id="${task.id}">
            <span><strong>[${task.category}]</strong> ${task.name}</span>
            <button class="delete-btn">Delete</button>
        </li>
    `).join('');
}

// 3. Add Task Logic
addBtn.addEventListener('click', () => {
    const name = document.getElementById('taskInput').value;
    const category = document.getElementById('categorySelect').value;

    if (name) {
        const newTask = { id: Date.now(), name, category };
        tasks.push(newTask);
        renderTasks(tasks); // Re-render the full list
        document.getElementById('taskInput').value = ''; // Clear input
    }
});

// 4. Filtering Logic (Real-time search)
filterInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = tasks.filter(t => t.name.toLowerCase().includes(searchTerm));
    renderTasks(filtered);
});

// 5. Event Delegation (Delete logic)
// Instead of adding a listener to every button, we listen to the parent <ul>
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const idToDelete = Number(e.target.parentElement.getAttribute('data-id'));
        tasks = tasks.filter(task => task.id !== idToDelete);
        renderTasks(tasks);
    }
});

// Initial Load
renderTasks(tasks);