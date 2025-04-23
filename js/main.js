/**
 * Main JavaScript file for the portfolio website
 */

document.addEventListener('DOMContentLoaded', () => {
  // Preloader
  const preloader = document.querySelector('.preloader');
  
  // Hide preloader when page is loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 500);
  });
  
  // Initialize all modules
  initUtils();
  initNavigation();
  initProjects();
  initExperience();
  initAnimations();
  initContactForm();
  
  // Initialize custom cursor on desktop
  if (window.innerWidth > 1024) {
    initCustomCursor();
  }
});

// Initialize utility functions
const initUtils = () => {
  // Initialize all scroll reveal animations
  const revealElements = document.querySelectorAll('.reveal');
  observeElements(revealElements);
  
  // Add reveal class to section elements
  document.querySelectorAll('.section-header, .skills-content, .about-content').forEach(element => {
    element.classList.add('reveal');
  });
};


// Initialize contact form functionality
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = 'Sending…';

    const formData = new FormData(form);
    
    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (res.ok) {
        alert('✅ Thankyou for contacting me!');
        form.reset();
      } else {
        const data = await res.json();
        alert(data.error || '❌ Oops! There was a problem.');
      }
    } catch (err) {
      alert('❌ Network error. Please try again.');
    }

    btn.disabled = false;
    btn.textContent = 'Send Message';
  });
});

// Initialize contact form functionality
const initContactForm = () => {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
};