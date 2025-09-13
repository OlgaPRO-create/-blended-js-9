import {list} from "./refs"
export function saveTaskLocalStorage(task) {
const tasks = JSON.parse(localStorage.getItem("keyTasks")) || [];
tasks.push(task)
localStorage.setItem("keyTasks", JSON.stringify(tasks))
}

export function deleteTaskLocalStirage(indexToRemove) {
 const tasks = JSON.parse(localStorage.getItem("keyTasks")) || [];
 const updateTasks = tasks.filter((element, index) => index !== indexToRemove )
 localStorage.setItem("keyTasks", JSON.stringify(updateTasks))

 }

 function renderTaskFromLocalStorage() {
 const tasks = JSON.parse(localStorage.getItem("keyTasks")) || [];
 list.innerHTML = "";

 }
 const markUp = tasks.map(({title, taskDescription}) =>
     `<li class="task-list-item">
          <button class="task-list-item-btn">Delete</button>
          <h3>${title}</h3>
          <p>${description}</p>
      </li>`).join("")
      list.innerHTML =markUp;
