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

// Form Submission
const form = document.getElementById('pd-contact-form');
const formResponse = document.getElementById('form-response');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    formResponse.innerHTML = "Sending...";

    try {
        const response = await fetch('contact.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.text();
        
        if (response.status === 200) {
            formResponse.style.color = "green";
            form.reset(); // Clear form
        } else {
            formResponse.style.color = "red";
        }
        formResponse.innerHTML = result;
    } catch (error) {
        formResponse.innerHTML = "Connection error. Please try again.";
    }
});
