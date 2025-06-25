import {tasks,todayTask,overdueTask,futureTask,starredTask,completedTask} from "./taskfunc.js"





function saveData(){
    let storedData=[tasks,todayTask,overdueTask,futureTask,starredTask,completedTask]
    localStorage.setItem("storage",JSON.stringify(storedData))
}

export let loadedTasks = [];
export let loadedToday = [];
export let loadedOverdue = [];
export let loadedFuture = [];
export let loadedStarred = [];
export let loadedCompleted = [];

export function loadSavedData() {
    const saved = localStorage.getItem("storage");

    if (saved) {
        const data = JSON.parse(saved);

        loadedTasks.splice(0, loadedTasks.length, ...data[0]);
        loadedToday.splice(0, loadedToday.length, ...data[1]);
        loadedOverdue.splice(0, loadedOverdue.length, ...data[2]);
        loadedFuture.splice(0, loadedFuture.length, ...data[3]);
        loadedStarred.splice(0, loadedStarred.length, ...data[4]);
        loadedCompleted.splice(0, loadedCompleted.length, ...data[5]);
    }
}

export {saveData}