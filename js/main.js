const a_up = document.querySelector(".a_up");
const a_reset = document.querySelector(".a_reset");
let a_point = document.querySelector(".a_point");
const b_up = document.querySelector(".b_up");
const b_reset = document.querySelector(".b_reset");
let b_point = document.querySelector(".b_point");

let aScore = 0;
let bScore = 0;

//dropdown menu
let = document.querySelector(".score_setting");
let menuBtn = document.querySelector(".dropdown_menu");
let menuItems = document.querySelector(".dropdown_items"); //ul要素
let item = document.querySelectorAll(".dropdown_item"); //li要素
// let item21 = document.querySelector ("dropdown_item21");

function allReset() {
  aScore = 0;
  bScore = 0;
  a_up.classList.remove("deactivate");
  b_up.classList.remove("deactivate");
}

// const answer = confirm("Do you want to play again?");
// if (answer) {
//   newGame();
// }  {
//   ("Nice game!");
// };
// continueGame();

// while(answer == true) {

//set the winning score:
let winScore = document.querySelector(".winning_score");
//spanタグのスコア表示

//when you click the score menu
menuBtn.addEventListener("click", () => {
  //メニュー一覧をtoggle
  menuItems.classList.toggle("active");
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


while(aScore > winScore || bScore > winScore) {

}

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
  }
});

b_up.addEventListener("click", () => {
  bScore++;
  b_point.textContent = bScore;

  if (bScore == winScore.textContent) {
    b_point.textContent = "Win!";
    a_point.textContent = "Lose";
    aScore = 0;
    bScore = 0;
  }
});



//reset each Scores:
a_reset.addEventListener("click", () => {
  aScore = 0;
  a_point.textContent = aScore;
  // bScore = 0;
  // b_point.textContent = bScore;
});

b_reset.addEventListener("click", () => {
  bScore = 0;
  b_point.textContent = bScore;
  // bScore = 0;
  // b_point.textContent = bScore;
});

// }
