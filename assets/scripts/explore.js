// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const img = document.querySelector("img");
  const button = document.querySelector("button");
  const text = document.querySelector("textarea");
  let voices = [];

  /**
   * Get the voices
   */
  function populateVoiceList() {
    voices = synth.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  /**
   * User clicks button
   */
  button.addEventListener("click", (event) => {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
    synth.speak(utterThis);

    // start speaking
    utterThis.addEventListener("start", (event) => {
      img.src = "assets/images/smiling-open.png";
    });

    // stop speaking
    utterThis.addEventListener("end", (event) => {
      img.src = "assets/images/smiling.png";
    });
  });
} 