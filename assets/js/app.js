$(document).ready(function () {
    $('#carouselExample').carousel();
});


// Utilisation de l'Intersection Observer pour déclencher l'animation au fur et à mesure que vous faites défiler la page

const boxes = document.querySelectorAll(".slyde");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
        } else {
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateX(20px)";
        }
    });
});

boxes.forEach((slyde) => {
    slyde.style.opacity = "0";
    slyde.style.transform = "translateY(20px)";
    observer.observe(slyde);
});




$(document).ready(function(){
    // Initialiser le carrousel
    $('.slick-slider').slick({
        infinite: true, // Carrousel infini
        slidesToShow: 1, // Afficher un seul avis à la fois
        slidesToScroll: 1, // Faire défiler un seul avis à la fois
        autoplay: true, // Activer la lecture automatique
        autoplaySpeed: 3000, // Durée de l'animation en millisecondes (3 secondes ici)
        arrows: false, // Masquer les flèches de navigation
        dots: false // Masquer les indicateurs de pagination
    });
});


