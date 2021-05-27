const toggle = document.getElementById("toggle");
const navbar = document.getElementById("nav");

toggle.addEventListener("click", () => {
	navbar.classList.toggle("active");
});
