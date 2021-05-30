const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];

toggle.addEventListener("click", (e) => {
	const html = document.querySelector("html");

	toggle.innerHTML = html.classList.toggle("dark")
		? "Light mode"
		: "Dark mode";
});

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function setTime() {
	const now = new Date();
	const month = now.getMonth();
	const day = now.getDay();
	const date = now.getDate();
	const hour = now.getHours();
	const hourForClock = hour >= 13 ? hour % 12 : hour;
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	const ampm = hour >= 12 ? "PM" : "AM";
	const needleSecond = document.querySelector(".needle.second");
	const needleMinute = document.querySelector(".needle.minute");
	const needleHour = document.querySelector(".needle.hour");

	needleHour.style.transition = `${hour === 0 ? "none" : "all 0.5s ease-in"}`;

	needleMinute.style.transition = `${
		minutes === 0 ? "none" : "all 0.5s ease-in"
	}`;

	needleSecond.style.transition = `${
		seconds === 0 ? "none" : "all 0.5s ease-in"
	}`;

	hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(
		hourForClock,
		0,
		11,
		0,
		360
	)}deg)`;
	minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		59,
		0,
		360
	)}deg)`;
	secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		59,
		0,
		360
	)}deg)`;

	timeElement.innerHTML = `${hourForClock}:${
		minutes < 10 ? `0${minutes}` : minutes
	} ${ampm}`;

	dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();

setInterval(setTime, 1000);
