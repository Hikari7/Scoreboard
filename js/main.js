const a_up = document.querySelector(".a_up");
const a_reset = document.querySelector(".a_reset");
const a_player = document.querySelector(".a_player");
const b_up = document.querySelector(".b_up");
const b_reset = document.querySelector(".b_reset");
const b_player = document.querySelector(".b_player");

let i = 0;

function countA() {
  a_up.addEventListener("click", () => {
    i++;
    console.log(a_up);
    a_player.textContent = i;
  });

  a_reset.addEventListener("click", () => {
    a_player.textContent = 0;
  });
}

countA();

function countB() {
  b_up.addEventListener("click", () => {
    i++;
    console.log(a_up);
    b_player.textContent = i;
  });

  b_reset.addEventListener("click", () => {
    b_player.textContent = 0;
  });
}

countB();

//dropdown menu

const menu = document.querySelector(".dropdown_menu");
const item = document.querySelectorAll(".dropdown_item");

function openItems() {
  menu.addEventListener("click", () => {
    // item.classList.add(".open");

    const convertedArr = Array.from(item);

    convertedArr.forEach((item) => {
      item.classList.toggle("open"); 
    });
  });
}

openItems();
