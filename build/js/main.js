const initApp = () => {
  const menu = document.getElementById("mobile-menu");
  const hamburger = document.getElementById("hamburger-button");
  const toggleMenu = () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  };
  hamburger.addEventListener("click", toggleMenu);
  menu.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", initApp);
