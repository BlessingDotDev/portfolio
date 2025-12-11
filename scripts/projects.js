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
    name: 'anime-quotes',
    image: './images/projects/anime-quotes.webp',
    description: 'Reponsive site built with JavaScript.Powered by Jikan API for Anime Data. <i>(Site still progress)</i>.',
    gitHubLink: 'https://github.com/BlessingDotDev/anime-quotes.git',
    siteLink: 'https://blessingdotdev.github.io/anime-quotes/',
    deployed: true
  },
  {
    id: 'id3',
    name: 'mock-ul-website',
    image: './images/projects/ul.png',
    description: 'Reponsive mock website of unversity of limpopo. <i>(Site still progress)</i>.',
    gitHubLink: 'https://github.com/BlessingDotDev/mock-ul-website.git',
    siteLink: 'https://blessingdotdev.github.io/mock-ul-website/',
    deployed: true
  }
];

export function renderProjectsHTML() {
  let projectHtml = '';

  projects.forEach(project => {
    projectHtml += `
      <div class="project-container">
        <img class="project-image" src=
          ${project.image}>
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
    `
  });

  document.querySelector('.js-projects-grid')
    .innerHTML = projectHtml;
}
