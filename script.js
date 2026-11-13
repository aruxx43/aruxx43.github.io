// Interactive Cursor Glow Tracker
const cursorGlow = document.getElementById('cursorGlow');

window.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

// Navbar dynamic glass shift on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.querySelector('.nav-container').style.background = 'rgba(10, 9, 16, 0.9)';
    navbar.querySelector('.nav-container').style.borderColor = 'rgba(168, 85, 247, 0.3)';
  } else {
    navbar.querySelector('.nav-container').style.background = 'rgba(14, 13, 22, 0.7)';
    navbar.querySelector('.nav-container').style.borderColor = 'rgba(255, 255, 255, 0.08)';
  }
});