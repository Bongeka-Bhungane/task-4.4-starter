const mainElement = document.getElementById("root");
document.body.appendChild(mainElement);

const taskContainer = document.createElement("div");

taskContainer.style.backgroundColor = "lightblue";
    taskContainer.style.padding = "10px";
    taskContainer.style.margin = "10px 0";

const taskInput = document.createElement("input"); //add an input
root.appendChild(taskInput);
taskInput.type = "text";
taskInput.placeholder = "Enter a new task...";

const addButton = document.createElement("button"); //button for adding
addButton.textContent = "Add Task";

mainElement.style.backgroundColor = 'lightblue';
root.appendChild(taskContainer);

