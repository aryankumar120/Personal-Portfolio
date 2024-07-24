// Navbar Toggle
// Toggles the visibility of the navbar and the state of the toggle button when the button is clicked.
// this refers to navToggleBtn

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

// Toggles the navbar when clicked on any navbar link
// the navbar is hidden after clicking any link within it, giving a smoother user experience on mobile or small screens.

const navbarLinks = document.querySelectorAll("[data-nav-link]");
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

// Back to top and header 
// if (window.scrollY >= 100) { ... } checks if the vertical scroll position is greater than or equal to 100 pixels.
// If true, it adds the active class to both the header and backTopBtn elements.
// If false, it removes the active class from both the header and backTopBtn elements.

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});