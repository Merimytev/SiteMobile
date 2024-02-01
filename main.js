const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function prevSlide() {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    updateSlidePosition();
}

function nextSlide() {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    updateSlidePosition();
}

function updateSlidePosition() {
    const newPosition = -currentIndex * slides[0].offsetWidth;
    slidesContainer.style.transform = `translateX(${newPosition}px)`;
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);