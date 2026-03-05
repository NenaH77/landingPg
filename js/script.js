// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fade in on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.6s ease";
  observer.observe(section);
});

// Particle generator
const particleContainer = document.querySelector('.particle-container');
const particleCount = 30; // number of particles

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Random size
  const size = Math.random() * 6 + 4; // 4px - 10px
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Random horizontal position
  particle.style.left = `${Math.random() * 100}%`;

  // Random animation duration
  particle.style.animationDuration = `${10 + Math.random() * 20}s`;

  // Random animation delay
  particle.style.animationDelay = `${Math.random() * 20}s`;

  particleContainer.appendChild(particle);
}
