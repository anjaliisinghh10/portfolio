/**
 * Utility functions for the portfolio website
 */

// Observe elements for scroll animations
const observeElements = (elements, className = 'active') => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => {
    observer.observe(element);
  });
};

// Throttle function to limit function calls
const throttle = (func, delay) => {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
};

// Debounce function for performance optimization
const debounce = (func, delay) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

// Get visible section ID based on scroll position
const getCurrentSection = () => {
  const sections = document.querySelectorAll('.section');
  
  for (const section of sections) {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      return section.id;
    }
  }
  
  return null;
};

// Update active nav link based on current section
const updateActiveNavLink = () => {
  const currentSection = getCurrentSection();
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
};

// Handle smooth scrolling for anchor links
const smoothScroll = (event, targetId) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  const headerHeight = document.getElementById('header').offsetHeight;
  
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  }
};

// Toggle dark/light mode
const toggleDarkMode = () => {
  const body = document.body;
  body.classList.toggle('dark-mode');
  
  // Save preference to localStorage
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
};

// Initialize dark mode based on user preference
const initDarkMode = () => {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  
  if (savedDarkMode || (prefersDarkMode && savedDarkMode !== false)) {
    document.body.classList.add('dark-mode');
  }
};

// Custom cursor functionality
const initCustomCursor = () => {
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    }, 100);
  });
  
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.7)';
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
  });
  
  // Add special cursor effects for links and buttons
  const links = document.querySelectorAll('a, button, .btn, .filter-btn, .nav-toggle, .theme-toggle');
  
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.opacity = '0.5';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    
    link.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.opacity = '1';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
};