const up = document.getElementById("up");
const down = document.getElementById("down");
const tomato = document.querySelector("tomato");
const blue = document.querySelector("blue");

let i = 0;

function countUp() {
  up.addEventListener("click", () => {
    i++;
    document.getElementById("num").textContent = i;
  });
}
countUp();

function countDown() {
  down.addEventListener("click", () => {
    i--;
    document.getElementById("num").textContent = i;
  });
}
countDown();

