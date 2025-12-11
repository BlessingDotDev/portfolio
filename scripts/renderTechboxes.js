const technologies = [
  { name: 'HTML5', logo: 'images/logos/html.png' },
  { name: 'CSS3', logo: 'images/logos/css-3.png' },
  { name: 'Javascript', logo: 'images/logos/js.png' },
  { name: 'Responsive', logo: 'images/logos/devices.png' },
  { name: 'React', logo: 'images/logos/React.png' },
  { name: 'Node.js', logo: 'images/logos/Node.js.png' },
  { name: 'PHP', logo: 'images/logos/php.png' },
  { name: 'Python', logo: 'images/logos/python.png' }
];

export function renderTechBoxes() {
  let techHtml = '';
  
  technologies.forEach(tech => {
    techHtml += `
      <div class="tech-box">
        <img class="tech-logo" src="${tech.logo}" alt="${tech.name.toLowerCase()} logo">
        <div class="logo-name">${tech.name}</div>
      </div>
    `;
  });
  
  const techFlexContainer = document.querySelector('.tech-flex');
  if (techFlexContainer) {
    techFlexContainer.innerHTML = techHtml;
  }
}
