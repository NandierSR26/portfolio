const links = document.querySelectorAll('.menu__link');
const list = document.querySelector('.menu__links');

links.forEach((link) => {
    link.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick( e ) {
    e.preventDefault()
    const element = e.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 150,
        behavior: 'smooth'
    })

    list.classList.remove('menu__links--show')
}