function arttir(){
    document.getElementById("sayac").innerHTML = add();
  }
  
  let add = (function () {
    let counter = 0;
    return function () {return counter += 1;}
  })();

  

  document.getElementById("resetbutton").addEventListener("click", function () {
    document.getElementById("sayac").innerHTML = "0"
})

let sayi = document.getElementById("sayac")
  degiskenSpan.textContent = document.getElementById("sayi")


    var audio = document.getElementById("relax");
    var playButton = document.getElementById("playButton");

    playButton.onclick = function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "Müziği Durdur";
        } else {
            audio.pause();
            playButton.textContent = "Müziği Çal";
        }
    };

    var audio = document.getElementById("classic");
    var playButton = document.getElementById("classicButton");

    playButton.onclick = function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "Müziği Durdur";
        } else {
            audio.pause();
            playButton.textContent = "Müziği Çal";
        }
    };

    var audio = document.getElementById("bird");
    var playButton = document.getElementById("birdButton");

    playButton.onclick = function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "Müziği Durdur";
        } else {
            audio.pause();
            playButton.textContent = "Müziği Çal";
        }
    };

