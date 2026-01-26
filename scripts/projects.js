import { revealStaggered } from './reveal.js';

const projects = [
  {
    id: 'id1',
    name: 'react-ecommerce-project',
    image: './images/projects/mpahla-pic.png',
    description: 'E-commerce Platform (React, Vite, Node.js, MongoDB) Developed a full-stack, responsive e-commerce application with a custom RESTful API backend. Implemented secure user authentication, dynamic product catalog, shopping cart, and order tracking functionality. Optimized for performance and scalability, demonstrating proficiency in modern frontend frameworks, backend API design, and database integration.',
    gitHubLink: 'https://github.com/BlessingDotDev/react-ecommerce-mpahla.git',
    siteLink: 'https://github.com/BlessingDotDev/mpahla-ecommerce-backend.git',
    deployed: true,
    tech: [
      {name: 'react', logo: './images/logos/React.png' },
      {name: 'node.js', logo: './images/logos/Node.js.png' },
      {name: 'mongodb', logo: './images/logos/MongoDB.png' },
      {name: 'express', logo: './images/logos/Express.png' },
      {name: 'CSS3', logo: './images/logos/css-3.png' },
      {name: 'Javascript', logo: './images/logos/js.png' },
      {name: 'devices', logo: './images/logos/devices.png' }
    ]
  },
  {
    id: 'id2',
    name: 'anime-characters',
    image: './images/projects/anime-quotes.webp',
    description: 'Reponsive site built with JavaScript.Powered by Jikan API for Anime Data and Anime characters.',
    gitHubLink: 'https://github.com/BlessingDotDev/anime-quotes.git',
    siteLink: 'https://blessingdotdev.github.io/anime-quotes/',
    deployed: true,
    tech: [
      {name: 'HTML5', logo: './images/logos/html.png' },
      {name: 'CSS3', logo: './images/logos/css-3.png' },
      {name: 'Javascript', logo: './images/logos/js.png' },
      {name: 'devices', logo: './images/logos/devices.png' }
    ]
  },
   {
    id: 'id13',
    name: 'Mpahla',
    image: './images/projects/mpahla.webp',
    description: 'A fully responsive mock e-commerce site built with JavaScript. includes dynamic pages for categories. products, products details with size options, and function cart.',
    gitHubLink: 'https://github.com/BlessingDotDev/project-ecommerce-site.git',
    siteLink: 'https://blessingdotdev.github.io/project-ecommerce-site/',
    deployed: true,
    tech: [
      {name: 'HTML5', logo: './images/logos/html.png' },
      {name: 'CSS3', logo: './images/logos/css-3.png' },
      {name: 'Javascript', logo: './images/logos/js.png' },
      {name: 'devices', logo: './images/logos/devices.png' }
    ]
  },
  {
    id: 'id4',
    name: 'tradingview-clone',
    image: './images/projects/trading.png',
    description: 'A lightweight TradingView-inspired charting application built with plain HTML, CSS, and JavaScript (ES modules). This project demonstrates interactive financial charting, technical indicators, modular frontend architecture, and API data adaptation—without relying on external frameworks.',
    gitHubLink: 'https://github.com/BlessingDotDev/tradingview.git',
    siteLink: 'https://blessingdotdev.github.io/tradingview/',
    deployed: true,
    tech: [
      {name: 'HTML5', logo: './images/logos/html.png' },
      {name: 'CSS3', logo: './images/logos/css-3.png' },
      {name: 'Javascript', logo: './images/logos/js.png' },
      {name: 'devices', logo: './images/logos/devices.png' }
    ]
  }
];

export const projectAnimationConfig = {
  baseDelay: 0, // milliseconds before the first card animates
  stagger: 120, // milliseconds between each card's entrance on desktop
  threshold: 0.12 // intersection threshold
};

export function renderProjectsHTML(config = {}) {
  // merge defaults with provided config
  const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 600px)').matches;
  const cfg = Object.assign({}, projectAnimationConfig, config);
  // reduce stagger on small screens for snappier entrance
  if (isMobile && cfg.stagger === projectAnimationConfig.stagger) {
    cfg.stagger = 60;
    cfg.threshold = 0.05;
  }
  let projectHtml = '';

  projects.forEach((project, index) => {
    let techImgHtml = '';

    project.tech.forEach(tech => {
      techImgHtml += `
        <img src="${tech.logo}" alt="${tech.name}">
      `;
    })

    projectHtml += `
      <div class="project-container" data-index="${index}">
        <img class="project-image" src="${project.image}" alt="${project.name}">
        <div class="overlay display-overlay">
          <p class="project-description">
            ${project.description}
          </p>
          <div class="buttons-container">
            <a href="${project.gitHubLink}" target="_blank">
              <button class="link-button">
                Code on Github
              </button>
            </a>
            <a href="${project.siteLink}" target="_blank">
              <button class="link-button">
                Visit Website
              </button>
            </a>
          </div>
        </div>
        <div class="technologies-used">
          ${techImgHtml}
        </div>
      </div>
    `;
  });

  const grid = document.querySelector('.js-projects-grid');
  if (grid) grid.innerHTML = projectHtml;

  // start scroll-triggered animation using reusable reveal
  // revealStaggered will stagger based on `data-index`
  // use the shared reveal function
  revealStaggered('.project-container', {
    stagger: cfg.stagger,
    baseDelay: cfg.baseDelay,
    threshold: cfg.threshold
  });
}
  // Local fallback removed — project animations now use `revealStaggered` from `reveal.js`.
