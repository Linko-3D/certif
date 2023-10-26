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
            arrowTop.style.opacity = "1"; // set the opacity to 0 (fully transparent)
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



// ##################################

// Function to set the theme based on the saved preference
function setTheme(theme) {
    const root = document.documentElement;
    const moonIcon = document.getElementById('toggle-theme');
  
    if (theme === 'dark') {
      root.style.setProperty('--background-color', 'rgb(37, 43, 52)');
      root.style.setProperty('--panel-color', 'rgba(54, 61, 74, 0.9)');
      root.style.setProperty('--color', 'white');
      root.style.setProperty('--red', 'rgb(252, 127, 127)');
      root.style.setProperty('--green', 'rgb(142, 239, 151)');
      root.style.setProperty('--blue', 'rgb(141, 165, 243)');
      root.style.setProperty('--violet', 'rgb(195, 142, 241)');
      root.style.setProperty('--yellow', 'rgb(255, 222, 102)');
      moonIcon.setAttribute('name', 'moon'); // Change the icon name to "moon"
    } else {
      root.style.setProperty('--background-color', 'rgb(255, 255, 255)');
      root.style.setProperty('--panel-color', 'rgba(229, 229, 229, 0.9)');
      root.style.setProperty('--color', 'black');
      root.style.setProperty('--red', 'rgb(205, 56, 56)');
      root.style.setProperty('--green', 'rgb(47, 161, 57)');
      root.style.setProperty('--blue', 'rgb(61, 100, 221)');
      root.style.setProperty('--violet', 'rgb(168, 93, 233)');
      root.style.setProperty('--yellow', 'rgb(166, 144, 66)');
      moonIcon.setAttribute('name', 'sunny'); // Change the icon name to "sunny"
    }
  }
  
  // Function to toggle the theme
  function toggleTheme() {
    const moonIcon = document.getElementById('toggle-theme');
    if (moonIcon.getAttribute('name') === 'moon') {
      // Toggle to light theme
      setTheme('light');
      // Save the current theme preference to Local Storage
      localStorage.setItem('theme', 'light');
    } else {
      // Toggle to dark theme
      setTheme('dark');
      // Save the current theme preference to Local Storage
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Event listener to toggle theme on button click
  const moonIcon = document.getElementById('toggle-theme');
  moonIcon.addEventListener('click', toggleTheme);
  
  // Check if there's a theme preference in Local Storage and set the theme accordingly
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  }