const mobileMenuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');

mobileMenuBtn.addEventListener('click', navToggle);

function navToggle() {
    mobileMenuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
  
}