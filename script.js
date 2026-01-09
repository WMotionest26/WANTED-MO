// Close email overlay
document.querySelector(".email-overlay button")
.addEventListener("click", () => {
document.querySelector(".email-overlay").style.display = "none";
});

// Scroll animations
const sections = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
sections.forEach(section => {
const rect = section.getBoundingClientRect().top;
if (rect < window.innerHeight - 100) {
section.classList.add("show");
}
});
});
