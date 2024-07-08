document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.getElementById('menu-button');
  const closeButton = document.getElementById('close-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener("click", function() {
    menuButton.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
  });

  closeButton.addEventListener("click", function() {
    menuButton.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
  });
});
