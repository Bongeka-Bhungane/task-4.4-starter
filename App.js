const root = document.getElementById("root");

// Input for task text
const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.placeholder = "Enter a task";
taskInput.style.marginRight = "10px";
root.appendChild(taskInput);

// Add Task button
const addButton = document.createElement("button");
addButton.textContent = "Add Task";
addButton.style.backgroundColor = "black";
addButton.style.color = "white";
root.appendChild(addButton);

// Task counter
const counter = document.createElement("p");
counter.style.marginTop = "10px";
counter.textContent = "Remaining tasks: 0";
root.appendChild(counter);

// Container for checklist
const taskList = document.createElement("div");
taskList.style.marginTop = "10px";
root.appendChild(taskList);

// Function to update the counter
function updateCounter() {
  const remaining = taskList.querySelectorAll(
    "input[type='checkbox']:not(:checked)"
  ).length;
  counter.textContent = `Remaining tasks: ${remaining}`;
}

// Add task functionality
addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Task wrapper
  const taskItem = document.createElement("div");
  taskItem.style.marginBottom = "5px";
  taskItem.style.display = "flex";
  taskItem.style.alignItems = "center";
  taskItem.style.gap = "10px";

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", updateCounter);

  // Label
  const label = document.createElement("label");
  label.textContent = "" + taskText;

// line-through on checkbox
checkbox.addEventListener("change", () => {
label.style.textDecoration = checkbox.checked ? "line-through" : "none";
});

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.color = "white";
  deleteButton.style.border = "none";
  deleteButton.style.padding = "3px 6px";
  deleteButton.style.cursor = "pointer";

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
    updateCounter();
  });

  // Append elements
  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  // Clear input & update counter
  taskInput.value = "";
  updateCounter();
});