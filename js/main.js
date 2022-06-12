const up = document.querySelectorAll("up");
const down = document.querySelectorAll("down");

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

