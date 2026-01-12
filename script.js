/*
 * Custom JavaScript for Anthony Kobanda’s portfolio
 *
 * Handles responsive navigation toggling, smooth scrolling and dynamic
 * elements such as the current year. Keeping JavaScript minimal and
 * unobtrusive ensures the site remains fast and easy to maintain.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
  // Close menu when clicking a link (use event delegation)
  navMenu.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      navMenu.classList.remove('open');
    }
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 60, // account for fixed nav height
          behavior: 'smooth'
        });
      }
    });
  });

  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});