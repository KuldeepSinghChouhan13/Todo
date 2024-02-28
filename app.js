function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;
    
    if (task.trim() !== "") {
      let tasksList = document.getElementById("tasks");
      let li = document.createElement("li");
      li.textContent = task;
      
      // Add delete button to each task
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "x";
      deleteButton.onclick = function() {
        li.remove();
      };
      li.appendChild(deleteButton);
      
      tasksList.appendChild(li);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }