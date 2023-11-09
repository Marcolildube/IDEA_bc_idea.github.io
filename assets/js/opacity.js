const boxes = document.querySelectorAll('.box');

function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;

        if (boxPosition - windowHeight * 0.5 < 0) {
            box.classList.add('opacity-visible');
        } else {
            box.classList.remove('opacity-visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
