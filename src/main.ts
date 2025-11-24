import './style.css'
import { CosmicBackground } from './background'
import { Coin3D } from './coin'

// Initialize Cosmic Background
new CosmicBackground();

// Initialize 3D Coin
new Coin3D('.coin-visual');

// Custom Cursor (Loupe) Logic
const cursor = document.getElementById('cursor-loupe');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Add active state when hovering over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .type-card, .charm-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
}

// Scroll Animation Observer (Cinematic Reveal)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});
