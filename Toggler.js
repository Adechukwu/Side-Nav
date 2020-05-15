//get the toggle span icon
let span = document.querySelector(".toggler");
//get the span SideNav Icon
let sideNav = document.querySelector(".SideBar");
//add event listener to the span
span.addEventListener("click", (n) => {
    //toggle class list on sideNav
    sideNav.classList.toggle('active');
})