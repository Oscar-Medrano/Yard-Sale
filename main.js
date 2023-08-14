const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailMenu.addEventListener('click', toggleDesktop);

function toggleDesktop() {
    desktopMenu.classList.toggle("inactive")
}