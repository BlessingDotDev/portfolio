import { activatePreferedMode } from "./themeSwitching.js";
import { renderProjectsHTML } from "./projects.js";
import { renderTechBoxesAndReveal } from "./renderTechboxes.js";
import { revealOnce, revealStaggered } from "./reveal.js";

activatePreferedMode();
renderProjectsHTML();
renderTechBoxesAndReveal();

// reveal some single elements
revealOnce('.introduction', { baseDelay: 0, threshold: 0.12 });
revealOnce('.image-container', { baseDelay: 50, threshold: 0.12 });

// about me
revealOnce('.about-me-text', { baseDelay: 0, threshold: 0.12 });
revealOnce('.about-me-image', { baseDelay: 50, threshold: 0.12 });

// reveal footer links with a small stagger
revealStaggered('.footer-container a', { stagger: 80, baseDelay: 0, threshold: 0.05 });