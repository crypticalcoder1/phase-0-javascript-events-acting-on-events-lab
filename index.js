// Your code here,
// Step 1: Grab the dodger element from the DOM
const dodger = document.getElementById("dodger");

// Step 2: Define moveDodgerLeft function
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Step 3: Define moveDodgerRight function
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // 400 (game width) - 40 (dodger width)
    dodger.style.left = `${left + 1}px`;
  }
}

// Step 4: Add event listener for keydown events
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});

