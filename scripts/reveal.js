// Reusable reveal helpers using IntersectionObserver
// revealStaggered(selector, { stagger, baseDelay, threshold })
export function revealStaggered(selector, options = {}) {
  const { stagger = 120, baseDelay = 0, threshold = 0.12 } = options;
  const nodes = document.querySelectorAll(selector);
  if (!nodes || nodes.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const idx = Number(entry.target.dataset.index) || Array.from(nodes).indexOf(entry.target) || 0;
      const delay = baseDelay + (idx * stagger);
      setTimeout(() => entry.target.classList.add('animate'), delay);
      observer.unobserve(entry.target);
    });
  }, { threshold });

  nodes.forEach(n => observer.observe(n));
}

// revealOnce(selector, { baseDelay, threshold }) - for single elements
export function revealOnce(selector, options = {}) {
  const { baseDelay = 0, threshold = 0.12 } = options;
  const node = document.querySelector(selector);
  if (!node) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      setTimeout(() => node.classList.add('animate'), baseDelay);
      observer.unobserve(node);
    });
  }, { threshold });

  observer.observe(node);
}
