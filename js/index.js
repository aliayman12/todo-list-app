const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let taskArray = [];

if (localStorage.getItem("data") !== null) {
  taskArray = JSON.parse(localStorage.getItem("data"));
  displayTask();
}

function addTask() {
  const taskValue = inputBox.value.trim();
  if (taskValue === "") {
    alert("Task cannot be empty!");
    return;
  }

  const task = { taskText: taskValue };
  taskArray.push(task);
  localStorage.setItem("data", JSON.stringify(taskArray));
  inputBox.value = "";
  displayTask();
}

function displayTask() {
  let taskList = "";
  for (let i = 0; i < taskArray.length; i++) {
    taskList += `<li>
                    ${taskArray[i].taskText}
                    
                    <span>
                    <i onclick="updateTask(${i})" class="fa-solid fa-pen-to-square"></i>
                    <i onclick="deleteTask(${i})" class="fa-solid fa-xmark"></i>
                    </span>
                </li>`;
  }

  listContainer.innerHTML = taskList;
}

function deleteTask(index) {
  taskArray.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(taskArray));
  displayTask();
}

function updateTask(index) {
  inputBox.value = taskArray[index].taskText;
  deleteTask(index);
}
