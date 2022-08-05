const carousel = document.querySelector('.carousel-items');


let menu = document.getElementById("menu");

let intervalo = null;
let maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
let step = 1;

menu.addEventListener("click", () => {
    menu.classList.toggle("change");
})


const start = () => {
    intervalo = setInterval(function () {
        carousel.scrollLeft = carousel.scrollLeft + step;


        if (carousel.scrollLeft === maxScrollLeft) {
            step = -1;
        } else if (carousel.scrollLeft === 0) {
            step = 1;
        }
    }, 10);
}

// document.addEventListener('DOMContentLoaded', start);
start();
