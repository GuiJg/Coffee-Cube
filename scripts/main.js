
const menu = document.getElementById("header-coffee"); 
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

const menuButton = document.querySelector('input');
const headerMenu = document.querySelector('.header-menu');
  
menuButton.addEventListener('click', function() {
    headerMenu.classList.toggle('active');
});

const menuButto = document.querySelector('input');
const headerMen = document.querySelector('header');
  
menuButto.addEventListener('click', function() {
    headerMen.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('#splide1', {
        perPage: 3,
        rewind: true,
        rewindByDrag: true,
        drag: true,
        speed: 1000,
    });splide.mount();

    // checkWidth();

    // window.addEventListener('resize', checkWidth);

    // function checkWidth() {
    //     if (window.matchMedia('(max-width: 1000px)').matches) {
    //         splide.options.perPage = 1;
    //     } else {
    //         splide.options.perPage = 3;
    //     }

    //     splide.destroy();
    //     splide = new Splide('#splide1', splide.options).mount();
    // }
});

// document.addEventListener('DOMContentLoaded', function () {
//     const splide = new Splide('#splide2', {
//         grid: {
//             rows: 2,
//             gap: {
//                 row: '1rem',
//             },
//         },
//     }).mount({ Grid: SplideGrid });

//     splide.mount();
// });

const textElement = document.getElementById('animated-text');
const words = ['café...', 'Coffee Cube'];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        textElement.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200);
    } else {
        setTimeout(erase, 500);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.innerHTML = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 150);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

type();