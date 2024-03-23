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

// const myEStd = [
//   (document.getElementById("E1").style.visibility = "hidden"),
//   (document.getElementById("E2").style.visibility = "hidden"),
//   (document.getElementById("E3").style.visibility = "hidden"),
//   (document.getElementById("E4").style.visibility = "hidden"),
//   (document.getElementById("E5").style.visibility = "hidden"),
//   (document.getElementById("E6").style.visibility = "hidden"),
// ];
// console.log(myEStd[0]);


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
  if (menu.value === "1") {
    //=== or == comparative = is declarative
    audios = audioFilesStan;
    notePics = eStdBtnArr;
  }
  if (menu.value === "2") {
    notePics = null;
    audios = audioFilesOpenA;
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


// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
