const carousel = document.querySelector('.carousel-items');
const arrow__left = document.querySelector('.btn__arrow__left');
const arrow__right = document.querySelector('.btn__arrow__right');

arrow__left.addEventListener('click', () => {
    carousel.scrollLeft -= 300
})

arrow__right.addEventListener('click', () => {
    carousel.scrollLeft += 300
})




















































// console.log({
//     anchoContenedor: carousel.clientWidth,
//     totalAnchoContenedor: carousel.scrollWidth,
//     posicionScroll: carousel.scrollLeft

// });

// let maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
// let step = 1;


// const start = () => {
//     setInterval(function () {
//         carousel.scrollLeft = carousel.scrollLeft + step;


//         if (carousel.scrollLeft === maxScrollLeft) {
//             step = -1;
//         } else if (carousel.scrollLeft === 0) {
//             step = 1;
//         }
//     }, 1);

// }


// // document.addEventListener('DOMContentLoaded', start);
// start()
