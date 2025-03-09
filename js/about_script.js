// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

document.addEventListener('DOMContentLoaded', () => {
    // Banner slider
    const slides = document.querySelectorAll('.banner-slide');
    let currentSlide = 0;
  
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    // Change slide every 5 seconds (5000ms)
    setInterval(nextSlide, 5000);
    
    // Animate on scroll using IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(elem => {
        observer.observe(elem);
    });
});
// Hide preloader once the page fully loads
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500); // delay to allow the fade-out effect
});
