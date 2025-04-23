/**
 * Projects functionality for the portfolio website
 */

// Initialize projects functionality
const initProjects = () => {
  // Render project cards
  renderProjects(projectsData);
  
  // Initialize project filtering
  initProjectFilters();
  
  // Initialize project card animations
  initProjectCardAnimations();
};

// Render project cards
const renderProjects = (projects) => {
  const projectsGrid = document.querySelector('.projects-grid');
  
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = '';
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card reveal';
    projectCard.setAttribute('data-category', project.category);
    
    projectCard.innerHTML = `
      <div class="project-img">
        <img src="${project.image}" alt="${project.title}">
        <span class="project-category">${project.category}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.demoLink}" class="project-link">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
          <a href="${project.codeLink}" class="project-link">
            <i class="fab fa-github"></i> Source Code
          </a>
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
};

// Initialize project filtering
const initProjectFilters = () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter projects
      const category = button.getAttribute('data-filter');
      filterProjects(category);
    });
  });
};

// Filter projects by category
const filterProjects = (category) => {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else if (card.getAttribute('data-category') === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
};

// Initialize project card animations
const initProjectCardAnimations = () => {
  const projectCards = document.querySelectorAll('.project-card');
  
  observeElements(projectCards);
};