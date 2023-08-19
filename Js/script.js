// Getting Elements
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");

// Adding Event Listener
navToggle.addEventListener("click", showLinks);

// Click Function
function showLinks() {
  if (navLinks.classList.contains("show__links")) {
    navLinks.classList.remove("show__links");
    console.log(navLinks);
  } else {
    navLinks.classList.add("show__links");
  }
  //   navLinks.classList.toggle("show__links");
}
