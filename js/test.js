document.addEventListener("DOMContentLoaded", () => {
    const align = document.querySelector("#testimonials .align");
    const produits = document.querySelectorAll("#testimonials .produit");
    const totalProduits = produits.length;
    let currentIndex = 0;

    const updateCarousel = () => {
        const width = produits[0].clientWidth + 20; // Largeur d'un élément + marge
        align.style.transform = `translateX(-${currentIndex * width}px)`;
    };

    const next = () => {
        if (currentIndex < totalProduits - 3) {
            currentIndex++;
        } else {
            currentIndex = 0; // Retour au début
        }
        updateCarousel();
    };

    const prev = () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalProduits - 3; // Aller à la fin
        }
        updateCarousel();
    };

    document.querySelector(".btn.left").addEventListener("click", prev);
    document.querySelector(".btn.right").addEventListener("click", next);

    // Défilement automatique toutes les 3 secondes
    setInterval(next, 3000);
});
