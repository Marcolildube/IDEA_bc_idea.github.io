document.addEventListener("DOMContentLoaded", function() {
    const line = document.querySelector(".line");
    const dot = document.querySelector(".dot");

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.clientHeight;
        const lineHeight = documentHeight - windowHeight;
        const linePosition = (scrollPosition / lineHeight) * 100;
        
        line.style.height = linePosition + "%";
        dot.style.top = linePosition + "%";
    });
});
