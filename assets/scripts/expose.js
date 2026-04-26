// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.querySelector("select");
  const hornImg = document.querySelector("img[alt='No image selected']");
  const button = document.querySelector("button");
  const audio = document.querySelector("audio");
  const slider = document.querySelector("input");
  const volumeImg = document.querySelector("img[alt='Volume level 2']");

  
  const jsConfetti = new JSConfetti();

  /**
   * User selects a horn from dropdown
   */
  select.addEventListener("change", (event) => {
    let newImgSrc = "assets/images/no-image.png";
    let newAudioSrc = "";
    switch (event.target.value) {
      case "air-horn":
        newImgSrc = "assets/images/air-horn.svg";
        newAudioSrc = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        newImgSrc = "assets/images/car-horn.svg";
        newAudioSrc = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        newImgSrc = "assets/images/party-horn.svg";
        newAudioSrc = "assets/audio/party-horn.mp3";
        break;
    }

    hornImg.src = newImgSrc;
    audio.src = newAudioSrc;
  });

  /**
   * User slides volume slider
   */
  slider.addEventListener("input", (event) => {
    let volume = event.target.value;
    let maxVolume = event.target.max || 100;
    if (volume < 1) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = volume/maxVolume;
  });

  /**
   * User clicks play sound button
   */
  button.addEventListener("click", (event) => {
    if (audio.getAttribute("src") !== "") {
      audio.play();
    }

    if (select.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  }); 


}


