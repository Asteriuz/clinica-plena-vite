const prevButton = document.getElementById('default-carousel-prev');
const nextButton = document.getElementById('default-carousel-next');
let canSlide = true;

document.addEventListener('keydown', function (event) {
    if (!canSlide) {
        return;
    }
    if (event.key === 'ArrowLeft') {
        prevButton.click();
        canSlide = false;
        setTimeout(() => {
            canSlide = true;
        }, 700);
    } else if (event.key === 'ArrowRight') {
        nextButton.click();
        canSlide = false;
        setTimeout(() => {
            canSlide = true;
        }, 700);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var arrowElement = document.querySelector('.scroll-down-arrow-hero');

    arrowElement.addEventListener('click', function () {
        window.scrollTo({
            top: window.innerHeight + 24,
            behavior: 'smooth'
        });
    });
});