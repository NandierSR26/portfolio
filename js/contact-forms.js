const btnNext = document.querySelector('.form__button--next');
const btnBack = document.querySelector('.form__button--back');
const form1 = document.querySelector('.form__container--1');
const form2 = document.querySelector('.form__container--2');


eventListeners();
function eventListeners() {
    btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        form1.style.transform = 'translateX(-100%)';
        form2.style.transform = 'translateX(-100%)';

    });
    btnBack.addEventListener('click', (e) => {
        e.preventDefault();
        form1.style.transform = 'translateX(0%)';
        form2.style.transform = 'translateX(0%)';
    });
}