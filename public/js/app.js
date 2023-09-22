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
