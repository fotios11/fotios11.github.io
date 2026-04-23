# Fotios - Portfolio Website

A minimalist, responsive portfolio for Fotios, a Computer Science student at the University of Piraeus.

## Features

✨ **Minimalist Design** - Clean, modern interface with smooth animations
🎓 **Academic Showcase** - Dedicated section for University of Piraeus studies
🚀 **Live GitHub Integration** - Automatically fetches and displays your top repositories
💻 **Skills Visualization** - Interactive skill tags organized by categories
📱 **Fully Responsive** - Works beautifully on desktop, tablet, and mobile devices
⚡ **Performance Optimized** - Fast-loading vanilla HTML, CSS, and JavaScript

## Sections

1. **Navigation Bar** - Sticky header with smooth scrolling to sections
2. **Hero Section** - Eye-catching introduction with CTAs
3. **Academic Section** - University of Piraeus Computer Science showcase
4. **Projects Grid** - GitHub-linked projects with stars and live links
5. **Skills Showcase** - Interactive skill tags with proficiency levels
6. **Footer** - Contact links and social profiles

## Customization Guide

### 1. Update Personal Information

**Email & Social Links** (index.html, footer section):
```html
<a href="mailto:your.email@example.com">Email</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
```

### 2. Modify Skills

Edit the skills section in `index.html` to add/remove skills:

```html
<div class="skill-category">
    <h3>Your Category</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

Add proficiency levels in `script.js`:
```javascript
const proficiencies = {
    'Your Skill': 'Advanced', // or 'Intermediate', 'Beginner'
    // ... more skills
};
```

### 3. Customize GitHub Username

Edit `script.js`:
```javascript
const username = 'your-github-username'; // Line 5
```

### 4. Personalize Colors

Modify CSS variables in `style.css`:
```css
:root {
    --primary-color: #0a0a0a;      /* Black */
    --accent-color: #2563eb;       /* Blue */
    --light-gray: #f3f4f6;         /* Light Gray */
}
```

### 5. Update Academic Information

Modify the academic section in `index.html`:
```html
<h3>Your University</h3>
<p class="academic-major">Your Program</p>
<p class="academic-description">Your description here...</p>
```

### 6. Customize Language Colors

Edit the `getLanguageColor()` function in `script.js` to change project header colors based on programming language.

## Deployment

### GitHub Pages (Recommended)
1. Push to your `fotios11.github.io` repository
2. Enable GitHub Pages in repository settings (main branch)
3. Your portfolio will be live at `https://fotios11.github.io`

### Other Hosting
- Upload files to any static hosting (Netlify, Vercel, etc.)
- Works without any build process

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - GitHub API integration and interactivity
- **GitHub API** - Live project fetching

## Features Breakdown

### Responsive Grid
- Projects and skills adapt to screen size
- Mobile-first design approach

### Smooth Animations
- Intersection Observer for scroll animations
- CSS transitions for hover effects
- Smooth scrolling navigation

### GitHub Integration
- Fetches 6 most recent repositories
- Displays star count and language
- Direct links to GitHub profiles

### Accessibility
- Semantic HTML structure
- Color contrast compliance
- Keyboard navigation support

## Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest
- Mobile browsers: iOS Safari, Chrome Mobile

## Tips for Standing Out

1. **Keep it updated** - Regularly commit to GitHub to show active development
2. **Write good READMEs** - Your GitHub projects should be well-documented
3. **Pin important projects** - GitHub shows pinned repositories first
4. **Meaningful descriptions** - Add clear descriptions to your repositories
5. **Consistent commits** - Show regular contribution history

## License

Feel free to customize this portfolio as you wish.
