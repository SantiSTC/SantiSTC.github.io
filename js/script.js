const spans = document.querySelectorAll(".dot");
let dotsCount = 1;
let increasing = true;

function animateDots() {
  spans.forEach((span) => {
    span.innerText = ".".repeat(dotsCount);
  });

  if (increasing) {
    dotsCount++;
  } else {
    dotsCount--;
  }

  if (dotsCount > 2) {
    increasing = false;
  } else if (dotsCount < 1) {
    increasing = true;
  }

  setTimeout(animateDots, 500);
}

animateDots();