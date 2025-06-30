const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme or default to dark
let currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);
toggleBtn.textContent = currentTheme === "light" ? "☀️" : "🌙";

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");
  let newTheme = theme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  toggleBtn.textContent = newTheme === "light" ? "☀️" : "🌙";
});
