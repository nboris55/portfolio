const mobileNavToggle = document.querySelector('.mobile_nav');
const primaryNav = document.querySelector('.primary_nav');

// Section selectors
const heroSection = document.querySelector('#hero');
const projectsSection = document.querySelector('#projects');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contact');

//Project carousel selectors
const carouselButtons = document.querySelectorAll('[data-carousel-button]');
carouselButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton == 'next' ? 1 : -1;
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]');
    const radio = button.closest('[data-carousel]').querySelector('[data-radio]');

    const activeSlide = slides.querySelector('[data-active]');
    const activeRadio = radio.querySelector('[data-active]');

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }

    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    radio.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    delete activeRadio.dataset.active;
  });
});

// Facts vs Hobbies Toggle
const aboutToggle = document.querySelector('#about-toggle');
const facts = document.querySelector('#facts');
const hobbies = document.querySelector('#hobbies');

//Show and hide Facts list vs Hobbies list
aboutToggle.addEventListener('click', () => {
  const visibility = document.getElementById('facts').getAttribute('data-visible');

  if (visibility === 'false') {
    document.getElementById('facts').setAttribute('data-visible', true);
    document.getElementById('facts').setAttribute('aria-expanded', true);
    document.getElementById('hobbies').setAttribute('data-visible', false);
    document.getElementById('hobbies').setAttribute('aria-expanded', false);
    facts.style.display = 'block';
    hobbies.style.display = 'none';
  } else {
    document.getElementById('hobbies').setAttribute('data-visible', true);
    document.getElementById('hobbies').setAttribute('aria-expanded', true);
    document.getElementById('facts').setAttribute('data-visible', false);
    document.getElementById('facts').setAttribute('aria-expanded', false);
    facts.style.display = 'none';
    hobbies.style.display = 'block';
  }
});

// When the user clicks on the button a scroll occurs.
// Scrolls to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  primaryNav.setAttribute('data-visible', false);
  mobileNavToggle.setAttribute('aria-expanded', false);
}

// Scrolls to portfolio
function scrollToPortfolio() {
  projectsSection.scrollIntoView({ behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
  primaryNav.setAttribute('data-visible', false);
  mobileNavToggle.setAttribute('aria-expanded', false);
  mobileNavToggle.classList.toggle('is-active');

  toggleBlur();
}

// Scrolls to about
function scrollToAbout() {
  aboutSection.scrollIntoView({ behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
  primaryNav.setAttribute('data-visible', false);
  mobileNavToggle.setAttribute('aria-expanded', false);
  mobileNavToggle.classList.toggle('is-active');

  toggleBlur();
}

// Scrolls to contact
function scrollToContact() {
  contactSection.scrollIntoView({ behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
  primaryNav.setAttribute('data-visible', false);
  mobileNavToggle.setAttribute('aria-expanded', false);
  mobileNavToggle.classList.toggle('is-active');

  toggleBlur();
}

// Mobile menu toggle
mobileNavToggle.addEventListener('click', function () {
  this.classList.toggle('is-active');

  toggleBlur();

  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    mobileNavToggle.setAttribute('aria-expanded', true);
  } else {
    primaryNav.setAttribute('data-visible', false);
    mobileNavToggle.setAttribute('aria-expanded', false);
  }
});

// Toggle Section Blur
function toggleBlur() {
  heroSection.classList.toggle('blur');
  projectsSection.classList.toggle('blur');
  aboutSection.classList.toggle('blur');
  contactSection.classList.toggle('blur');
}
