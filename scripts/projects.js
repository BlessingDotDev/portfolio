/*
const projects = [
  {
    id: 'id1',
    name: 'Mpahla',
    image: '../images/projects/mpahla.webp',
    description: 'A fully responsive mock e-commerce site built with JavaScript. includes dynamic pages for categories. products, products details with size options, and function cart.',
    gitHubLink: 'https://github.com/BlessingDotDev/project-ecommerce-site.git',
    deployed: false
  },
  {
    id: 'id2',
    name: 'anime-quotes',
    image: '../images/projects/anime-quotes.webp',
    description: 'Reponsive site built with JavaScript.Powered by Jikan API for Anime Data. <i>(Site still progress)</i>.',
    gitHubLink: 'https://github.com/BlessingDotDev/anime-quotes.git',
    deployed: true
  }
];

export function renderProjectsHTML() {
  let projectHtml = '';

  projects.forEach(project => {
    projectHtml += `
      <div class="project-container">
        <img class="project-image" 
          src=${project.image}
          >
        <div class="overlay display-overlay">
          <p class="project-description">
            ${project.description}
          </p>
          <a href="${project.gitHubLink}" target="_blank">
            <button class="link-button">
              View code on Github
            </button>
          </a>
        </div>
      </div>
    `
  });

  document.querySelector('.js-projects-grid')
    .innerHTML = projectHtml;
}
*/