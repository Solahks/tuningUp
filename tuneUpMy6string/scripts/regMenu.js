const audioFilesMajorSeconds = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesMinorThirds = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesMajorThirds = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesAllFourths = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesAugmentedFourths = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const mySixReg = document.querySelectorAll(".string");

//visual notes
// const eStdBtnArr = [];
// for (let i = 0; i < 6; i++) {
//   const el = document.getElementById(`E${i + 1}`);
//   el.style.visibility = "hidden";
//   eStdBtnArr.push(el);
// }

//establish state
let regMenu = document.getElementById("regMenu");

//listen click on menu, update state
regMenu.onchange = updateRegMenu;

//identify what option is selected
//set state to corresponding audio
function updateRegMenu() {
  if (regMenu.value === "r1") {
    audios = null;
    menu.disabled = false;
    openMenu.disabled = false;
    dropMenu.disabled = false;
  }
  if (regMenu.value === "r2") {
    audios = audioFilesMajorSeconds;
    menu.disabled = true;
    openMenu.disabled = true;
    dropMenu.disabled = true;
  }
  if (regMenu.value === "r3") {
    audios = audioFilesMinorThirds;
    menu.disabled = true;
    openMenu.disabled = true;
    dropMenu.disabled = true;
  }
  if (regMenu.value === "r4") {
    audios = audioFilesMajorThirds;
    menu.disabled = true;
    openMenu.disabled = true;
    dropMenu.disabled = true;
  }
  if (regMenu.value === "r5") {
    audios = audioFilesAllFourths;
    menu.disabled = true;
    openMenu.disabled = true;
    dropMenu.disabled = true;
  }
  if (regMenu.value === "r6") {
    audios = audioFilesAugmentedFourths;
    menu.disabled = true;
    openMenu.disabled = true;
    dropMenu.disabled = true;
  }
}

//play audio- can target any audios
for (let i = 0; i < mySixReg.length; i++) {
  mySixReg[i].addEventListener("click", () => {
    audios[i].play();
    //   notePics[i].style.visibility = "visible";
    //   setTimeout(function () {
    //     notePics[i].style.visibility = "hidden";
    //   }, 1000);
  });
}
