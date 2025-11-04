const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });


function showSignUp(){
    const showForm = document.getElementById('form');
    showForm.style.display = showForm.style.display === 'none' ? 'inline-block' : 'none';
}
