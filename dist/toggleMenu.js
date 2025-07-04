const headerNav = document.querySelector(".navbar ul");
const toggleMenu = document.querySelector(".toggle__menu");

toggleMenu.addEventListener("click", () =>{
    toggleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");
});