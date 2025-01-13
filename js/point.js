document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel .align');
    const dots = document.querySelectorAll('.indicators .dot');
    const leftBtn = document.querySelector('.btn.left');
    const rightBtn = document.querySelector('.btn.right');

    let currentIndex = 0; // Index de l'image et du dot actuel
    const totalImages = dots.length; // Nombre total d'images et de dots

    // Fonction pour mettre à jour le défilement
    function updateCarousel(index) {
        // Déplace le carousel pour afficher l'image correspondante
        const width = document.querySelector('.carousel').offsetWidth;
        carousel.style.transform = `translateX(-${index * width}px)`;

        // Active le dot correspondant
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Fonction pour aller à l'image suivante
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages; // Boucle sur les images
        updateCarousel(currentIndex);
    }

    // Fonction pour aller à l'image précédente
    function prevSlide() {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateCarousel(currentIndex);
    }

    // Événement : bouton gauche
    leftBtn.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        prevSlide();
        restartAutoSlide();
    });

    // Événement : bouton droit
    rightBtn.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        nextSlide();
        restartAutoSlide();
    });

    // Événement : clic sur un dot
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            currentIndex = index; // Met à jour l'index en fonction du dot cliqué
            updateCarousel(currentIndex);
            restartAutoSlide();
        });
    });

    // Défilement automatique
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Fonction pour relancer le défilement automatique après une interaction
    function restartAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    // Initialisation : affiche la première image et active le premier dot
    updateCarousel(currentIndex);
});
