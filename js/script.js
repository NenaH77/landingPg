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

const container = document.querySelector(".particles")

for(let i=0;i<40;i++){

let particle=document.createElement("span")

particle.classList.add("particle")

particle.style.left=Math.random()*100+"%"

particle.style.animationDuration=5+Math.random()*10+"s"

particle.style.width=particle.style.height=
Math.random()*6+2+"px"

container.appendChild(particle)

}
