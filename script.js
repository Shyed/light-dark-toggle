// Get the theme toggle button
const toggleBtn = document.getElementById('theme-toggle');

// Check localStorage for previously saved theme
const savedTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Light Mode';
}

// Event listener: Toggle dark mode on button click
toggleBtn.addEventListener('click', () => {
  // Toggle the class on the body
  document.body.classList.toggle('dark-mode');

  // Update button text and localStorage
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});
