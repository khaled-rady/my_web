const list = document.getElementById('list');
const titleInput = document.getElementById('t');
const descInput = document.getElementById('d');
const prioritySelect = document.getElementById('p');
const body = document.getElementById('body');
const filters = document.getElementById('filter-area').querySelectorAll('button');

function makeTask(data) {
    const li = document.createElement('li');
    li.className = 'task ' + data.priority.toLowerCase();
    li.dataset.p = data.priority;

    if (data.done) {
        li.classList.add('done');
    }

    const details = document.createElement('div');
    details.innerHTML = `
        <h3 class="task-title" contenteditable="true">${data.title}</h3>
        <p class="task-desc" contenteditable="true">${data.description}</p>
    `;
    details.querySelector('.task-title').onblur = saveToLS;
    details.querySelector('.task-desc').onblur = saveToLS;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = data.done ? 'UNDO' : 'DONE';
    completeBtn.onclick = function() {
        li.classList.toggle('done');
        this.textContent = li.classList.contains('done') ? 'UNDO' : 'DONE';
        saveToLS();
    };
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.onclick = function() {
        if (confirm('ARE YOU REALLY SURE ABOUT THIS??')) {
            list.removeChild(li);
            saveToLS();
        }
    };

    li.appendChild(details);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    return li;
}

function saveToLS() {
    const tasks = [];
    list.querySelectorAll('.task').forEach(item => {
        tasks.push({
            title: item.querySelector('.task-title').textContent,
            description: item.querySelector('.task-desc').textContent,
            priority: item.dataset.p,
            done: item.classList.contains('done')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.getElementById('add').addEventListener('click', function() {
    const t = titleInput.value.trim();
    const d = descInput.value.trim();
    const p = prioritySelect.value;

    if (t === '') {
        alert('TITLE IS EMPTY!!!');
        return;
    }

    const taskData = { title: t, description: d, priority: p, done: false };
    const taskElement = makeTask(taskData);
    list.appendChild(taskElement);

    titleInput.value = '';
    descInput.value = '';
    saveToLS();
});

document.getElementById('toggle').addEventListener('click', function() {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        this.textContent = 'LIGHT/DARK';
    } else {
        this.textContent = 'DARK/LIGHT';
    }
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

filters.forEach(button => {
    button.addEventListener('click', function() {
        const filterPri = this.dataset.pri;

        list.querySelectorAll('.task').forEach(task => {
            const taskPri = task.dataset.p;
            
            if (filterPri === 'All' || taskPri === filterPri) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });
    });
});

window.onload = function() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        JSON.parse(savedTasks).forEach(task => {
            list.appendChild(makeTask(task));
        });
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        document.getElementById('toggle').textContent = 'LIGHT/DARK';
    }
};