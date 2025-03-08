// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.banner-slide');
    let currentSlide = 0;
  
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    // Change slide every 5 seconds (5000ms)
    setInterval(nextSlide, 5000);
  });
  