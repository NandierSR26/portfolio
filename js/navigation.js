const links = document.querySelectorAll('.menu__link');

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
}