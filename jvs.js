// В script.js
let isAudioAllowed = false;

function enableAudio() {
  isAudioAllowed = true;
}

document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.querySelector('.style-1');
  const clickSound = new Audio('click.wav');
  clickSound.preload = 'auto';
  clickSound.volume = 0.7;
  
  // Разрешаем звук при любом клике по странице
  document.addEventListener('click', function() {
    enableAudio();
  }, { once: true });
  
  playButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (isAudioAllowed) {
      clickSound.currentTime = 0;
      clickSound.play().catch(e => console.log("Audio play failed:", e));
    }
    
    setTimeout(() => {
      window.location.href = "token.html";
    }, 300);
  });
});