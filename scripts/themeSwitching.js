const button = document.getElementById('theme-toggle');
const body = document.body;
const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'dark' || (
    storedTheme === null && window.matchMedia('(prefers-color-scheme:dark)'))) {
  body.classList.add('dark-mode');
  button.innerHTML = '<img src="images/icons/sun-solid-full (1).svg" alt="moon/sun icon">';
}

button.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  const theme = isDark ? "dark" : "light";

  button.innerHTML = isDark ? `
    <img src="images/icons/sun-solid-full (1).svg" alt="moon/sun icon">` 
    : `  
    <img src="images/icons/moon-solid-full.svg" alt="moon/sun icon">` ;

  localStorage.setItem('theme', theme);
})