const audioFilesStan = [
  new Audio("audio/lowe.mp3"),
  new Audio("audio/String5A.mp3"),
  new Audio("audio/String4D.mp3"),
  new Audio("audio/String3G.mp3"),
  new Audio("audio/String2B.mp3"),
  new Audio("audio/String1HE.mp3"),
];

const audioFilesOpenA = [
  new Audio("audio/lowe.mp3"),
  new Audio("audio/String5A.mp3"),
  new Audio("audio/String4D.mp3"),
  new Audio("audio/String3G.mp3"),
  new Audio("audio/String2B.mp3"),
  new Audio("audio/String1HE.mp3"),
];

const mySix = document.querySelectorAll(".string");
var tuningMenu = document.querySelector(".tuningMenu");

//loop audio files with buttons
for (let i = 0; i < mySix.length; i++) {
  mySix[i].addEventListener("click", () => {
    audioFilesStan[i].play();
  });
}

//loop audio files with buttons and change tunings
// for (let i = 0; i < mySix.length; i++) {
//   mySix[i].addEventListener("click", () => {
//     if (tuningMenu === ".tuningStandard") {
//       audioFilesStan[i].play();
//     } else if (tuningMenu === ".tuningMajorOpenA") {
//       console.log("hello");
//     }
//   });
// }

//To Do
//menu bar to change tuning? drop down? fixed?
//connect buttons to tuning menu
//Pic files appear for each time an audio file plays

//*************************************************************** *//
//bad way- but buttons, sounds work
// const audio6 = new Audio("audio/lowe.mp3");
// const audioButton6 = document.getElementById("audio-button6");

// audioButton6.addEventListener("click", () => {
//   audio6.play();
// });

// const audio5 = new Audio("audio/lowe.mp3");
// const audioButton5 = document.getElementById("audio-button5");
// audioButton5.addEventListener("click", () => {
//   audio5.play();
// });

// const audio4 = new Audio("audio/lowe.mp3");
// const audioButton4 = document.getElementById("audio-button4");

// audioButton4.addEventListener("click", () => {
//   audio4.play();
// });

// const audio3 = new Audio("audio/lowe.mp3");
// const audioButton3 = document.getElementById("audio-button3");

// audioButton3.addEventListener("click", () => {
//   audio3.play();
// });

// const audio2 = new Audio("audio/lowe.mp3");
// const audioButton2 = document.getElementById("audio-button2");

// audioButton2.addEventListener("click", () => {
//   audio2.play();
// });

// const audio1 = new Audio("audio/lowe.mp3");
// const audioButton1 = document.getElementById("audio-button1");

// audioButton1.addEventListener("click", () => {
//   audio1.play();
// });
