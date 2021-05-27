const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  if (currentActive < circles.length) {
    currentActive++;
  }
  updateBar();
});

prev.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
  }
  updateBar();
});

const updateBar = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");

  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }

  if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
};
