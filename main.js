const mobileNav = document.querySelector('.mobile_nav');
const mobileScrollNav = document.querySelector('.mobile_scroll_navigation');

// Scroll Effects
window.onscroll = function () {
  showMobileNav();
};

// Show mobile nav bar if scrolled down
function showMobileNav() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mobileScrollNav.style.display = 'block';
  } else {
    mobileScrollNav.style.display = 'none';
  }
}

// When the user clicks on the button a scroll occurs.
// Scrolls to top
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Scrolls to portfolio
function scrollToPortfolio() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Scrolls to about
function scrollToAbout() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Scrolls to contact
function scrollToContact() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mobileNav.addEventListener('click', function () {
  console.log('Click');
});
