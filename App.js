const mainElement = document.getElementById("root");
document.body.appendChild(mainElement);

const taskInput = document.createElement("input"); //add an input
taskInput.type = "text";
taskInput.placeholder = "Enter a new task...";
taskInput.style.padding = "10px"; // style for the div
taskInput.style.margin = "10px 0";
root.appendChild(taskInput);

const addButton = document.createElement("button"); //button for adding
addButton.textContent = "Add Task";
addButton.style.backgroundColor = "black"
addButton.style.color = "white"
root.appendChild(addButton);

addButton.addEventListener("click", function () {
    const newTask = document.createElement("div");
      newTask.textContent = "New Task";
      newTask.style.padding = "10px";
      newTask.style.marginTop = "5px";
      newTask.style.backgroundColor = "lightgray";

      root.appendChild(newTask);
});
