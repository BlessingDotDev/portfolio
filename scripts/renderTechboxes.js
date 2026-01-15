import { revealStaggered } from './reveal.js';

const technologies = [
  { name: 'HTML5', logo: './images/logos/html.png' },
  { name: 'CSS3', logo: './images/logos/css-3.png' },
  { name: 'Javascript', logo: './images/logos/js.png' },
  { name: 'Responsive', logo: './images/logos/devices.png' },
  { name: 'React', logo: './images/logos/React.png' },
  { name: 'Node.js', logo: './images/logos/Node.js.png' },
  { name: 'Express.js', logo: './images/logos/Express.png' },
  { name: 'MongoDB', logo: './images/logos/MongoDB.png' },
  { name: 'PHP', logo: './images/logos/php.png' },
  { name: 'Python', logo: './images/logos/python.png' }
];

export function renderTechBoxes() {
  let techHtml = '';
  
  technologies.forEach(tech => {
    techHtml += `
      <div class="tech-box">
        <img class="tech-logo" src="${tech.logo}" alt="${tech.name.toLowerCase()} logo">
        <div class="tech-logo-name">${tech.name}</div>
      </div>
    `;
  });
  
  const techFlexContainer = document.querySelector('.tech-flex');
  if (techFlexContainer) {
    techFlexContainer.innerHTML = techHtml;
  }
}

// Apply reveal to tech boxes after render
export function renderTechBoxesAndReveal() {
  renderTechBoxes();
  // small stagger for tech icons
  revealStaggered('.tech-box', { stagger: 150, baseDelay: 0, threshold: 0.05});
}
