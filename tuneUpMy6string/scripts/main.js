const audioFilesStan = [
  new Audio("audio/lowe.mp3"),
  new Audio("audio/String5A.mp3"),
  new Audio("audio/String4D.mp3"),
  new Audio("audio/String3G.mp3"),
  new Audio("audio/String2B.mp3"),
  new Audio("audio/String1HE.mp3"),
];

const mySix = document.querySelectorAll(".string");
const eStdBtnArr = [];

for (let i = 0; i < 6; i++) {
  const el = document.getElementById(`E${i + 1}`);
  el.style.visibility = "hidden";
  eStdBtnArr.push(el);
}

//establish state
let menu = document.getElementById("eStdMenu");

//listen click on menu, update state
menu.onchange = updateMenu;

//identify what option is selected
//set state to corresponding audio
function updateMenu() {
  if (menu.value === "e1") {
    //=== or == comparative = is declarative
    audios = audioFilesStan;
    notePics = eStdBtnArr;
  }
  if (menu.value === "0") {
    audios = null;
  }
}

//play audio- can target any audios
for (let i = 0; i < mySix.length; i++) {
  mySix[i].addEventListener("click", () => {
    audios[i].play();
    notePics[i].style.visibility = "visible";
    setTimeout(function(){notePics[i].style.visibility = "hidden";}, 1000)
  });
}