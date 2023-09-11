// Arrow ###################################################################################################

document.addEventListener("DOMContentLoaded", function () {
    const arrowTop = document.getElementById("arrow-top");

    window.addEventListener("scroll", function () {
      // Check the scroll position
      if (window.scrollY > 100) {
        // If the user has scrolled down, show the arrow
        arrowTop.style.display = "block";
      } else {
        // If the user is at the top of the page, hide the arrow
        arrowTop.style.display = "none";
      }
    });
  });

  // Toggle options ##########################################################

  // Get references to the icon and options elements
const toggleIcon = document.getElementById("toggle-options-icon");
const toggleOptions = document.getElementById("toggle-options");

// Add a click event listener to the icon
toggleIcon.addEventListener("click", function () {
  // Toggle the "hide" class on the options element
  toggleOptions.classList.toggle("hide");

  // Toggle the icon name between "chevron-forward" and "chevron-down"
  if (toggleIcon.getAttribute("name") === "chevron-forward") {
    toggleIcon.setAttribute("name", "chevron-down");
  } else {
    toggleIcon.setAttribute("name", "chevron-forward");
  }
});



// Theme switch ###############################################################

// Function to set the theme based on the saved preference
function setTheme(theme) {
  const root = document.documentElement;
  const moonIcon = document.getElementById('toggle-theme');

  if (theme === 'dark') {
    root.style.setProperty('--background-color', 'rgb(37, 43, 52)');
    root.style.setProperty('--panel-color', 'rgba(54, 61, 74, 0.99)');
    root.style.setProperty('--color', 'white');
    root.style.setProperty('--red', 'rgb(252, 127, 127)');
    root.style.setProperty('--green', 'rgb(142, 239, 151)');
    root.style.setProperty('--blue', 'rgb(141, 165, 243)');
    root.style.setProperty('--violet', 'rgb(195, 142, 241)');
    root.style.setProperty('--yellow', 'rgb(255, 222, 102)');
    root.style.setProperty('--split-color', 'rgb(70, 112, 149)');
    root.style.setProperty('--active-color', 'rgb(112, 186, 250)');
    root.style.setProperty('--button-color', 'rgb(64, 68, 76)');
    moonIcon.setAttribute('name', 'moon'); // Change the icon name to "moon"
  } else {
    root.style.setProperty('--background-color', 'rgb(255, 255, 255)');
    root.style.setProperty('--panel-color', 'rgba(229, 229, 229, 0.99)');
    root.style.setProperty('--color', 'black');
    root.style.setProperty('--red', 'rgb(205, 56, 56)');
    root.style.setProperty('--green', 'rgb(47, 161, 57)');
    root.style.setProperty('--blue', 'rgb(61, 100, 221)');
    root.style.setProperty('--violet', 'rgb(168, 93, 233)');
    root.style.setProperty('--yellow', 'rgb(166, 144, 66)');
    root.style.setProperty('--split-color', 'rgb(76, 121, 193)');
    root.style.setProperty('--active-color', 'rgb(46, 128, 255)');
    root.style.setProperty('--button-color', 'rgb(218, 218, 218)');
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

// Accessibility #######################################################################################

// Function to update global variables
function updateGlobalVariables(fontSize, padding) {
  const root = document.documentElement;
  root.style.setProperty('--font-size', fontSize);
  root.style.setProperty('--padding', padding);
}

// Function to update localStorage and DOM based on state
function updateState(isActive) {
  const accessibilityIcon = document.getElementById("accessibility-icon");

  if (isActive === 'true') {
    accessibilityIcon.classList.add('active-color');
    updateGlobalVariables('2.75rem', '5vh');
  } else {
    accessibilityIcon.classList.remove('active-color');
    updateGlobalVariables('2.3rem', '4.3vh');
  }

  localStorage.setItem('isActive', isActive);
}

// Get initial state from localStorage or default to 'false'
let isActive = localStorage.getItem('isActive') || 'false';

// Update state on page load
updateState(isActive);

// Get reference to the accessibility icon
const accessibilityIcon = document.getElementById("accessibility-icon");

// Add event listener
accessibilityIcon.addEventListener('click', function() {
  // Toggle state
  isActive = (isActive === 'true') ? 'false' : 'true';
  updateState(isActive);
});
