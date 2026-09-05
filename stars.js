(function() {
    const layer = document.getElementById('starsLayer');
    const starCount = 800;
    const brightStarCount = 30;
    const dustCount = 150;
    const shootingStarCount = 5;

    const colors = ['#ffffff', '#aaccff', '#ffddaa', '#ffaaff', '#88ddff', '#ffcc88', '#cc88ff', '#aaffdd'];

    // Обычные звёзды
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2.5 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        star.style.background = color;
        
        star.style.setProperty('--duration', (Math.random() * 4 + 2) + 's');
        star.style.setProperty('--min-opacity', Math.random() * 0.3 + 0.1);
        star.style.setProperty('--max-opacity', Math.random() * 0.7 + 0.3);
        
        star.style.animationDelay = Math.random() * 5 + 's';
        
        if (Math.random() > 0.7) {
            star.style.boxShadow = `0 0 ${Math.random() * 6 + 2}px ${color}`;
        }
        
        layer.appendChild(star);
    }

    // Яркие звёзды
    for (let i = 0; i < brightStarCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-bright';
        
        const size = Math.random() * 4 + 3;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        const colors_bright = ['#ffffff', '#ccddff', '#ffeedd', '#ffddff'];
        const color = colors_bright[Math.floor(Math.random() * colors_bright.length)];
        star.style.background = color;
        star.style.boxShadow = `0 0 ${size * 3}px ${color}`;
        
        star.style.setProperty('--duration', (Math.random() * 3 + 3) + 's');
        star.style.animationDelay = Math.random() * 4 + 's';
        
        layer.appendChild(star);
    }

    // Падающие звёзды
    for (let i = 0; i < shootingStarCount; i++) {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        const startX = Math.random() * 80 + 10;
        const startY = Math.random() * 40 + 5;
        const travelX = (Math.random() * 300 + 200) * (Math.random() > 0.5 ? 1 : -1);
        const travelY = (Math.random() * 300 + 200);
        
        star.style.left = startX + '%';
        star.style.top = startY + '%';
        star.style.setProperty('--travel-x', travelX + 'px');
        star.style.setProperty('--travel-y', travelY + 'px');
        star.style.setProperty('--duration', (Math.random() * 4 + 3) + 's');
        star.style.animationDelay = (Math.random() * 15 + 5) + 's';
        
        layer.appendChild(star);
    }

    // Мелкие звёзды для глубины
    for (let i = 0; i < 500; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 0.8 + 0.2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.background = 'rgba(255,255,255,0.3)';
        star.style.setProperty('--duration', (Math.random() * 8 + 4) + 's');
        star.style.setProperty('--min-opacity', '0.05');
        star.style.setProperty('--max-opacity', '0.2');
        star.style.animationDelay = Math.random() * 10 + 's';
        
        layer.appendChild(star);
    }
})();
