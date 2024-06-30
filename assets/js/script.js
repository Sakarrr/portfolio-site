// JS to toggle menu on mobile view
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
});

// JS to add active class on section within the viewport
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header navbar a");

window.onscroll = () => {
  sections.forEach((sec) => {
    console.log(sec);
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// JS to toggle theme between light and dark
const toggleButton = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.classList.add(currentTheme);
}

toggleButton.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark-mode");

  let theme = "light";
  if (document.documentElement.classList.contains("dark-mode")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});
