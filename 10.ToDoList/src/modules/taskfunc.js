import { Task } from "./taskStructure";
import "../styles/modal.css"
import "../styles/tasks.css"
import { format, compareAsc } from "date-fns";
import { saveData } from "./storage.js";

let taskCount = 0;
let completedTaskCount = 0;
let tasks = [];
let todayTask = [];
let futureTask = [];
let overdueTask = [];
let starredTask = [];
const completedTask = [];

const openModal = document.querySelector('.newTask')
const dialog = document.querySelector('.dialog')
const closeModal = document.querySelector('.closeModal')
openModal.addEventListener('click', () => dialog.showModal())
closeModal.addEventListener('click', () => dialog.close())

const form = document.querySelector('form');
form.addEventListener("submit", function (event) {
    event.preventDefault()
})

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", () => {
    let status = false;
    let title = document.querySelector("#taskTitleForm").value;
    let project = document.querySelector("#taskProjectForm").value;
    let dueDate = document.querySelector("#taskDueForm").value;
    let priority = document.querySelector("#taskPriorityForm").value;
    let starred = false;
    const taskEntry = new Task(status, title, project, dueDate, priority, starred)
    dialog.close();
    tasks.push(taskEntry);
    let today = format(new Date, "yyyy-MM-dd")

    let compareStore = (compareAsc(today, dueDate))
    if (compareStore == -1) {
        console.log("check")
    }
    console.log(compareStore)
    if (compareStore == 0) {
        todayTask.push(tasks[taskCount])
    } else if (compareStore == 1) {
        overdueTask.push(tasks[taskCount])
    } else if (compareStore == -1) {
        futureTask.push(tasks[taskCount])
    }
    if (starred) {
        starredTask.push(tasks[taskCount])
    }
    taskCount++;
    console.log(futureTask)
    saveData();

    taskCreation(status, title, project, dueDate, priority, starred)

})

function taskCreation(tkstatus, taskTitle, taskProjectName, taskDate, priority, starred) {
    let taskShowCase = document.querySelector(".tasksShowCase")
    let taskDiv = document.createElement("div")
    taskDiv.className = "task";
    taskDiv.id = taskCount - 1;
    let taskPartOne = document.createElement("div");
    taskPartOne.className = "taskPartOne";
    let taskStatus = document.createElement("div")
    taskStatus.className = "taskStatus";

    let taskStatusInput = document.createElement('input');
    taskStatusInput.type = "checkbox";
    taskStatusInput.checked = tkstatus;
    taskStatusInput.addEventListener('change', () => {
        if (taskStatusInput.checked) {
            tkstatus = true;
            completedTask.push(tasks[taskDiv.id])
            taskDiv.remove()
            completedTaskCount++;
            let taskCompleted = document.querySelector(".completedTasks")
            const index = Number(taskDiv.id);
            if (tasks[index]) {
                starredTaskCreation(tkstatus, taskTitle, tasks[index].project, tasks[index].dueDate, true, true)
            }
        }
    })
    taskStatus.appendChild(taskStatusInput);
    let taskName = document.createElement("div");
    taskName.className = "taskName";
    let h4 = document.createElement("h4")
    h4.innerHTML = taskTitle;

    let taskInfo = document.createElement("div")
    taskInfo.className = "taskInfo";
    let taskProject = document.createElement("h5");
    let taskDueDate = document.createElement("h5");
    taskProject.className = "taskProject"
    taskDueDate.className = "taskDueDate"
    taskProject.innerHTML = taskProjectName;
    taskDueDate.innerHTML = taskDate;

    taskInfo.appendChild(taskProject)
    taskInfo.appendChild(taskDueDate)

    taskName.appendChild(h4)
    taskName.appendChild(taskInfo)

    taskPartOne.appendChild(taskStatus)
    taskPartOne.appendChild(taskName);

    let taskPartTwo = document.createElement("div");
    taskPartTwo.className = "taskPartTwo";
    let taskPriority = document.createElement("div");
    taskPriority.className = "taskPriority";

    let button = document.createElement("button");
    button.className = priority;
    button.innerHTML = priority;

    taskPriority.appendChild(button);

    let taskStarred = document.createElement("div")
    taskStarred.className = "taskStarred";
    taskStarred.innerHTML = "★";
    if (starred) {
        taskStarred.style.color = "#128939"
    }

    taskStarred.addEventListener('click', () => {
        const index = Number(taskDiv.id);
        if (tasks[index]) {
            tasks[index].starred = !tasks[index].starred;

            if (tasks[index].starred) {
                taskStarred.style.color = "#128939";
                starredTask.push(tasks[index]);

            } else {
                taskStarred.style.color = "black";
                const idx = starredTask.indexOf(tasks[index]);
                if (idx !== -1) starredTask.splice(idx, 1);
            }

            saveData();
        }
    });

    taskPartTwo.appendChild(taskPriority);
    taskPartTwo.appendChild(taskStarred)

    taskDiv.appendChild(taskPartOne)
    taskDiv.appendChild(taskPartTwo)

    taskShowCase.appendChild(taskDiv);
}

function starredTaskCreation(tkstatus, taskTitle, taskProjectName, taskDate, priority, starred) {
    let taskCompleted = document.querySelector(".completedTasks")
    let taskDiv = document.createElement("div")
    taskDiv.className = "task";
    taskDiv.id = completedTaskCount - 1;
    let taskPartOne = document.createElement("div");
    taskPartOne.className = "taskPartOne";
    let taskStatus = document.createElement("div")
    taskStatus.className = "taskStatus";

    let taskStatusInput = document.createElement('input');
    taskStatusInput.type = "checkbox";
    taskStatusInput.checked = tkstatus;
    taskStatus.appendChild(taskStatusInput);
    let taskName = document.createElement("div");
    taskName.className = "taskName";
    let h4 = document.createElement("h4")
    h4.innerHTML = taskTitle;

    let taskInfo = document.createElement("div")
    taskInfo.className = "taskInfo";
    let taskProject = document.createElement("h5");
    let taskDueDate = document.createElement("h5");
    taskProject.className = "taskProject"
    taskDueDate.className = "taskDueDate"
    taskProject.innerHTML = taskProjectName;
    taskDueDate.innerHTML = taskDate;

    taskInfo.appendChild(taskProject)
    taskInfo.appendChild(taskDueDate)

    taskName.appendChild(h4)
    taskName.appendChild(taskInfo)

    taskPartOne.appendChild(taskStatus)
    taskPartOne.appendChild(taskName);

    taskDiv.appendChild(taskPartOne)

    taskCompleted.appendChild(taskDiv);
    saveData()
}

console.log(tasks)

export { tasks, todayTask, futureTask, overdueTask, starredTask, completedTask, taskCreation }