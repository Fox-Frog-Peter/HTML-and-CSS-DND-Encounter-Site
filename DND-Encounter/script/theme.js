// theme.js
// -- My notes to the next dev --
// I’m handling dark mode here. The trick is to use localStorage so we remember
// what theme the user last picked. That way, when they refresh or switch pages,
// the theme stays consistent.

// Step 1: When the page loads, check localStorage for a saved theme.
// Step 2: If it’s dark, apply the "dark-mode" class to <body> and swap the button icon.
// Step 3: When the user clicks the button, toggle dark/light and update localStorage.

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".themeToggle");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggles.forEach(btn => btn.textContent = "☀️"); // sun if already dark
  }

  // Hook up each toggle button (works on all pages)
  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Save the current theme into localStorage
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️"; // sun means switch back to light
      } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙"; // moon means switch to dark
      }
    });
  });
});
