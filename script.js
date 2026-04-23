// Fetch GitHub repositories
async function fetchGitHubProjects() {
    const username = 'fotios11';
    const grid = document.getElementById('projects-grid');

    try {
        // Fetch user's repositories
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const repos = await response.json();

        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }

        // Clear loading message
        grid.innerHTML = '';

        // Filter out forked repositories and display top projects
        const projects = repos.filter(repo => !repo.fork || repo.stargazers_count > 0).slice(0, 6);

        if (projects.length === 0) {
            grid.innerHTML = '<p class="loading">No projects found.</p>';
            return;
        }

        // Create project cards
        projects.forEach(repo => {
            const card = createProjectCard(repo);
            grid.appendChild(card);
        });

    } catch (error) {
        grid.innerHTML = `<p class="loading">Error loading projects: ${error.message}</p>`;
        console.error('Error fetching GitHub projects:', error);
    }
}

// Create a project card element
function createProjectCard(repo) {
    const card = document.createElement('div');
    card.className = 'project-card';

    // Get language color
    const languageColor = getLanguageColor(repo.language);

    // Extract description
    const description = repo.description || 'A GitHub project';

    // Get primary language(s)
    const languages = repo.language ? [repo.language] : ['JavaScript'];

    const card_html = `
        <div class="project-header" style="background: ${languageColor}">
            <h3>${repo.name}</h3>
            <p class="project-description">${description}</p>
            <div class="project-languages">
                ${languages.map(lang => `<span class="language-tag">${lang}</span>`).join('')}
            </div>
        </div>
        <div class="project-footer">
            <a href="${repo.html_url}" class="project-link" target="_blank">
                ⭐ ${repo.stargazers_count}
            </a>
            <a href="${repo.html_url}" class="project-link" target="_blank">
                → View
            </a>
        </div>
    `;

    card.innerHTML = card_html;
    return card;
}

// Get color based on programming language
function getLanguageColor(language) {
    const colors = {
        'JavaScript': 'linear-gradient(135deg, #f7df1e 0%, #f7b21d 100%)',
        'Python': 'linear-gradient(135deg, #3776ab 0%, #4b8bbe 100%)',
        'Java': 'linear-gradient(135deg, #007396 0%, #0d6daa 100%)',
        'C++': 'linear-gradient(135deg, #00599c 0%, #0073b8 100%)',
        'TypeScript': 'linear-gradient(135deg, #2b7a0b 0%, #3178c6 100%)',
        'HTML': 'linear-gradient(135deg, #e34c26 0%, #ff6b3d 100%)',
        'CSS': 'linear-gradient(135deg, #563d7c 0%, #6b5e95 100%)',
        'React': 'linear-gradient(135deg, #61dafb 0%, #087ea4 100%)',
        'Node.js': 'linear-gradient(135deg, #68a063 0%, #7cb342 100%)',
        'default': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    };

    return colors[language] || colors['default'];
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for skill tags
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill tags for animation
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(10px)';
    tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(tag);
});

// Observe project cards
document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display GitHub projects
    fetchGitHubProjects();

    // Add scroll animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add some interactivity to skill tags - show proficiency on hover
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        const proficiencies = {
            'Python': 'Advanced',
            'JavaScript': 'Advanced',
            'Java': 'Intermediate',
            'C++': 'Intermediate',
            'SQL': 'Advanced',
            'HTML/CSS': 'Advanced',
            'React': 'Advanced',
            'Node.js': 'Intermediate',
            'REST APIs': 'Advanced',
            'Git': 'Advanced',
            'VS Code': 'Advanced',
            'GitHub': 'Advanced',
            'Linux': 'Intermediate',
            'Docker': 'Beginner',
            'PostgreSQL': 'Intermediate'
        };

        const skill = this.textContent;
        const level = proficiencies[skill] || 'Intermediate';
        this.title = `Proficiency: ${level}`;
    });
});
