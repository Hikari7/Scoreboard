const a_up = document.querySelector(".a_up");
const a_reset = document.querySelector(".a_reset");
let a_player = document.querySelector(".a_player");
const b_up = document.querySelector(".b_up");
const b_reset = document.querySelector(".b_reset");
let b_player = document.querySelector(".b_player");


let scoreBoard = {
   aScore: 0,
   bScore: 0,
  //  winningScore: null
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

let scoreSet = document.querySelector(".score_setting");
let menuBtn = document.querySelector(".dropdown_menu");
let menuItems = document.querySelector(".dropdown_items");
let item = document.querySelectorAll(".dropdown_item");

// let item21 = document.querySelector ("dropdown_item21");

//functionで囲う必要なくない？
function openItems() {
  //when you click the score menu
  menuBtn.addEventListener("click", () => {
    //メニュー一覧をtoggle
    menuItems.classList.toggle("active");
  });
}
openItems();

console.log(menuItems);

let convertedArr = Array.from(menuItems);
item.forEach((menuitem) => {
  menuitem.addEventListener("click", (e) => {
    //menuItemsの各要素を取得できました
    console.log(menuitem);

// function selectScore() {
// }
  // 各itemのquerySelectorAllを配列に変える


      //value属性で取得する
      // let winningScore = this.menuItems.innerHTML;
      // convertedArr.getAttribute("value"); 

      
      
      //spanか何かでスコアを表示させて、innerHTMLで撮ってくる→スコア表示
      //elをif分で作りながら((p1Score < winPointsみたいに)最終的にtextContentでwonって出す
      

      // scoreBoard.winningScore = parseInt(item.item);
      // console.log(scoreBoard.winningScore);


    });
  });

  // item21.addEventListener('click', () => {
  //   console.log("got the value");
  // })

// selectScore();