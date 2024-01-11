const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const mySix = documentquery.selectorAll("stringSix")

mySix.forEach(stringSix => {
  stringSix.addEventListener("click", () => {
    audio.play();
  });
});


console.log (mySix)

