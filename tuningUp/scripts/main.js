const audioFilesStan = [
  new Audio("audio/lowe.mp3"),
  new Audio("audio/String5A.mp3"),
  new Audio("audio/String4D.mp3"),
  new Audio("audio/String3G.mp3"),
  new Audio("audio/String2B.mp3"),
  new Audio("audio/String1HE.mp3"),
];

const audioFilesOpenA = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const mySix = document.querySelectorAll(".string");

//establish state
let menu = document.getElementById("menuSelect");

//listen click on menu, update state
menu.onchange = updateMenu;

//identify what option is selected
//set state to corresponding audio
function updateMenu() {
  console.log(menu.value);
  if (menu.value === "1") { //=== or == comparative = is declarative 
    console.log("option1selected");
    audios = audioFilesStan;
  }
  if (menu.value === "2") {
    console.log("option2selected");
    audios = audioFilesOpenA;
  }
  if (menu.value === "default") {
    audios = null;
  }
}

//play audio- can target any audios
for (let i = 0; i < mySix.length; i++) {
  mySix[i].addEventListener("click", () => {
    audios[i].play();
  });
}

//original loop to just play standard strings no managed state
//*****************************************************************
// for (let i = 0; i < mySix.length; i++) {
//   mySix[i].addEventListener("click", () => {
//     audioFilesStan[i].play();
//   });
// }
