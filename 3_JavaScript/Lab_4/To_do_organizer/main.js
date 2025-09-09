resetBackgroundColors();
const task_input = document.getElementById("task_name");
const addBtn = document.getElementById("add");
const task_table = document.getElementById("task_table");

task_input.addEventListener('focus', () => {
    addBtn.style.backgroundColor = "blue";
});

task_input.addEventListener('blur', () => {
    addBtn.style.backgroundColor = "grey";
});

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const task_name = task_input.value.trim();
    if(task_name){
        const task = document.createElement('tr');

        task.innerHTML = `
            <td><input type="checkbox" value="" class="done"></td>
            <td class="task">${task_name}</td>
            <td><button type="submit"><img src="assets/delete.webp" alt="Delete" class="delete"></button></td>`;
        
        task_table.appendChild(task);
        resetBackgroundColors();
        task_input.value = '';
    }
    else{
        alert("Please enter a valid text!");
    }
});

task_table.addEventListener('click', (e) => {
    let row = e.target.closest("tr");

    if(e.target.type === "checkbox"){
        if(e.target.checked){
            row.style.textDecoration = "line-through";
        }
        else{
            row.style.textDecoration = "none";
        }
    }
    else if(e.target.tagName === "IMG"){
        if(confirm("Are you sure to delete this task!")){
            row.remove();
            resetBackgroundColors();
        }
    }
});

function resetBackgroundColors(){
    let tasks = document.getElementsByTagName("tr");
    for(let i = 0; i < tasks.length; i++){
        if(i % 2)
            tasks[i].style.backgroundColor = "white";
        else
            tasks[i].style.backgroundColor = "rgb(187, 187, 187, 0.6)";
    }
}