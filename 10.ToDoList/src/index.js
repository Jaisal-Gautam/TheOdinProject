import "./home.css";
import "./modules/taskfunc.js"
import { format} from "date-fns";
import { taskCreation } from "./modules/taskfunc.js";
import {loadedTasks,loadedToday,loadedOverdue,loadedFuture,loadedStarred,loadedCompleted,loadSavedData} from "./modules/storage.js"
window.addEventListener("load", loadSavedData());
let allTasks=document.querySelector('#alltasks')
let today=document.querySelector("#today")
let future=document.querySelector("#future")
let overdue=document.querySelector("#overdue")
let starred=document.querySelector("#starred")

let mainDiv=document.querySelector(".tasksShowCase")

allTasks.addEventListener('click',()=>{
    mainDiv.innerHTML="";
    for(let i=0;i<loadedTasks.length;i++){
        taskCreation(loadedTasks[i].status,loadedTasks[i].name,loadedTasks[i].project,loadedTasks[i].dueDate,loadedTasks[i].priority,loadedTasks[i].starred)
    }
})

today.addEventListener('click',()=>{
    mainDiv.innerHTML="";
    for(let i=0;i<loadedToday.length;i++){
        taskCreation(loadedToday[i].status,loadedToday[i].name,loadedToday[i].project,loadedToday[i].dueDate,loadedToday[i].priority,loadedToday[i].starred)
    }
})

future.addEventListener('click',()=>{
    mainDiv.innerHTML="";
    for(let i=0;i<loadedFuture.length;i++){
        taskCreation(loadedFuture[i].status,loadedFuture[i].name,loadedFuture[i].project,loadedFuture[i].dueDate,loadedFuture[i].priority,loadedFuture[i].starred)
    }
})

overdue.addEventListener('click',()=>{
    mainDiv.innerHTML="";
    for(let i=0;i<loadedOverdue.length;i++){
        taskCreation(loadedOverdue[i].status,loadedOverdue[i].name,loadedOverdue[i].project,loadedOverdue[i].dueDate,loadedOverdue[i].priority,loadedOverdue[i].starred)
    }
})

starred.addEventListener('click',()=>{
    mainDiv.innerHTML="";
    for(let i=0;i<loadedStarred.length;i++){
        taskCreation(loadedStarred[i].status,loadedStarred[i].name,loadedStarred[i].project,loadedStarred[i].dueDate,loadedStarred[i].priority,loadedStarred[i].starred)
    }
})


let todayDate=document.querySelector(".currentDate")
let date=format(new Date(),"MMM Lo,EEEE")
todayDate.innerHTML=date;