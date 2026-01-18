import './style.css';

const projects = [
  {
    title: 'Speed Reader App',
    description: 'Allows users to speed up their WPM count by pasting text that they want to consume fast. Efficient and focused.',
    image: 'speed_reader_screenshot.png',
    link: 'https://flowthis.github.io/speed-reader-app/',
    tag: 'Productivity'
  },
  {
    title: 'Keto Flow Coach',
    description: 'Your personal guide to keto success. Track macros, plan meals, and stay in flow.',
    image: 'keto_flow_recipes_screenshot.png',
    link: 'https://keto-flow-coach.lovable.app/',
    tag: 'Health'
  },
  {
    title: 'SnapKey',
    description: 'Fun Typing Tutor. Learn to type with speed and accuracy.',
    image: 'snapkey_screenshot.png',
    link: 'https://flowthis.github.io/snapkey/',
    tag: 'Education'
  },
  {
    title: 'Sauerteig Meister',
    description: 'Dein Begleiter fürs Brotbacken. Schritt-für-Schritt-Anleitungen, Timer und hilfreiche Tipps für das perfekte Sauerteigbrot.',
    image: 'sauerteig_meister_thumbnail.png',
    link: 'https://sauerteig-meister.replit.app',
    tag: 'Cooking'
  },
  {
    title: 'SipSavvy',
    description: 'Die mobile App für Weineinsteiger. Lerne Geschmacksprofile, Aromen und die Kunst der Weinverkostung.',
    image: 'sipsavvy_thumbnail.png',
    link: 'https://sipsavvy.lovable.app',
    tag: 'Education'
  },
  {
    title: 'Arbitrage Scanner',
    description: 'Real-time prediction market arbitrage detection and analysis tool.',
    image: 'arbitrage_scanner_thumbnail.png',
    link: 'https://flowthis.github.io/prediction-market-arbitrage/',
    tag: 'Fintech'
  },
  {
    title: 'Kids Sushi Explorer',
    description: 'An interactive educational app for kids to explore the world of Sushi. Built with Expo.',
    image: 'kids_sushi_explorer_thumbnail.png',
    link: 'https://kids-sushi-explorer.replit.app',
    tag: 'Fun'
  },
  {
    title: 'RoboTask',
    description: 'Train robots with POV videos, earn crypto rewards, and shape the future of humanoid robotics.',
    image: 'robotask_thumbnail.png',
    link: 'https://robotask.lovable.app',
    tag: 'AI & Crypto',
    objectPosition: 'top'
  },
  {
    title: 'Bassd Scho Sticker',
    description: 'A sticker campaign for a good cause. 100% proceeds go to the Children\'s Hospice Bamberg.',
    image: 'bassd_scho_thumbnail.png',
    link: 'https://bassd-scho-spenden.lovable.app',
    tag: 'Charity'
  }
];

const container = document.getElementById('projects-container');

function renderProjects() {
  container.innerHTML = projects.map((project, index) => `
    <article class="project-card" data-index="${index}">
      <div class="card-image-wrapper">
        <img 
          src="${project.image}" 
          alt="${project.title}" 
          class="card-image" 
          style="object-position: ${project.objectPosition || 'center'}"
        />
      </div>
      <div class="card-content">
        <h2 class="project-title">${project.title}</h2>
        <p class="project-desc">${project.description}</p>
        <div class="card-footer">
          <span class="tag">${project.tag}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-primary)">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </article>
  `).join('');

  attachClickListeners();
}

function attachClickListeners() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Create ripple effect
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('div');
      ripple.classList.add('click-ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = `${rect.width}px`;
      ripple.style.height = `${rect.width}px`;
      ripple.style.marginTop = `-${rect.width / 2}px`;
      ripple.style.marginLeft = `-${rect.width / 2}px`;

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

renderProjects();
