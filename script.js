document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.style-1');
    
    // Создаем аудио элемент для звука
    const heartSound = new Audio();
    heartSound.src = 'heart-sound.mp3';
    heartSound.preload = 'auto';
    
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Воспроизводим звук
      heartSound.currentTime = 0;
      heartSound.play().catch(e => console.log("Autoplay prevented: ", e));
      
      // Создаем 15-25 сердечек
      const heartCount = 15 + Math.floor(Math.random() * 10);
      const colors = ['#ff69b4', '#ff1493', '#ff85a2', '#ffb6c1', '#db7093'];
      
      for (let i = 0; i < heartCount; i++) {
        setTimeout(() => createHeartBubble(colors), i * 200);
      }
    });
    
    function createHeartBubble(colors) {
      const heart = document.createElement('div');
      heart.className = 'heart-bubble';
      
      // Случайные параметры
      const size = 30 + Math.random() * 30;
      const startX = Math.random() * window.innerWidth;
      const duration = 3 + Math.random() * 3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // CSS-переменные для анимации
      heart.style.cssText = `
        --random-x: ${(Math.random() - 0.5) * 200};
        left: ${startX}px;
        width: ${size}px;
        height: ${size}px;
        animation-duration: ${duration}s;
        filter: drop-shadow(0 0 5px ${color});
      `;
      
      document.body.appendChild(heart);
      
      // Удаляем сердечко после анимации
      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }
  })