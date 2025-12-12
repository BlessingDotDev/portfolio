import { activatePreferedMode } from "./themeSwitching.js";
import { renderProjectsHTML } from "./projects.js";
import { renderTechBoxesAndReveal } from "./renderTechboxes.js";
import { revealOnce, revealStaggered } from "./reveal.js";

activatePreferedMode();
renderProjectsHTML();
renderTechBoxesAndReveal();

// reveal some single elements with longer delays for smooth, staggered effect
revealOnce('.introduction', { baseDelay: 0, threshold: 0.12 });
revealOnce('.image-container', { baseDelay: 150, threshold: 0.12 });

// about me with deliberate stagger
revealOnce('.about-me-text', { baseDelay: 0, threshold: 0.12 });
revealOnce('.about-me-image', { baseDelay: 150, threshold: 0.12 });

// reveal footer links with slower stagger
revealStaggered('.footer-container a', { stagger: 150, baseDelay: 0, threshold: 0.05 });