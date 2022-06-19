const a_up = document.querySelector(".a_up");
const a_reset = document.querySelector(".a_reset");
let a_point = document.querySelector(".a_point");
const b_up = document.querySelector(".b_up");
const b_reset = document.querySelector(".b_reset");
let b_point = document.querySelector(".b_point");

let aScore = 0;
let bScore = 0;

let winScore = document.querySelector("winning_score");



function countA() {
  a_up.addEventListener("click", () => {
    aScore++;
    a_point.textContent = aScore;
  });
  
  //変数ごと初期化
  a_reset.addEventListener("click", () => {
    aScore = 0;
    a_point.textContent = aScore;
  });
}

countA();

function countB() {
  b_up.addEventListener("click", () => {
    bScore++;
    b_point.textContent = bScore;
  });
  
  //変数ごと初期化
  b_reset.addEventListener("click", () => {
    bScore = 0;
    b_point.textContent = bScore;
  });
}

countB();

//dropdown menu
let  = document.querySelector(".score_setting");
let menuBtn = document.querySelector(".dropdown_menu");
let menuItems = document.querySelector(".dropdown_items");    //ul要素
let item = document.querySelectorAll(".dropdown_item");　　//li要素

// let item21 = document.querySelector ("dropdown_item21");
  //when you click the score menu
  menuBtn.addEventListener("click", () => {
    //メニュー一覧をtoggle
    menuItems.classList.toggle("active");
  });



let convertedArr = Array.from(menuItems);//queryselectorAllを
item.forEach((menuitem) => {　//"li"の複数要素をそれぞれ処理していく
  menuitem.addEventListener("click", (e) => {
    //menuItemsの各要素を取得できました
    // console.log(menuitem);
    winScore = 0;
    winScore.textContent = menuitem;

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