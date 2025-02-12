const hamburgurBtn = $("#hamburger-button");
const mobileMenu = $("#mobile-menu");

const toggleMenu = function () {
    mobileMenu.toggleClass('hidden')
    mobileMenu.toggleClass('flex')
}

hamburgurBtn.click(function () {
    toggleMenu();
});
mobileMenu.click(function () {
    toggleMenu();
});
