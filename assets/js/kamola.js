let currentIndex = 0;

function moveLeft() {
    const slides = document.querySelector(".slides");
    const totalCards = document.querySelectorAll(".card").length;
    const visibleCards = 3;

    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    slides.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
}

function moveRight() {
    const slides = document.querySelector(".slides");
    const totalCards = document.querySelectorAll(".card").length;
    const visibleCards = 3;

    currentIndex = (currentIndex + 1) % totalCards;
    slides.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
}
