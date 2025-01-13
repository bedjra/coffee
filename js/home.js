document.addEventListener('DOMContentLoaded', () => {
    const contentHome = document.querySelector('.contenthome');
    const mediaImage = document.querySelector('.media img');
    const expButton = document.querySelector('.exp');
    const explButton = document.querySelector('.expl');
    const textElements = contentHome.querySelectorAll('span, h4, p');
    const triggerElement = document.getElementById('home'); // Remplacez "home" par l'ID de votre déclencheur

    // Fonction pour réinitialiser les styles avant l'animation
    function resetStyles() {
        contentHome.style.opacity = '0';
        contentHome.style.transform = 'translateY(50px)';
        mediaImage.style.opacity = '0';
        mediaImage.style.transform = 'scale(0.8)';
        textElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
        });
    }

    // Fonction pour jouer les animations
    function playAnimation() {
        // Animation de la section de texte
        setTimeout(() => {
            contentHome.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            contentHome.style.opacity = '1';
            contentHome.style.transform = 'translateY(0)';
        }, 200);

        // Animation des éléments individuels de texte
        textElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.transition = `opacity 0.8s ease-out ${index * 0.2}s, transform 0.8s ease-out ${index * 0.2}s`;
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 400);
        });

        // Animation de l'image
        setTimeout(() => {
            mediaImage.style.transition = 'opacity 1.5s ease-out, transform 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
            mediaImage.style.opacity = '1';
            mediaImage.style.transform = 'scale(1)';
        }, 800);
    }

    // Animation initiale lors du chargement de la page
    resetStyles();
    playAnimation();

    // Réanimer sur clic de l'élément avec l'ID
    triggerElement.addEventListener('click', () => {
        resetStyles(); // Réinitialiser les styles
        playAnimation(); // Rejouer l'animation
    });

    // Réanimer lors du survol des éléments avec le curseur
    const elementsToAnimate = [contentHome,  ...textElements, expButton, explButton];
    elementsToAnimate.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (el.style.pointerEvents !== 'none') { // Vérifier si l'élément est interactif
                resetStyles(); // Réinitialiser les styles
                playAnimation(); // Rejouer l'animation
            }
        });
    });

    
});
