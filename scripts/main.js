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
    var splide = new Splide('.splide', {
        perPage: 3,
        rewind: true,
    });

    splide.mount();
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[index].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Add event listeners for next and previous buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.slider-container').innerHTML += `
    <button onclick="prevSlide()">Previous</button>
    <button onclick="nextSlide()">Next</button>
  `;
});
