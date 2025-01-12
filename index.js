  const cursorDot = document.querySelector("[data-cursor-dot]");
  window.addEventListener("mousemove",(e)=>{
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorDot.style.display = "block";

    function mouseStopped(){
      cursorDot.style.display = "none";
    };
  });
  window.addEventListener("mouseout",()=>{
    cursorDot.style.display = "none";
  });
  
  const themeToggle = document.getElementById('themeToggle');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Save theme preference in localStorage
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });

  // Load saved theme preference
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
    }
  });
