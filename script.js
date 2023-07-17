let navBar = document.querySelector("nav");
let links = document.querySelectorAll("nav a");
let pars = document.querySelector(".pars");

window.onscroll = function () {
  if (this.scrollY >= pars.offsetTop - navBar.offsetHeight - 50) {
    navBar.classList.add("active");
    links.forEach((link) => {
      link.classList.add("active");
    });
  } else {
    navBar.classList.remove("active");
    links.forEach((link) => {
      link.classList.remove("active");
    });
  }
};
