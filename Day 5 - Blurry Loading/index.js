const loadingText = document.querySelector(".loading-text");
const backgroundImage = document.querySelector(".bg-img");

let loadingTimer = 0;

let interv = setInterval(blurring, 30);

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function blurring() {
	loadingTimer++;

	if (loadingTimer > 99) {
		clearInterval(interv);
	}

	loadingText.innerText = `${loadingTimer}`;
	loadingText.style.opacity = scale(loadingTimer, 0, 100, 1, 0);
	backgroundImage.style.filter = `blur(${scale(
		loadingTimer,
		0,
		100,
		30,
		0
	)}px)`;
}
