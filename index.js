document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Reset menu saat resize ke desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
    }
  });

});