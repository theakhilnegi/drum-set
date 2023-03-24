var inst = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];
var audio0 = new Audio(inst[0]);
var audio1 = new Audio(inst[1]);
var audio2 = new Audio(inst[2]);
var audio3 = new Audio(inst[3]);
var audio4 = new Audio(inst[4]);
var audio5 = new Audio(inst[5]);
var audio6 = new Audio(inst[6]);
document.querySelectorAll("button")[0].addEventListener("click", function() {
      document.querySelector("h1").innerHTML = "<em><strong>Start</strong></em>";
      audio0.play();

    })
    document.querySelectorAll("button")[1].addEventListener("click", function() {
        document.querySelector("h1").innerHTML = "<em><strong>Start</strong></em>";
        audio1.play();
      })
      document.querySelectorAll("button")[2].addEventListener("click", function() {
          document.querySelector("h1").innerHTML = "<em><strong>Start</strong></em>";
          audio2.play();
        })
        document.querySelectorAll("button")[3].addEventListener("click", function() {
            document.querySelector("h1").innerHTML = "<em><strong>Start</strong></em>";
            audio3.play();
          })
          document.querySelectorAll("button")[4].addEventListener("click", function() {
              document.querySelector("h1").innerHTML = "<em><strong>Start</strong></em>";
              audio4.play();
            })
            document.querySelectorAll("button")[5].addEventListener("click", function() {
                document.querySelector("h1").innerHTML = "<em><strong>Start</strong></em>";
                audio5.play();
              })
              document.querySelectorAll("button")[6].addEventListener("click", function() {
                  document.querySelector("h1").innerHTML = "<em><strong>Start</strong></em>";
                  audio6.play();
                })
