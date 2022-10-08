(function(){
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu');
    
    menu.addEventListener('click', () => {
        list.classList.toggle('menu__links--show')
        menu.classList.toggle("change");

    });
})();

