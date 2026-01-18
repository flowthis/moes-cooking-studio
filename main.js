import './style.css';

const container = document.getElementById('projects-container');

async function loadProjects() {
  try {
    const response = await fetch('projects.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    renderProjects(data.projects);
  } catch (error) {
    console.error('Could not load projects:', error);
    container.innerHTML = '<p class="error-message">Failed to load projects. Please try again later.</p>';
  }
}

function renderProjects(projects) {
  container.innerHTML = projects.map((project, index) => `
    <article class="project-card" data-index="${index}">
      <div class="card-image-wrapper">
        <img 
          src="${project.image}" 
          alt="${project.title}" 
          class="card-image" 
          style="object-position: ${project.objectPosition || 'center'}"
        >
      </div>
      <div class="card-content">
        <div class="card-header">
          <span class="project-tag">${project.tag}</span>
          <h2 class="project-title">${project.title}</h2>
        </div>
        <p class="project-description">${project.description}</p>
      </div>
    </article>
  `).join('');

  // Add event listeners to cards
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Create ripple effect
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('div');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      card.appendChild(ripple);

      const index = card.getAttribute('data-index');
      const project = projects[index];

      // Simulate navigation delay for effect
      setTimeout(() => {
        ripple.remove();
        console.log('Navigating to ' + project.link);
        window.location.href = project.link;
      }, 600);
    });
  });
}

loadProjects();
