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

  
/*Dropdown for store*/
  const store =document.getElementById("storebtn");
  const menu =document.getElementById("storage");
const togglHover = (e) =>{
  if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    storage.onmouseover = () => (storage.style.display = "block");
    storebtn.onmouseout = () => (storage.style.display = "none");
  }else {
    storebtn.onmouseover = null;
    storebtn.onmouseout = null;
  }
};

togglHover();
window.addEventListener("resize", togglHover);

/*Login form*/
function showSignUp(){
    const showForm = document.getElementById('form');
    showForm.style.display = showForm.style.display === 'none' ? 'inline-block' : 'none';
}
