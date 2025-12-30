document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

const slides = document.querySelectorAll('.M-Slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('M-SlideActive');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('M-SlideActive');
}, 7000); // ganti slide tiap 7 detik
