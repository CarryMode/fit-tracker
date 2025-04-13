// Tab navigation
document.getElementById('profile-tab').addEventListener('click', () => showSection('profile-section'));
document.getElementById('history-tab').addEventListener('click', () => {
  showSection('history-section');
  loadWorkoutHistory();
});
document.getElementById('training-tab').addEventListener('click', () => showSection('training-section'));

function showSection(id) {
  document.querySelectorAll('.page').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// Load workout history (must be outside DOMContentLoaded)
function loadWorkoutHistory() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";

  const savedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];

  if (savedWorkouts.length === 0) {
    historyList.innerHTML = "<p>No workouts yet!</p>";
    return;
  }

  savedWorkouts.forEach(workout => {
    const workoutDiv = document.createElement("div");
    workoutDiv.classList.add("workout-entry");

    const title = document.createElement("h4");
    title.textContent = `Workout on ${workout.date}`;
    workoutDiv.appendChild(title);

    const ul = document.createElement("ul");
    workout.exercises.forEach(ex => {
      const li = document.createElement("li");
      li.textContent = `${ex.exercise} — ${ex.weight} kg × ${ex.reps} reps`;
      ul.appendChild(li);
    });

    workoutDiv.appendChild(ul);
    historyList.appendChild(workoutDiv);
  });
}

// Main logic
document.addEventListener("DOMContentLoaded", () => {
  const quickStartBtn = document.getElementById("quickStartBtn");
  const workoutForm = document.getElementById("workoutForm");
  const templates = document.querySelectorAll(".template");
  const addExerciseBtn = document.getElementById("addExerciseBtn");
  const exerciseList = document.getElementById("exerciseList");
  const finishWorkoutBtn = document.getElementById("finishWorkoutBtn");

  const exercises = [
    "Bench Press (Barbell)",
    "Incline Press (Dumbbell)",
    "Cable Fly",
    "Deadlift",
    "Lat Pulldown"
  ];

  // Show workout form when Quick Start is clicked
  quickStartBtn.addEventListener("click", () => {
    workoutForm.classList.remove("hidden");
    exerciseList.innerHTML = ""; // clear old inputs
  });

  // Show workout form when a template is clicked
  templates.forEach(template => {
    template.addEventListener("click", () => {
      const selected = template.getAttribute("data-template");
      const exercisesForTemplate = workoutTemplates[selected];
  
      if (!exercisesForTemplate) return;
  
      workoutForm.classList.remove("hidden");
      exerciseList.innerHTML = "";
  
      exercisesForTemplate.forEach(exerciseName => {
        const container = document.createElement("div");
        container.classList.add("exercise-item");
  
        const select = document.createElement("select");
        const option = document.createElement("option");
        option.value = exerciseName;
        option.textContent = exerciseName;
        select.appendChild(option);
        select.disabled = true; // lock the selection
  
        const weightInput = document.createElement("input");
        weightInput.type = "number";
        weightInput.placeholder = "Weight (kg)";
        weightInput.min = "0";
  
        const repsInput = document.createElement("input");
        repsInput.type = "number";
        repsInput.placeholder = "Reps";
        repsInput.min = "1";
  
        container.appendChild(select);
        container.appendChild(weightInput);
        container.appendChild(repsInput);
        exerciseList.appendChild(container);
      });
    });
  });
  
  // Add a new exercise row
  addExerciseBtn.addEventListener("click", () => {
    const container = document.createElement("div");
    container.classList.add("exercise-item");

    const select = document.createElement("select");
    exercises.forEach(ex => {
      const option = document.createElement("option");
      option.value = ex;
      option.textContent = ex;
      select.appendChild(option);
    });

    const weightInput = document.createElement("input");
    weightInput.type = "number";
    weightInput.placeholder = "Weight (kg)";
    weightInput.min = "0";

    const repsInput = document.createElement("input");
    repsInput.type = "number";
    repsInput.placeholder = "Reps";
    repsInput.min = "1";

    container.appendChild(select);
    container.appendChild(weightInput);
    container.appendChild(repsInput);
    exerciseList.appendChild(container);
  });

  // Save workout to localStorage
  finishWorkoutBtn.addEventListener("click", () => {
    const workoutData = [];
    const exerciseItems = document.querySelectorAll(".exercise-item");

    exerciseItems.forEach(item => {
      const select = item.querySelector("select");
      const weight = item.querySelector("input[type='number']:nth-of-type(1)");
      const reps = item.querySelector("input[type='number']:nth-of-type(2)");

      if (select && weight.value && reps.value) {
        workoutData.push({
          exercise: select.value,
          weight: weight.value,
          reps: reps.value
        });
      }
    });

    const savedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    savedWorkouts.push({
      date: new Date().toLocaleString(),
      exercises: workoutData
    });

    localStorage.setItem("workouts", JSON.stringify(savedWorkouts));

    workoutForm.classList.add("hidden");
    exerciseList.innerHTML = "";
    alert("Workout saved successfully!");
  });
});




// Some testing templates
const workoutTemplates = {
  chest: [
    "Bench Press (Barbell)",
    "Incline Press (Dumbbell)",
    "Cable Fly"
  ],
  back: [
    "Pullups",
    "Seated Rows",
    "Lat Pulldown"
  ]
};






