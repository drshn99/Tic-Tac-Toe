let turn = "X";
let isgameOver = false;
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, 5, 5, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 5, 25, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + " Won";
      isgameOver = true;
      document.querySelector("img").style.width = "200px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "20vw";
      document.querySelector(".line").style.height = "2px";
      document.querySelector(".line").style.backgroundColor = "black";
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!isgameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  //   document.getElementsByClassName("info")[0].innerText = "Turn for X";
  //   boxes.innerText = " ";
  // console.log("hello");
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameOver = false;

  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector("img").style.width = "0px";
  document.querySelector(".line").style.width = "0vw";
  document.querySelector(".line").style.height = "0px";
  document.querySelector(".line").style.backgroundColor = "white";
});
