import { revealStaggered } from './reveal.js';

const projects = [
  {
    id: 'id1',
    name: 'Mpahla',
    image: './images/projects/mpahla.webp',
    description: 'A fully responsive mock e-commerce site built with JavaScript. includes dynamic pages for categories. products, products details with size options, and function cart.',
    gitHubLink: 'https://github.com/BlessingDotDev/project-ecommerce-site.git',
    siteLink: 'https://blessingdotdev.github.io/project-ecommerce-site/',
    deployed: true
  },
  {
    id: 'id2',
    name: 'anime-characters',
    image: './images/projects/anime-quotes.webp',
    description: 'Reponsive site built with JavaScript.Powered by Jikan API for Anime Data and Anime characters.',
    gitHubLink: 'https://github.com/BlessingDotDev/anime-quotes.git',
    siteLink: 'https://blessingdotdev.github.io/anime-quotes/',
    deployed: true
  },
  {
    id: 'id3',
    name: 'tradingview-clone',
    image: './images/projects/trading.png',
    description: 'A lightweight TradingView-inspired charting application built with plain HTML, CSS, and JavaScript (ES modules). This project demonstrates interactive financial charting, technical indicators, modular frontend architecture, and API data adaptation—without relying on external frameworks.',
    gitHubLink: 'https://github.com/BlessingDotDev/tradingview.git',
    siteLink: 'https://blessingdotdev.github.io/tradingview/',
    deployed: true
  },
  {
    id: 'id4',
    name: 'mock-ul-website',
    image: './images/projects/ul.png',
    description: 'Reponsive mock website of unversity of limpopo. <i>(Site still progress)</i>.',
    gitHubLink: 'https://github.com/BlessingDotDev/mock-ul-website.git',
    siteLink: 'https://blessingdotdev.github.io/mock-ul-website/',
    deployed: true
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
