const boxes = document.querySelectorAll('.box');

function handleScroll() {
    const windowHeight = window.innerHeight;

    boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const boxHeight = box.offsetHeight;

        // Calcul de la position où 50% du box est visible
        const halfBox = boxHeight * 0.75;

        // Condition pour vérifier si plus de 50% du box est visible ou non
        if (boxPosition < windowHeight - halfBox && boxPosition + boxHeight > halfBox) {
            box.classList.add('opacity-visible');
        } else {
            box.classList.remove('opacity-visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

