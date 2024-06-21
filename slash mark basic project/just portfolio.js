// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu on small screens
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.querySelector('.navbar-collapse');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (menuToggle.classList.contains('show')) {
          bsCollapse.toggle();
        }
      });
    });
  
    // Example of adding an event listener to a button (if needed)
    const myButton = document.querySelector('#myButton');
    if (myButton) {
      myButton.addEventListener('click', () => {
        alert('Button clicked!');
      });
    }
  });
  