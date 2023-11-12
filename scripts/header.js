const mobileMenuIcon = $("#small-header-bars")
const mobileMenuCloseIcon = $('#small-header-cross')
const mobileMenu = $("#mobile-menu")

mobileMenuIcon.click(() => {
    mobileMenu.toggleClass('visible-menu')
})

mobileMenuCloseIcon.click(() => {
    mobileMenu.toggleClass('visible-menu')
})