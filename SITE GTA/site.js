// Scroll suave
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Menu mobile toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.querySelector('ul').classList.toggle('active');
});

// Animação ao rolar a página
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  sections.forEach(sec => {
    const sectionTop = sec.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      sec.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
