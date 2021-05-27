const buttonList = document.querySelectorAll(".faq-toggle");

buttonList.forEach((button) => {
	button.addEventListener("click", () => {
		button.parentNode.classList.toggle("active");
	});
});
