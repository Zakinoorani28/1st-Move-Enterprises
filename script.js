// Header code start 
const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);
// Header code end 

// navber links 

const navbarLinks = document.querySelectorAll('.navbar-link');

navbarLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const href = link.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// navber links end