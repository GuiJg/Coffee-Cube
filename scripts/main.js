const menu = document.getElementById("header-coffee"); // colocar em cache
window.addEventListener("scroll", function () {

    if (window.scrollY > 0) {
        menu.classList.add("header-scroll");
        for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {

        }
    } else {
        menu.classList.remove("header-scroll");
        for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {

        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.splide', {
        perPage: 3,
        rewind: true,
        rewindByDrag: true,
        drag: true,
        speed: 1000,
    });

    splide.mount();
});

