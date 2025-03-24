// script.js
document.getElementById("play-button").addEventListener("click", function() {
    var audio = document.getElementById("click-sound");
    audio.play();

    // Задержка перед перенаправлением (например, 1000 мс = 1 секунда)
    setTimeout(function() {
        window.location.href = 'ttt.html';
    }, 500); // Замените 1000 на нужную вам продолжительность в миллисекундах
});