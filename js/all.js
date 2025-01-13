// Sélectionnez toutes les sections que vous voulez animer
const sections = document.querySelectorAll('.section');

// Créez un observateur d'intersection
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Si la section est dans la vue, ajoutez la classe 'visible' pour l'animer
            entry.target.classList.add('visible');
        } else {
            // Si la section n'est pas dans la vue, enlevez la classe 'visible'
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.5 // L'élément doit être à 50% visible pour être considéré comme intersecté
});

