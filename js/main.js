const a_up = document.querySelector(".a_up");
const a_reset = document.querySelector(".a_reset");
let a_player = document.querySelector(".a_player");
const b_up = document.querySelector(".b_up");
const b_reset = document.querySelector(".b_reset");
let b_player = document.querySelector(".b_player");


let scoreBoard = {
   aScore: 0,
   bScore: 0,
   winningScore: null
}

function countA() {
  a_up.addEventListener("click", () => {
    scoreBoard.aScore++;
    a_player.textContent =scoreBoard.aScore;
  });

  a_reset.addEventListener("click", () => {
    a_player.textContent = 0;
  });
}

countA();

function countB() {
  b_up.addEventListener("click", () => {
    scoreBoard.bScore++;
    b_player.textContent = scoreBoard.bScore;
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
const item = document.querySelector(".dropdown_item");

const item21 = document.querySelector ("dropdown_item21");

function openItems() {
  //when you click the score menu
  menuBtn.addEventListener("click", () => {
    //メニュー一覧をtoggle
    menuItems.classList.toggle("active");
  });
}



function selectScore() {
  // 各itemのquerySelectorAllを配列に変える
  // const convertedArr = Array.from(item);
  // convertedArr.forEach((el) => {
    // item.addEventListener("click", (e) => {
    //   scoreBoard.winningScore = parseInt(item.item);

    //   console.log(scoreBoard.winningScore);
    // });
  // });

  // item21.addEventListener('click', () => {
  //   console.log("got the value");
  // })
}

openItems();
