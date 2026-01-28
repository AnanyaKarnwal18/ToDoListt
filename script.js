function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleDone(this)">${taskText}</span>
    <span class="delete" onclick="deleteTask(this)">✖</span>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function deleteTask(element) {
  element.parentElement.remove();
}

function toggleDone(task) {
  task.style.textDecoration =
    task.style.textDecoration === "line-through"
      ? "none"
      : "line-through";
}
