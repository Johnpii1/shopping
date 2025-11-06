/*Dropdown for header*/
const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

const storebtn = document.getElementById("storebtn");
const storage = document.getElementById("storage");

// Mobile click
if (window.innerWidth < 1024) {
  storebtn.addEventListener("click", () => {
    storage.classList.toggle("show");
  });
}

// Desktop hover
if (window.innerWidth >= 1024) {
  storebtn.addEventListener("mouseenter", () => storage.classList.add("show"));
  storebtn.addEventListener("click", () => storage.classList.remove("show"));
}




/*Login form*/
function showSignUp(){
    const showForm = document.getElementById('form');
    showForm.style.display = showForm.style.display === 'none' ? 'inline-block' : 'none';
}
