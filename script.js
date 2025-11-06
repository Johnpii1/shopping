/*Dropdown for header*/
const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  /*Dropdown for store*/
  const storebtn =document.getElementById("storebtn");
  const storage =document.getElementById("storage");

  storebtn.addEventListener("click", () => {
    storage.classList.toggle("show");
  });


/*Login form*/
function showSignUp(){
    const showForm = document.getElementById('form');
    showForm.style.display = showForm.style.display === 'none' ? 'inline-block' : 'none';
}
