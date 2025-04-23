/**
 * Animations for the portfolio website
 */

// Initialize all animations
const initAnimations = () => {
  // Animate skill bars
  animateSkillBars();
  
  // Animate elements on scroll
  initScrollAnimations();
  
  // Animate heading with type effect
  animateTypingEffect();
};

// Animate skill bars
const animateSkillBars = () => {
  const skillProgress = document.querySelectorAll('.skill-progress');
  
  skillProgress.forEach(progress => {
    const value = progress.getAttribute('data-progress');
    progress.style.setProperty('--progress', value + '%');
  });
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.style.getPropertyValue('--progress');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  skillProgress.forEach(progress => {
    observer.observe(progress);
  });
};

// Initialize scroll animations
const initScrollAnimations = () => {
  // Elements to animate on scroll
  const revealElements = document.querySelectorAll('.reveal');
  const slideLeftElements = document.querySelectorAll('.slide-in-left');
  const slideRightElements = document.querySelectorAll('.slide-in-right');
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  // Create observers
  const createObserver = (elements, className = 'active') => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  };
  
  // Apply observers to elements
  createObserver(revealElements);
  createObserver(slideLeftElements);
  createObserver(slideRightElements);
  createObserver(timelineItems);
};

// Animate typing effect
const animateTypingEffect = () => {
  const typedTextElement = document.querySelector('.typed-text');
  
  if (!typedTextElement) return;
  
  const phrases = ['Developer', 'Designer', 'Innovator', 'Problem Solver'];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  const type = () => {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before starting new word
    }
    
    setTimeout(type, typingSpeed);
  };
  
  setTimeout(type, 1000);
};

// Add parallax scrolling effect
const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-speed') || 0.2;
      element.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
};

// Animate counter numbers
const animateCounters = () => {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // ms
    const step = target / (duration / 16); // 60fps
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let count = 0;
          
          const updateCount = () => {
            if (count < target) {
              count += step;
              if (count > target) count = target;
              counter.textContent = Math.floor(count);
              requestAnimationFrame(updateCount);
            }
          };
          
          updateCount();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
};