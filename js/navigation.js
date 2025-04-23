/**
 * Navigation functionality for the portfolio website
 */

// Initialize navigation functionality
const initNavigation = () => {
  // Initialize header scroll effect
  initHeaderScroll();
  
  // Initialize mobile menu toggle
  initMobileMenu();
  
  // Initialize smooth scrolling for nav links
  initSmoothScroll();
  
  // Initialize back to top button
  initBackToTop();
  
  // Initialize theme toggle
  initThemeToggle();
  
  // Update active nav link on scroll
  window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
};

// Header scroll effect
const initHeaderScroll = () => {
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
};

// Mobile menu toggle
const initMobileMenu = () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
};

// Smooth scrolling for nav links
const initSmoothScroll = () => {
  const navLinks = document.querySelectorAll('.nav-link, .footer-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      smoothScroll(e, targetId);
    });
  });
  
  // Additional smooth scroll elements
  const ctaButtons = document.querySelectorAll('.hero-buttons a, .scroll-down a');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const targetId = button.getAttribute('href').substring(1);
      smoothScroll(e, targetId);
    });
  });
};

// Back to top button
const initBackToTop = () => {
  const backToTop = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

// Theme toggle functionality
const initThemeToggle = () => {
  const themeToggle = document.querySelector('.theme-toggle');
  
  // Initialize based on saved preference
  initDarkMode();
  
  themeToggle.addEventListener('click', toggleDarkMode);
};