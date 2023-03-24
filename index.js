var inst = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];

function dis() {
  document.querySelector("h1").innerHTML = "<em><strong>🎶🎵START🥁🎙</strong></em>";
}
for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    dis();
    var butinHTML = this.innerHTML;
    makeSound(butinHTML);
    animation(butinHTML);
  });
}
document.addEventListener("keydown", function(event) {
  dis();
  console.log(event.key);
  makeSound(event.key);
  animation(event.key);
});

function makeSound(akhil) {
  switch (akhil) {
    case "w":
      var audio0 = new Audio(inst[0]);
      audio0.play();
      break;
    case "a":
      var audio1 = new Audio(inst[1]);
      audio1.play();
      break;
    case "s":
      var audio2 = new Audio(inst[2]);
      audio2.play();
      break;
    case "d":
      var audio3 = new Audio(inst[3]);
      audio3.play();
      break;
    case "j":
      var audio4 = new Audio(inst[4]);
      audio4.play();
      break;
    case "k":
      var audio5 = new Audio(inst[5]);
      audio5.play();
      break;
    case "l":
      var audio6 = new Audio(inst[6]);
      audio6.play();
      break;
    default:
      console.log(akhil);
  }
}

function animation(keypres) {
  var anim = document.querySelector("." + keypres);
  anim.classList.toggle("pressed");
  setTimeout(function() {
    anim.classList.toggle("pressed");
  }, 100);
}
