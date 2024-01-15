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

//texto estilo typing animado do banner evento
const elementText = document.getElementById('animated-text');
const word = ['café...', 'Coffee Cube'];
let indexWord = 0;
let indexChar = 0;

function type() {
    if (indexChar < word[indexWord].length) {
        elementText.innerHTML += word[indexWord].charAt(indexChar);
        indexChar++;
        setTimeout(type, 200);
    } else {
        setTimeout(erase, 500);
    }
}

function erase() {
    if (indexChar > 0) {
        elementText.innerHTML = word[indexWord].substring(0, indexChar - 1);
        indexChar--;
        setTimeout(erase, 150);
    } else {
        indexWord = (indexWord + 1) % word.length;
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

//filtro projetos 
$(document).ready(function () {
    // Evento de clique para os botões de filtro
    $('.filter-btn').on('click', function () {
        const type = $(this).data('type');
  
        // Oculta todos os projetos
        $('.item-projects').hide();
  
        // Mostra apenas os projetos do tipo selecionado
        $('.' + type).show().addClass('filtered');
    });
  
    // Evento de clique para o botão de limpar filtro
    $('.clear-filter-btn').on('click', function () {
        // Remova todas as classes de filtro e mostre todos os projetos
        $('.item-projects').show().removeClass('filtered');
    });
  });