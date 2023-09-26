sr.reveal ('.mapbox', {delay:300});

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

function showSlide(index) {
    images.forEach((image, i) => {
        image.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
});

showSlide(currentIndex);

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});