const etoiles = document.querySelectorAll('.etoile');
const avisForm = document.getElementById('avisForm');
const submitBtn = document.getElementById('submitBtn');

etoiles.forEach((etoile, index) => {
    etoile.addEventListener('click', () => {
        etoiles.forEach((e, i) => {
            if (i <= index) {
                e.classList.add('allume');
            } else {
                e.classList.remove('allume');
            }
        });

        avisForm.style.display = 'block';
    });
});

submitBtn.addEventListener('click', () => {
    const avisText = document.getElementById('avisText').value;
    const auteur = document.getElementById('auteur').value;

    // Ajoutez le code pour traiter l'avis soumis, par exemple, l'envoyer à un serveur ou le stocker localement.

    // Réinitialisez le formulaire après la soumission
    avisForm.style.display = 'none';
    etoiles.forEach(e => e.classList.remove('allume'));
    document.getElementById('avisText').value = '';
    document.getElementById('auteur').value = '';
});
