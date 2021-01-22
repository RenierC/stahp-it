// chooses a random sound file from public from a predetermined list
export const playRandomSound = () => {
  let sound0 = new Audio("/stopit0.mp3");
  let sound1 = new Audio("/stopit1.mp3");
  let sound2 = new Audio("/stopit2.mp3");
  let sound3 = new Audio("/stopit3.mp3");
  let sound4 = new Audio("/stopit4.mp3");
  let sound5 = new Audio("/stopit5.mp3");

  let max = 6;
  let randomNumber = Math.floor(Math.random() * Math.floor(max));

  switch (randomNumber) {
    case 0:
      console.log("You got 0");
      sound0.play();
      break;
    case 1:
      console.log("You got 1");
      sound1.play();
      break;
    case 2:
      console.log("You got 2");
      sound2.play();
      break;
    case 3:
      console.log("You got 3");
      sound3.play();
      break;
    case 4:
      console.log("You got 4");
      sound4.play();
      break;
    case 5:
      console.log("You got 5");
      sound5.play();
      break;
    default:
      console.log("nothing");
      break;
  }
};
