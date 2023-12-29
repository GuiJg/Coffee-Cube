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
    currentIndex = Math.max(0, currentIndex - 2);
    updateSlider();
}

function showNextSlide() {
    currentIndex = Math.min(1, currentIndex + 2);
    updateSlider();
}

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);