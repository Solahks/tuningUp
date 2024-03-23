const audioFilesDropD = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesDropCSharp = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesDropC = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesDropB = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesDropASharp = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesDropA = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesDropGSharp = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesDropFSharp = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesDropF = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesDropE = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const audioFilesDropDSharp = [
  new Audio("audioOpenA/String6LE.mp3"),
  new Audio("audioOpenA/String5A.mp3"),
  new Audio("audioOpenA/String4C.mp3"),
  new Audio("audioOpenA/String3E.mp3"),
  new Audio("audioOpenA/String2A.mp3"),
  new Audio("audioOpenA/String1HE.mp3"),
];

const mySixDrop = document.querySelectorAll(".string");

//visual notes
// const eStdBtnArr = [];
// for (let i = 0; i < 6; i++) {
//   const el = document.getElementById(`E${i + 1}`);
//   el.style.visibility = "hidden";
//   eStdBtnArr.push(el);
// }

//establish state
let dropMenu = document.getElementById("dropMenu");

//listen click on menu, update state
dropMenu.onchange = updateDropMenu;

//identify what option is selected
//set state to corresponding audio
function updateDropMenu() {
  if (dropMenu.value === "d1") {
    audios = null;
    menu.disabled = false;
    openMenu.disabled = false;
    regMenu.disabled = false;
  }
  if (dropMenu.value === "d2") {
    audios = audioFilesDropD;
    menu.disabled = true;
    openMenu.disabled = true;
    regMenu.disabled = true;

  }
  if (dropMenu.value === "d3") {
    audios = audioFilesDropCSharp;
    menu.disabled = true;
    openMenu.disabled = true;
    regMenu.disabled = true;
  }
  if (dropMenu.value === "d4") {
    audios = audioFilesDropC;
    menu.disabled = true;
    openMenu.disabled = true;
    regMenu.disabled = true;
  }
  if (dropMenu.value === "d5") {
    audios = audioFilesDropB;
    menu.disabled = true;
    openMenu.disabled = true;
    regMenu.disabled = true;
  }
  if (dropMenu.value === "d6") {
    audios = audioFilesDropASharp;
    menu.disabled = true;
    openMenu.disabled = true;
    regMenu.disabled = true;
  }
  if (dropMenu.value === "d7") {
    audios = audioFilesDropA;
    menu.disabled = true;
    openMenu.disabled = true;
    regMenu.disabled = true;
  }
  if (dropMenu.value === "d8") {
    audios = audioFilesDropGSharp;
    menu.disabled = true;
    openMenu.disabled = true;
    regMenu.disabled = true;
  }
  if (dropMenu.value === "d9") {
    audios = audioFilesDropFSharp;
    menu.disabled = true;
    openMenu.disabled = true;
    regMenu.disabled = true;
  }
  if (dropMenu.value === "d10") {
    audios = audioFilesDropF;
    menu.disabled = true;
    openMenu.disabled = true;
    regMenu.disabled = true;
  }
  if (dropMenu.value === "d11") {
    audios = audioFilesDropE;
    menu.disabled = true;
    openMenu.disabled = true;
    regMenu.disabled = true;
  }
  if (dropMenu.value === "d12") {
    audios = audioFilesDropDSharp;
    menu.disabled = true;
    openMenu.disabled = true;
    regMenu.disabled = true;
  }
}

//play audio- can target any audios
for (let i = 0; i < mySixDrop.length; i++) {
  mySixDrop[i].addEventListener("click", () => {
    audios[i].play();
    //   notePics[i].style.visibility = "visible";
    //   setTimeout(function () {
    //     notePics[i].style.visibility = "hidden";
    //   }, 1000);
  });
}
