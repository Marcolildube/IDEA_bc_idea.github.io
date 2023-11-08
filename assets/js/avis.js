const stars = document.querySelectorAll('.star');
const reviewForm = document.querySelector('.review-form');
const authorInput = document.querySelector('#author');
const reviewInput = document.querySelector('#review');
const reviewFormElement = document.querySelector('#review-form');
const reviewsContainer = document.querySelector('.reviews-container');

let selectedRating = 0;

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        selectedRating = index + 1;

        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('selected');
        }

        for (let i = index + 1; i < stars.length; i++) {
            stars[i].classList.remove('selected');
        }

        reviewForm.style.display = 'block';
    });
});

reviewFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const author = authorInput.value;
    const review = reviewInput.value;

    if (selectedRating > 0 && author && review) {
        // Créez un élément pour afficher l'avis dans la liste des avis.
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `<strong>${author} a donné ${selectedRating} étoiles :</strong><p>${review}</p>`;
        reviewsContainer.insertBefore(reviewItem, reviewsContainer.firstChild);

        // Réinitialisez le formulaire.
        authorInput.value = '';
        reviewInput.value = '';
        reviewForm.style.display = 'none';
        selectedRating = 0;
    }
});
