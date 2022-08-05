const links = document.querySelectorAll('.menu__link');
const portafolioLinks = document.querySelectorAll('.btn-look-projects');
const about = document.querySelector('.about');
const portafolio = document.querySelector('.portafolio');
const contacto = document.querySelector('#footer-column-2');
const header = document.querySelector('.header');
let ubicacionPortafolio = portafolio.getBoundingClientRect();
let ubicacionContacto = contacto.getBoundingClientRect();
let ubicacionAbout = about.getBoundingClientRect();
let headerHeight = header.clientHeight;
// console.log(headerHeight);

window.onresize = () => {
    ubicacionPortafolio = portafolio.getBoundingClientRect();
    ubicacionContacto = contacto.getBoundingClientRect();
    ubicacionAbout = about.getBoundingClientRect();
    headerHeight = header.clientHeight;
}

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if (link.getAttribute('id') === 'about') {
            console.log(ubicacionAbout.top);
            scrollTo({
                top: ubicacionAbout.top - (headerHeight * 2),
                left: ubicacionAbout.left,
                behavior: 'smooth'
            });
        } else if( link.getAttribute('id') === 'contacto' ) {
            console.log(ubicacionContacto.top);
            scrollTo({
                top: ubicacionContacto.top - (headerHeight * 2),
                left: ubicacionContacto.left,
                behavior: 'smooth'
            })
        } else {
            scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    })
})

portafolioLinks.forEach((link, i) => {
    link.addEventListener('click', () => {
        console.log(ubicacionPortafolio.top);
        scrollTo({
            top: ubicacionPortafolio.top - (headerHeight * 2),
            left: ubicacionPortafolio.left,
            behavior: 'smooth'
        })
    })
})
