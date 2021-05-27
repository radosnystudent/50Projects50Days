const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	counter.innerText = "0";

	const updateCounter = () => {
		const target = Number(counter.getAttribute("data-target"));
		const actualCounterValue = Number(counter.innerText);

		const increment = target / 200;
		if (actualCounterValue < target) {
			counter.innerText = `${Math.ceil(actualCounterValue + increment)}`;
			setTimeout(updateCounter, 10);
		} else {
			counter.innerText = target;
		}
	};

	updateCounter();
});
