const taskManager = {
  tasks: [],
  
  addTask(taskName) {
    this.tasks.push({ name: taskName, completed: false });
  },
displayTasks() {
    this.tasks.forEach((task, i) => {
      console.log(`${i + 1}. ${task.name} - ${task.completed ? "Done" : "Pending"}`);
    });
  }
};
taskManager.addTask("Learn JS");
taskManager.addTask("Write Blog");
taskManager.displayTasks();
