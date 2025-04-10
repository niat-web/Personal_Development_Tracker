/* script.js */
 

 // Dark Mode Toggle
 const darkModeToggle = document.getElementById('darkModeToggle');
 const body = document.body;
 

 darkModeToggle.addEventListener('click', () => {
  body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  const icon = darkModeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
 });
 

 // Goal Form Submission
 const goalForm = document.getElementById('goalForm');
 const goalList = document.getElementById('goalList');
 const goalsCompletedElement = document.getElementById('goalsCompleted');
 const goalsInProgressElement = document.getElementById('goalsInProgress');
 const totalGoalsElement = document.getElementById('totalGoals');
 const notificationElement = document.getElementById('notification');
 

 let goals = [];
 

 goalForm.addEventListener('submit', function(event) {
  event.preventDefault();
 

  const goalName = document.getElementById('goalName').value;
  const goalType = document.getElementById('goalType').value;
  const goalDescription = document.getElementById('goalDescription').value;
  const goalDeadline = document.getElementById('goalDeadline').value;
 

  if (!goalName || !goalDescription || !goalDeadline) {
  showAlert('Please fill in all fields.', 'error');
  goalForm.classList.add('was-validated'); // Bootstrap validation
  return;
  }
 

  const goal = {
  id: Date.now(),
  name: goalName,
  type: goalType,
  description: goalDescription,
  deadline: goalDeadline,
  completed: false
  };
 

  goals.push(goal);
  updateGoalList();
  updateStats();
  showAlert('Goal added successfully!', 'success');
  goalForm.reset(); // Clear the form
  goalForm.classList.remove('was-validated');
 });
 

 // Function to display notifications
 function showAlert(message, type = 'success') {
  notificationElement.textContent = message;
  notificationElement.className = `notification ${type}`;
  notificationElement.style.display = 'block';
  setTimeout(() => {
  notificationElement.style.display = 'none';
  }, 3000); // Hide after 3 seconds
 }
 

 // Function to update the goal list in the UI
 function updateGoalList() {
  goalList.innerHTML = '';
  goals.forEach(goal => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item');
  listItem.innerHTML = `
  <strong>${goal.name}</strong> (${goal.type})<br>
  ${goal.description}<br>
  Deadline: ${goal.deadline}<br>
  <button class="btn btn-sm btn-success complete-btn" data-id="${goal.id}">${goal.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
  <button class="btn btn-sm btn-danger delete-btn" data-id="${goal.id}">Delete</button>
  `;
  goalList.appendChild(listItem);
  });
 }
 

 // Function to update the statistics in the UI
 function updateStats() {
  const completedGoals = goals.filter(goal => goal.completed).length;
  const inProgressGoals = goals.filter(goal => !goal.completed).length;
  goalsCompletedElement.textContent = completedGoals;
  goalsInProgressElement.textContent = inProgressGoals;
  totalGoalsElement.textContent = goals.length;
 }
 

 // Event delegation for complete and delete buttons
 goalList.addEventListener('click', function(event) {
  if (event.target.classList.contains('complete-btn')) {
  const goalId = parseInt(event.target.dataset.id);
  toggleComplete(goalId);
  } else if (event.target.classList.contains('delete-btn')) {
  const goalId = parseInt(event.target.dataset.id);
  deleteGoal(goalId);
  }
 });
 

 // Function to toggle the completion status of a goal
 function toggleComplete(id) {
  goals = goals.map(goal =>
  goal.id === id ? { ...goal, completed: !goal.completed } : goal
  );
  updateGoalList();
  updateStats();
  showAlert('Goal status updated!', 'info');
 }
 

 // Function to delete a goal
 function deleteGoal(id) {
  goals = goals.filter(goal => goal.id !== id);
  updateGoalList();
  updateStats();
  showAlert('Goal deleted!', 'warning');
 }
 

 // Daily Log Form Submission
 const dailyLogForm = document.getElementById('dailyLogForm');
 

 dailyLogForm.addEventListener('submit', function(event) {
  event.preventDefault();
 

  const logDate = document.getElementById('logDate').value;
  const logEntry = document.getElementById('logEntry').value;
 

  if (!logDate || !logEntry) {
  showAlert('Please fill in both date and entry for the log.', 'error');
  dailyLogForm.classList.add('was-validated');
  return;
  }
 

  // Here, you would typically save the log to local storage or send it to a server
  console.log('Log Date:', logDate);
  console.log('Log Entry:', logEntry);
 

  showAlert('Log saved successfully!', 'success');
  dailyLogForm.reset();
  dailyLogForm.classList.remove('was-validated');
 });
 

 // Initial stats update
 updateStats();