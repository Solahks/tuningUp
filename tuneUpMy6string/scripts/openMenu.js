const audioFilesOpenA = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesOpenB = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesOpenC = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesOpenD = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesOpenE = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesOpenF = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesOpenG = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const mySixOp = document.querySelectorAll(".string");

//visual notes
// const eStdBtnArr = [];
// for (let i = 0; i < 6; i++) {
//   const el = document.getElementById(`E${i + 1}`);
//   el.style.visibility = "hidden";
//   eStdBtnArr.push(el);
// }

//establish state
let openMenu = document.getElementById("openMenu");

//listen click on menu, update state
openMenu.onchange = updateOpenMenu;

//identify what option is selected
//set state to corresponding audio
function updateOpenMenu() {
  if (openMenu.value === "o1") {
    audios = null;
    menu.disabled = false;
    regMenu.disabled = false;
    dropMenu.disabled = false;
  }
  if (openMenu.value === "o2") {
    audios = audioFilesOpenA;
    menu.disabled = true;
    regMenu.disabled = true;
    dropMenu.disabled = true;
  }
  if (openMenu.value === "o3") {
    audios = audioFilesOpenB;
    menu.disabled = true;
    regMenu.disabled = true;
    dropMenu.disabled = true;
  }
  if (openMenu.value === "o4") {
    audios = audioFilesOpenC;
    menu.disabled = true;
    regMenu.disabled = true;
    dropMenu.disabled = true;
  }
  if (openMenu.value === "o5") {
    audios = audioFilesOpenD;
    menu.disabled = true;
    regMenu.disabled = true;
    dropMenu.disabled = true;
  }
  if (openMenu.value === "o6") {
    audios = audioFilesOpenE;
    menu.disabled = true;
    regMenu.disabled = true;
    dropMenu.disabled = true;
  }
  if (openMenu.value === "o7") {
    audios = audioFilesOpenF;
    menu.disabled = true;
    regMenu.disabled = true;
    dropMenu.disabled = true;
  }
  if (openMenu.value === "o8") {
    audios = audioFilesOpenG;
    menu.disabled = true;
    regMenu.disabled = true;
    dropMenu.disabled = true;
  }
}

//play audio- can target any audios
for (let i = 0; i < mySixOp.length; i++) {
  mySixOp[i].addEventListener("click", () => {
    audios[i].play();
    //   notePics[i].style.visibility = "visible";
    //   setTimeout(function () {
    //     notePics[i].style.visibility = "hidden";
    //   }, 1000);
  });
}
