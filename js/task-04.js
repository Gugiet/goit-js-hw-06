let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");

function updateView() {
  valueSpan.textContent = counterValue;
}

decrementBtn.addEventListener("click", function () {
  counterValue -= 1;
  updateView();
});

incrementBtn.addEventListener("click", function () {
  counterValue += 1;
  updateView();
});

updateView();
