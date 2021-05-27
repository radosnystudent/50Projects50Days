const tagsElement = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
	createTags(e.target.value);
	if (e.key === "Enter") {
		setTimeout(() => {
			e.target.value = "";
			randomSelect();
		}, 100);
	}
});

function createTags(input) {
	const tags = input
		.split(",")
		.filter((tag) => tag.trim() !== "")
		.map((tag) => tag.trim());

	tagsElement.innerHTML = "";

	tags.forEach((tag) => {
		const tagEl = document.createElement("span");
		tagEl.classList.add("tag");
		tagEl.innerText = tag;
		tagsElement.appendChild(tagEl);
	});
}

function randomSelect() {
	const times = 30;
	const interval = setInterval(() => {
		const randomTag = pickRandomTag();

		addHighlightTag(randomTag);
		setTimeout(() => {
			removeHighlightTag(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);
		setTimeout(() => {
			const randomTag = pickRandomTag();
			addHighlightTag(randomTag);
		}, 100);
	}, times * 100);
}
function pickRandomTag() {
	const allTags = document.querySelectorAll(".tag");
	const number = Math.floor(Math.random() * allTags.length);
	return allTags[number];
}

function addHighlightTag(tag) {
	tag.classList.add("highlight");
}

function removeHighlightTag(tag) {
	tag.classList.remove("highlight");
}
