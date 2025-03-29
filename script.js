const menutoggler = document.querySelector(".menu-toggler");
const sidebar = document.querySelector(".side-bar");

menutoggler.addEventListener("click", function(){
    sidebar.classList.toggle("active");
});