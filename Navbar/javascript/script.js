const navToggle = document.querySelector('.nav__header-toggle');
const links = document.querySelector('.nav__links');

navToggle.addEventListener('click', () => {
    // if (links.classList.contains('nav__show-links')){
    //     links.classList.remove('nav__show-links')
    // }
    // else {
    //     links.classList.add('nav__show-links');
    // }
    links.classList.toggle('nav__show-links');
    navToggle.classList.toggle('rotate');
});