const themeToggle = document.getElementById('themeToggle');
        const starsContainer = document.getElementById('starsContainer');

        // Create random stars inside toggle
        function createStars() {
            for (let i = 0; i < 30; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                const size = Math.random() * 2 + 1;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 2 + 's';
                star.style.animationDuration = (Math.random() * 3 + 2) + 's';
                
                starsContainer.appendChild(star);
            }
        }

        createStars();

        // Toggle functionality
        themeToggle.addEventListener('click', () => {
            themeToggle.classList.toggle('night');
        });

        // Keyboard support
        themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                themeToggle.click();
            }
        });