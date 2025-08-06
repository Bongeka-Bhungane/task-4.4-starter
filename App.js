const root = document.getElementById("root");
root.style.backgroundColor = "white";
root.style.height = "100vh";

const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.id = "add";
taskInput.placeholder = "Enter a task";
taskInput.style.marginRight = "10px";
taskInput.style.backgroundColor = "lightgrey";
taskInput.style.color = "black";
taskInput.style.borderRadius = "10px";
taskInput.style.width = "150px";
taskInput.style.height = "20px";
root.appendChild(taskInput);

const addButton = document.createElement("button"); // Add Task button
    addButton.textContent = "+";
    addButton.style.backgroundColor = "lightblue";
    addButton.style.color = "white";
    addButton.style.border = "none";
    addButton.style.width = "25px";
    addButton.style.height = "25px";
    addButton.style.borderRadius = "50%";
    addButton.style.cursor = "pointer";
    addButton.style.fontSize = "20px";;
    addButton.style.display = "inline-flex";
    addButton.style.alignItems = "center";
    addButton.style.justifyContent = "center";
root.appendChild(addButton);



const counter = document.createElement("p"); // Task counter
counter.style.marginTop = "10px";
counter.textContent = "Remaining tasks: 0";
root.appendChild(counter);

// Function to update the counter
function updateCounter() {
  const remaining = taskList.querySelectorAll(
    "input[type='checkbox']:not(:checked)"
  ).length;
  counter.textContent = `Remaining tasks: ${remaining}`;
}

const taskList = document.createElement("div"); // Container for checklist
root.appendChild(taskList);

// Add task functionality
addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("div"); // Task wrapper
    taskItem.style.display = "flex";
    taskItem.style.alignItems = "center";
    taskItem.style.gap = "10px";
    taskItem.style.marginBottom = "10px";
    taskItem.style.backgroundColor = "#f9f9f9";
    taskItem.style.padding = "10px";
    taskItem.style.borderRadius = "8px";
    taskItem.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";

  const checkbox = document.createElement("input"); // Checkbox
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", updateCounter);

  const label = document.createElement("label");
  label.textContent = "" + taskText;

  // line-through on checkbox
  checkbox.addEventListener("change", () => {
    label.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  const deleteButton = document.createElement("button"); // Delete button
  deleteButton.textContent = "Delete";
  deleteButton.style.backgroundColor = "grey";
  deleteButton.style.color = "white";
  deleteButton.style.border = "none";
  deleteButton.style.padding = "3px 6px";
  deleteButton.style.cursor = "pointer";

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
    updateCounter();
  });

  taskItem.appendChild(checkbox); //append
  taskItem.appendChild(label);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  taskInput.value = "";
  updateCounter();
});