/* ==================== */
/* Theme Manager Script */
/* ==================== */

// 1. Apply theme immediately (IIFE) to prevent loading flash
(function () {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme');

  // Default to dark if nothing is saved
  if (savedTheme === 'light') {
    html.classList.add('light');
  } else {
    html.classList.remove('light');
  }
})();

// 2. Toggle Function (Call this from your button onclick="toggleTheme()")
function toggleTheme() {
  const html = document.documentElement;
  const isLight = html.classList.contains('light');

  if (isLight) {
    html.classList.remove('light');
    localStorage.setItem('theme', 'dark');
    updateIcons(false); // Update icons to show "Sun" (to switch to light)
  } else {
    html.classList.add('light');
    localStorage.setItem('theme', 'light');
    updateIcons(true); // Update icons to show "Moon" (to switch to dark)
  }
}

// 3. Icon Updater
function updateIcons(isLightMode) {
  const moon = document.getElementById('iconMoon');
  const sun = document.getElementById('iconSun');

  if (!moon || !sun) return;

  // Logic: 
  // If in Light Mode -> Show Moon icon (clicking it goes to dark)
  // If in Dark Mode  -> Show Sun icon (clicking it goes to light)
  if (isLightMode) {
    moon.classList.remove('hidden');
    sun.classList.add('hidden');
  } else {
    moon.classList.add('hidden');
    sun.classList.remove('hidden');
  }
}

// 4. Set initial icon state when page finishes loading
window.addEventListener("DOMContentLoaded", () => {
  const isLight = document.documentElement.classList.contains('light');
  updateIcons(isLight);
});