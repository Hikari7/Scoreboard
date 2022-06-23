const a_up = document.querySelector(".a_up");
let a_point = document.querySelector(".a_point");
let a_down = document.querySelector(".a_down");
const b_up = document.querySelector(".b_up");
let b_point = document.querySelector(".b_point");
let b_down = document.querySelector(".b_down");
const reset = document.querySelector(".reset");

let aScore = 0;
let bScore = 0;

//dropdown menu
let = document.querySelector(".score_setting");
let menuBtn = document.querySelector(".dropdown_menu");
let menuItems = document.querySelector(".dropdown_items"); //ul要素
let item = document.querySelectorAll(".dropdown_item"); //li要素
// let item21 = document.querySelector ("dropdown_item21");

//set the winning score:
let winScore = document.querySelector(".winning_score");
//spanタグのスコア表示

function restartGame() {
  aScore = 0;
  bScore = 0;
  a_up.classList.remove("deactivate");
  b_up.classList.remove("deactivate");
}

//when you click the score menu

//メニュー一覧をtoggle
menuBtn.addEventListener("click", () => {
  menuItems.classList.toggle("active");
  restartGame();
});

// console.log(winScore);
let convertedArr = Array.from(item); //li要素のqueryselectorAllを
convertedArr.forEach((li) => {
  //"li"の複数要素をそれぞれ処理していく
  li.addEventListener("click", () => {
    //get the element of menuItems(item)
    //set the winning score:
    winScore.innerHTML = li.textContent; //item("li")要素のvalue属性をwinScoreに表示
    menuItems.classList.remove("active"); //close the menu
    // console.log(winScore);
  });
});

a_up.addEventListener("click", () => {
  aScore++;
  a_point.textContent = aScore; //aの表示されているScore
  if (aScore == winScore.textContent) {
    //winScoreはtext.contentにしてNodeだったものを要素にアクセスし変換する
    // console.dir(a_point);
    a_point.textContent = "Win!";
    b_point.textContent = "Lose";

    a_up.classList.add("deactivate");
    b_up.classList.add("deactivate");
    a_down.classList.add("deactivate");
    b_down.classList.add("deactivate");
  }
});

b_up.addEventListener("click", () => {
  bScore++;
  b_point.textContent = bScore;

  if (bScore == winScore.textContent) {
    b_point.textContent = "Win!";
    a_point.textContent = "Lose";
    a_up.classList.add("deactivate");
    b_up.classList.add("deactivate");
    a_down.classList.add("deactivate");
    b_down.classList.add("deactivate");
  }
});

a_down.addEventListener("click", () => {
  if (a_point.textContent > "0") {
    aScore--;
    a_point.textContent = aScore;
  } else {
    a_down.classList.add("deactivate");
  }
});

b_down.addEventListener("click", () => {
  if (b_point.textContent > "0") {
    bScore--;
    b_point.textContent = bScore;
  } else {
    b_down.classList.add("deactivate");
  }
});

reset.addEventListener("click", () => {
  aScore = 0;
  a_point.textContent = aScore;
  bScore = 0;
  b_point.textContent = bScore;
});
