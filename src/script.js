const mobileMenuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');

mobileMenuBtn.addEventListener('click', navToggle);

function navToggle() {
    mobileMenuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
  
}

// Tablist functions
tab1.addEventListener('click', () => {
    content1.removeAttribute('hidden');
    content2.setAttribute('hidden', '');
    content3.setAttribute('hidden', '');
});

tab2.addEventListener('click', () => {
    content2.removeAttribute('hidden');
    content1.setAttribute('hidden', '');
    content3.setAttribute('hidden', '');
});

tab3.addEventListener('click', () => {
    content3.removeAttribute('hidden');
    content1.setAttribute('hidden', '');
    content2.setAttribute('hidden', '');
});