// Floating Background Hearts Generator
function createHearts() {
  const heartBg = document.getElementById('heartBg');
  const heartSymbols = ['❤️', '💖', '💕', '🌸', '✨'];
  
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    
    heartBg.appendChild(heart);
  }
}

// Interactive Button Logic
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseMessage = document.getElementById('responseMessage');

// Runaway "Still Mad" button on hover/click
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);

function moveButton() {
  const x = Math.random() * (window.innerWidth - 120) - (window.innerWidth / 2 - 60);
  const y = Math.random() * 200 - 100;
  
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// "Yes" Button Action + Confetti
yesBtn.addEventListener('click', () => {
  responseMessage.style.display = 'block';
  responseMessage.innerHTML = 'Thank you for believing in me! ❤️ I promise to love you and protect your trust forever!';
  
  // Confetti Animation
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
});

// Initialize Floating Hearts
document.addEventListener('DOMContentLoaded', createHearts);
