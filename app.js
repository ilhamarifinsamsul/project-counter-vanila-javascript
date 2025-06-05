const countValue = document.getElementById("value");
const countDecrement = document.getElementById("decrement");
const countIncrement = document.getElementById("increment");

let count = 0;

countValue.textContent = count;

countIncrement.addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});

countDecrement.addEventListener("click", () => {
  count--;
  countValue.textContent = count;
});
