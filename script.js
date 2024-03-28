var open = document.getElementById("open");
var close = document.getElementById("close");
var navMenu = document.getElementById("nav-menu");
clickMe = false;
open.addEventListener("click", (e) => {
  if (clickMe == false) {
    navMenu.style.display = "block";
    open.style.display = "none";
    close.style.display = "block";
    clickMe = true
  }
  if (clickMe = true) {
    close.addEventListener("click", (e) => {
      close.style.display = "none";
      navMenu.style.display = "none";
      open.style.display = "block";
      clickMe = false;

    })
  }


})


