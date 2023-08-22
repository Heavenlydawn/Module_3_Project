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
  // navLinks.classList.toggle("show__links");
}

// Get All The Buttons
const nftBtnFilter = document.querySelectorAll(".btn__filter");

// Loop through each button and add a click event listener
nftBtnFilter.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the "active" class from all buttons
    nftBtnFilter.forEach((btn) => {
      btn.classList.remove("btn__active");
    });

    // Add the "active" class to the clicked button
    button.classList.add("btn__active");
  });
});

// Filter
const btn__filter = document.querySelectorAll(".btn__filter");
const discover__card = document.querySelectorAll(".discover__card");

btn__filter.forEach((b) => {
  b.addEventListener("click", () => {
    const nftFilter = b.getAttribute("data-filter");
    discover__card.forEach((card) => {
      if (
        nftFilter === "All Categories" ||
        card.getAttribute("data-filter") === nftFilter
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
