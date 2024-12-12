let tasks = ["do laundry","wash dishes"];

function showtasks(){
    let tasklistUL = document.getElementById("task-list");
    tasklistUL.innerHTML= "";
    for (let i=0; i<tasks.length; i++){
        let li =document.createElement("li");
        li.innerText=tasks[i];
        tasklistUL.appendChild(li);
    }
}

function addTasks(){
    let task = prompt("enter your tasks");
    tasks.push(task);
    showtasks();
    
}

function removeTasks(){
    let task = prompt("remove your tasks");
     let taskIndex = tasks.indexOf(taskToRemove);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1); 
        showTasks();  
    }
    else {
        alert("enter a valid task !");
    }
}


function clearTasks() {
    tasks = [];
    showTasks();
}

function prioritizeTasks() {
    let task = prompt("Enter the task you want to prioritize:");
    let taskFound = false;
    let tasklist = document.getElementById("task-list");
     let listItems = tasklist.getElementsByTagName("li");
    task = task.toLowerCase();

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].toLowerCase() === task) {
            listItems[i].style.color = "blue";
            taskFound = true;
        }
    }
    if (!taskFound) {
        alert("task not found");
    }
}

    
 