document.getElementById('profile-tab').addEventListener('click', () => showSection('profile-section'));
document.getElementById('history-tab').addEventListener('click', () => showSection('history-section'));
document.getElementById('training-tab').addEventListener('click', () => showSection('training-section'));

function showSection(id) {
  document.querySelectorAll('.page').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}
