//scroll do header transparente 
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

//botão do navbar responsivo mobile
const menuButton = document.querySelector('input');
const headerMenu = document.querySelector('.header-menu');
  
menuButton.addEventListener('click', function() {
    headerMenu.classList.toggle('active');
});

//para quando clicar no botão do navbar o header ficar transparente e com blur 
const menuButto = document.querySelector('input');
const headerMen = document.querySelector('header');
  
menuButto.addEventListener('click', function() {
    headerMen.classList.toggle('active');
});

//multiple slider da bilbioteca do splide
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


document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('#splide2', {
        grid: {
            rows: 2,
            cols: 1,
            gap: {
                row: '1rem',
                col: '1.5rem',
            },
        },
    }).mount({ Grid: Splide.Components.Grid });
 

});

//texto estilo typing animado do banner
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

const sliderContainer = document.getElementById('slider-container');
const sliderContent = document.getElementById('slider-content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateSlider() {
    const newPosition = -currentIndex * 100 + '%';
    sliderContent.style.transform = 'translateX(' + newPosition + ')';
}

function showPrevSlide() {
    currentIndex = Math.max(0, currentIndex - 1);
    updateSlider();
}

function showNextSlide() {
    currentIndex = Math.min(1, currentIndex + 1);
    updateSlider();
}

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

