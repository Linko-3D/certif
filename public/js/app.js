// Arrow ###################################################################################################

document.addEventListener("DOMContentLoaded", function () {
    const arrowTop = document.getElementById("arrow-top");

    window.addEventListener("scroll", function () {
        // Check the scroll position
        if (window.scrollY > 200) {
            // If the user has scrolled down, show the arrow
            arrowTop.style.transform = "translateX(0)"; 
            arrowTop.style.opacity = "1"; // set the opacity to 1 (fully visible)
        } else {
            // If the user is at the top of the page, hide the arrow
            arrowTop.style.transform = "translateX(150%)";
            arrowTop.style.opacity = "0"; // set the opacity to 0 (fully transparent)
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('ion-icon[name="menu-outline"]');
    const popupMenu = document.querySelector('.popup-menu');

    menuIcon.addEventListener('click', function () {
        // Toggle active class
        popupMenu.classList.toggle('active');

        // Disable or enable scrolling
        if (popupMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden'; // disable scrolling
            menuIcon.setAttribute('name', 'close-outline');
        } else {
            document.body.style.overflow = ''; // enable scrolling
            menuIcon.setAttribute('name', 'menu-outline');
        }
    });
});
