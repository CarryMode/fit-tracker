document.getElementById('profile-tab').addEventListener('click', () => showSection('profile-section'));
document.getElementById('history-tab').addEventListener('click', () => showSection('history-section'));
document.getElementById('training-tab').addEventListener('click', () => showSection('training-section'));

function showSection(id) {
  document.querySelectorAll('.page').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const quickStartBtn = document.getElementById("quickStartBtn");
    const workoutForm = document.getElementById("workoutForm");
    const templates = document.querySelectorAll(".template");
  
    // Show workout form when Quick Start is clicked
    quickStartBtn.addEventListener("click", () => {
      workoutForm.classList.remove("hidden");
    });
  
    // Show workout form when a template is clicked
    templates.forEach(template => {
      template.addEventListener("click", () => {
        workoutForm.classList.remove("hidden");
        // In the future: load the template exercises here
      });
    });
  });
  
  const exercises = [
    "Bench Press (Barbell)",
    "Incline Press (Dumbbell)",
    "Cable Fly",
    "Deadlift",
    "Lat Pulldown"
  ];
  
  const addExerciseBtn = document.getElementById("addExerciseBtn");
  const exerciseList = document.getElementById("exerciseList");
  
  addExerciseBtn.addEventListener("click", () => {
    const container = document.createElement("div");
    container.classList.add("exercise-item");
  
    // Dropdown
    const select = document.createElement("select");
    exercises.forEach(ex => {
      const option = document.createElement("option");
      option.value = ex;
      option.textContent = ex;
      select.appendChild(option);
    });
  
    // Inputs
    const weightInput = document.createElement("input");
    weightInput.type = "number";
    weightInput.placeholder = "Weight (kg)";
    weightInput.min = "0";
  
    const repsInput = document.createElement("input");
    repsInput.type = "number";
    repsInput.placeholder = "Reps";
    repsInput.min = "1";
  
    // Add to container
    container.appendChild(select);
    container.appendChild(weightInput);
    container.appendChild(repsInput);
  
    // Append to workout list
    exerciseList.appendChild(container);
  });
  