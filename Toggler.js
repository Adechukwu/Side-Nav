//get the toggle span icon
let span = document.querySelector(".toggler");
let sideNav = document.querySelector(".SideBar");
span.addEventListener("click", function () {
    sideNav.classList.toggle('active');
})