// const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
// const mySix = document.querySelectorAll("stringSix");

// mySix.forEach((stringSix) => {
  // mySix.addEventListener("click", () => {
  //   console.log("button got clicked")
  //   audio.play();
  // });
// });

// mySix.onclick = () => {
//   console.log("the button got clicked")
//   audio.play();
// };

// console.log(mySix);

const audio = new Audio("scripts/lowe.mp3");
console.log(audio)
const audioButton = document.getElementById("audio-button");

audioButton.addEventListener("click", () => {
  audio.play();
});
