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
document.addEventListener("DOMContentLoaded", function(){

const container = document.querySelector(".particles");

for(let i = 0; i < 40; i++){

  const particle = document.createElement("span");

  const size = Math.random()*6 + 3;

  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particle.style.left = Math.random()*100 + "%";
  particle.style.top = Math.random()*100 + "%";

  particle.style.animationDuration = (Math.random()*10 + 10) + "s";

  container.appendChild(particle);

}

});
