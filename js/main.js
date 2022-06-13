const a_up = document.querySelector(".a_up");
const a_reset = document.querySelector(".a_reset");
const a_player = document.querySelector(".a_player");
const b_up = document.querySelector(".b_up");
const b_reset = document.querySelector(".b_reset");
const b_player = document.querySelector(".b_player");

let a = 0;
let b = 0;

function countA() {
  a_up.addEventListener("click", () => {
    a++;
    console.log(a_up);
    a_player.textContent = a;
  });

  a_reset.addEventListener("click", () => {
    a_player.textContent = 0;
  });
}

countA();

function countB() {
  b_up.addEventListener("click", () => {
    b++;
    console.log(a_up);
    b_player.textContent = b;
  });

  b_reset.addEventListener("click", () => {
    b_player.textContent = 0;
  });
}

countB();

//dropdown menu

const score = document.querySelector(".score_setting");
const menu = document.querySelector(".dropdown_menu");
const item = document.querySelectorAll(".dropdown_item");

function openItems() {
  score.addEventListener("click", () => {
    // item.classList.add(".open");
    score.classList.remove("active");

    const convertedArr = Array.from(item);

    convertedArr.forEach((item) => {
      item.classList.toggle("active");
    });

    menu.classList.add("hidden");
  });
}

openItems();
