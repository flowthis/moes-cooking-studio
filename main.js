import './style.css';

const container = document.getElementById('projects-container');

async function loadProjects() {
  try {
    const response = await fetch(`projects.json?v=${new Date().getTime()}`);
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

// Interactive Background Logic
const backgroundGlobes = document.querySelector('.background-globes');

// Initial positions defined in CSS:
// Globe 1: 15% 50%
// Globe 2: 85% 30%

window.addEventListener('scroll', () => {
  window.requestAnimationFrame(() => {
    const scrollY = window.scrollY;
    // Use document.documentElement.scrollHeight for better cross-browser compatibility
    // but body.scrollHeight is also often used. Let's stick to what works for the user's likely environment (modern browsers)
    // Actually standard way is often max(body, html) but for this simple site:
    const maxScroll = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;

    // Safety check div by zero
    if (maxScroll <= 0) return;

    const scrollFraction = scrollY / maxScroll;

    // Movement Logic
    // Globe 1: X moves 15% -> 45%, Y moves 50% -> 10%
    const g1x = 15 + (scrollFraction * 30);
    const g1y = 50 - (scrollFraction * 40);

    // Globe 2: X moves 85% -> 55%, Y moves 30% -> 90%
    const g2x = 85 - (scrollFraction * 30);
    const g2y = 30 + (scrollFraction * 60);

    backgroundGlobes.style.setProperty('--globe-2-x', `${g2x}%`);
    backgroundGlobes.style.setProperty('--globe-2-y', `${g2y}%`);
  });
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const toggleIcon = themeToggle.querySelector('.toggle-icon');
const toggleText = themeToggle.querySelector('.toggle-text');

// Icons
const moonIcon = '🌙';
const sunIcon = '☀️';

function setTheme(isLight) {
  if (isLight) {
    document.body.classList.add('light-mode');
    toggleIcon.textContent = sunIcon;
    toggleText.textContent = 'Lunch Service';
  } else {
    document.body.classList.remove('light-mode');
    toggleIcon.textContent = moonIcon;
    toggleText.textContent = 'Dinner Service';
  }
}

// Check saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  setTheme(true);
} else {
  // Default to dark
  setTheme(false);
}

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-mode');

  if (isLight) {
    setTheme(true);
    localStorage.setItem('theme', 'light');
  } else {
    setTheme(false);
    localStorage.setItem('theme', 'dark');
  }
});
