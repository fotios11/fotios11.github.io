// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateToggleIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
});

function updateToggleIcon(theme) {
    const icon = themeToggle.querySelector('.toggle-icon');
    icon.textContent = theme === 'dark' ? '☀' : '☾';
}

// ===== Navigation Links =====
const logoLink = document.querySelector('.logo');
logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Staggered Scroll-Reveal Animations =====
const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe all card elements with staggered animations
document.querySelectorAll(
    '.narrative, .experience-card, .skill-item, .focus-card, .social-link, .personal-icon'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});
