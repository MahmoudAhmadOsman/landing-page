const togglebtn = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("navbar_links")[0];
togglebtn.addEventListener("click", function () {
  //alert(111);
  navLinks.classList.toggle("active");
});
