// find 
const taskInpt = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-List');

// input text 
function addtask() {
    // store user value 
    const taskText = taskInpt.value.trim();
    // typed nothing 
    if (!taskText) return;

    // create a new mempry list to store 
    const li = document.createElement('li');
    // for store user value in list
    const span = document.createElement('span');
    span.textContent = taskText;

    // make delete button
    const deltbtn = document.createElement('button');
    deltbtn.textContent = '×';

    // assemble together
    li.appendChild(span);
    li.appendChild(deltbtn);
    taskList.appendChild(li);

    // empty for next input

    taskInpt.value = '';

}
 addBtn.addEventListener('click' ,addtask);

 taskInpt.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        addtask();
    }
 })
