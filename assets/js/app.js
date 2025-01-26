if (document.getElementById('menu')) {
    document.getElementById('menu-toggle').addEventListener('click', () => {
        const menu = document.getElementById('menu');
        menu.classList.toggle('hidden');
    });
    
    document.getElementById('years-toggle').addEventListener('click', () => {
        const yearsMenu = document.getElementById('years-menu');
        yearsMenu.classList.toggle('hidden');
    });
}

// Function to detect visibility on scroll
if (document.querySelectorAll('.card')) {
    document.addEventListener("DOMContentLoaded", function() {
        const cards = document.querySelectorAll('.card');
        
        function checkVisibility() {
            const windowHeight = window.innerHeight;
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < windowHeight - 150) {
                    card.classList.add('visible');
                }
            });
        }
        
        // Call function on scroll and on load
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // To ensure visibility on load
    });
    
}