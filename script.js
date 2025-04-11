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
  