const a_up = document.querySelector(".a_up");
const a_reset = document.querySelector(".a_reset");
const a_player = document.querySelector(".a_player");
const b_up = document.querySelector(".b_up");
const b_reset = document.querySelector(".b_reset");
const b_player = document.querySelector(".b_player");

let aScore = 0;
let bScore = 0;

function countA() {
  a_up.addEventListener("click", () => {
    aScore++;
    console.log(a_up);
    a_player.textContent = aScore;
  });

  a_reset.addEventListener("click", () => {
    a_player.textContent = 0;
  });
}

countA();

function countB() {
  b_up.addEventListener("click", () => {
    bScore++;
    console.log(a_up);
    b_player.textContent = bScore;
  });

  b_reset.addEventListener("click", () => {
    b_player.textContent = 0;
  });
}

countB();

//dropdown menu

const scoreSet = document.querySelector(".score_setting");
const menuBtn = document.querySelector(".dropdown_menu");
const menuItems = document.querySelector(".dropdown_items");
const item = document.querySelectorAll(".dropdown_item");

function openItems() {
  //when you click the score menu
  menuBtn.addEventListener("click", () => {
    // item.classList.add(".open");
    // menuBtn.classList.add("hidden");
    menuItems.classList.toggle("active");

    //querySelectorAllを配列に変える
    // const convertedArr = Array.from(item);
    // convertedArr.forEach((items) => {
    //   console.log(item);
    //   item.addEventListener("click", () => {
    //     item.parentNode.classList.toggle("active");
    //   });

    // });
  });
}

openItems();
