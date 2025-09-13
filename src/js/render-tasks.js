//  const form = document.querySelector('#task-form');
//  const list = document.querySelector('#task-list');

import { form, list } from './refs';
import { renderTask } from './tasks';
import {saveTaskLocalStorage, deleteTaskLocalStirage, renderTaskFromLocalStorage} from './local-storage-api';


 form.addEventListener('submit', onSubmit) 
 function onSubmit (event) {
event.preventDefault();
const taskName = event.target.taskName.value.trim();
const description = event.target.taskDescription.value.trim();
console.log(taskName);
console.log(description);

if (taskName ==="" || description ==="") {
alert('Заповніть усі поля форми')
 return;
}

saveTaskLocalStorage({title: taskName, description: description});
renderTask({title: taskName, description: description});
event.target.taskName.value = "";
event.target.taskDescription.value = "";
}
list.addEventListener("click", (event) => {
if (event.target.classList.contains('task-list-item-btn')) {
    const deleteItem = event.target.closest('.task-list-item');
    const index = [...list.children].indexOf(deleteItem);
    deleteItem.remove();
    deleteTaskLocalStorage(index);
} 
});
renderTaskFromLocalStorage();