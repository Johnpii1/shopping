const menuBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  console.log('Menu button clicked'); // 🧠 test if JS works
  nav.classList.toggle('show');
});
