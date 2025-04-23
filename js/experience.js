/**
 * Experience timeline functionality for the portfolio website
 */

// Initialize experience timeline
const initExperience = () => {
  // Render timeline items
  renderTimelineItems(experienceData);
  
  // Initialize timeline animations
  initTimelineAnimations();
};

// Render timeline items
const renderTimelineItems = (experiences) => {
  const timeline = document.querySelector('.timeline');
  
  if (!timeline) return;
  
  timeline.innerHTML = '';
  
  experiences.forEach(experience => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    timelineItem.innerHTML = `
      <div class="timeline-content">
        <span class="timeline-date">${experience.date}</span>
        <h3 class="timeline-title">${experience.title}</h3>
        <p class="timeline-company">${experience.company}</p>
        <p class="timeline-desc">${experience.description}</p>
        </div>
        `;
    
    timeline.appendChild(timelineItem);
  });
};

// Initialize timeline animations
const initTimelineAnimations = () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  observeElements(timelineItems);
};


//this will be below 2 p tags in innerHTML

        // <div class="timeline-tags">
        //   ${experience.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join('')}
        // </div>