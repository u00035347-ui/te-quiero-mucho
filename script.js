function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = ['❤️', '💖', '✨', '🌸', '💕'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);

function toggleLetter() {
    const letter = document.getElementById('letter');
    letter.classList.toggle('open');
}

let count = 0;
function sendHug(e) {
    count++;
    document.getElementById('hugCounter').innerText = `Abrazos enviados hoy: ${count}`;

    for(let i = 0; i < 8; i++) {
        const burst = document.createElement('div');
        burst.innerText = '💖';
        burst.style.position = 'fixed';
        burst.style.left = e.clientX + 'px';
        burst.style.top = e.clientY + 'px';
        burst.style.fontSize = '24px';
        burst.style.pointerEvents = 'none';
        burst.style.transition = 'all 1s ease-out';
        document.body.appendChild(burst);

        setTimeout(() => {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 100 + 50;
            burst.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px) scale(0)`;
            burst.style.opacity = '0';
        }, 10);

        setTimeout(() => burst.remove(), 1000);
    }
}