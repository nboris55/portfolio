const mobileNavToggle = document.querySelector('.mobile_nav_toggle');
const primaryNav = document.querySelector('.primary_navigation');
const mobileScrollNav = document.querySelector('.mobile_scroll_navigation');
const projectsSection = document.querySelector('#projects');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contact');

// Scroll Effects
window.onscroll = function () {
  showMobileNav();
};

// Show mobile nav bar if scrolled down
function showMobileNav() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mobileScrollNav.style.display = 'block';
    primaryNav.style.display = 'none';
  } else {
    mobileScrollNav.style.display = 'none';
    primaryNav.style.display = 'block';
  }
}

// When the user clicks on the button a scroll occurs.
// Scrolls to top
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
}

// Scrolls to portfolio
function scrollToPortfolio() {
  document.body.scrollTop; // For Safari
  projectsSection.scrollIntoView({ behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
}

// Scrolls to about
function scrollToAbout() {
  document.body.scrollTop = 0; // For Safari
  aboutSection.scrollIntoView({ behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
}

// Scrolls to contact
function scrollToContact() {
  document.body.scrollTop = 0; // For Safari
  contactSection.scrollIntoView({ behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
}

mobileNavToggle.addEventListener('click', function () {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    mobileNavToggle.setAttribute('aria-expanded', true);
  } else {
    primaryNav.setAttribute('data-visible', false);
    mobileNavToggle.setAttribute('aria-expanded', false);
  }
});
