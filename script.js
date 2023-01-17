const aboutLink = document.getElementById("about-link");
const projectsLink = document.getElementById("projects-link");
const contactLink = document.getElementById("contact-link");
const body = document.body

projectsLink.addEventListener("click", () => {
  projectsLink.classList.add("active");
  aboutLink.classList.remove("active");
  contactLink.classList.remove("active");
})

aboutLink.addEventListener("click", () => {
  topFunction();
  projectsLink.classList.remove("active");
  aboutLink.classList.add("active");
  contactLink.classList.remove("active");
})

contactLink.addEventListener("click", () => {
  projectsLink.classList.remove("active");
  aboutLink.classList.remove("active");
  contactLink.classList.add("active");
})

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}