# Development Guide - Marquez Truck Repairs

## 🏗️ Project Structure

```
MarquezTruckRepairs/
├── src/                    # Source files
│   ├── index.html         # Main HTML file
│   ├── config.js          # Application configuration
│   ├── assets/            # Static assets
│   │   ├── images/        # Image files
│   │   └── fonts/         # Font files
│   ├── styles/            # CSS files
│   │   ├── variables.css  # CSS variables and design tokens
│   │   └── main.css       # Main stylesheet
│   ├── scripts/           # JavaScript files
│   │   └── app.js         # Main application logic
│   └── components/        # Reusable components
│       ├── navigation.js  # Navigation component
│       └── contact-form.js # Contact form component
├── dist/                  # Production build (generated)
├── docs/                  # Documentation
├── build.js              # Build script
├── package.json          # Project configuration
└── README.md             # Project overview
```

## 🚀 Development Workflow

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required

### Available Scripts

```bash
# Development server (serves from src/)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clean build directory
npm run clean

# Start production server
npm run serve
```

### Development Workflow
Simply open the HTML file in your browser to see changes immediately:

```bash
npm run dev
# Opens src/index.html in your default browser
```

## 🎨 Styling Guidelines

### CSS Architecture
- **CSS Variables**: All design tokens are defined in `src/styles/variables.css`
- **Component-based**: Styles are organized by component/section
- **Mobile-first**: Responsive design starts with mobile and scales up

### Color Palette
```css
/* Primary Colors */
--primary-blue: #2563eb;
--primary-blue-dark: #1d4ed8;

/* Secondary Colors */
--secondary-orange: #f59e0b;
--secondary-orange-dark: #d97706;

/* Neutral Colors */
--gray-50: #f8fafc;
--gray-800: #1e293b;
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive Sizes**: Defined in CSS variables

## 🔧 Component Development

### Creating New Components

1. Create a new file in `src/components/`
2. Follow the class-based pattern:

```javascript
class MyComponent {
    constructor() {
        this.init();
    }
    
    init() {
        // Component initialization
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MyComponent;
} else {
    window.MyComponent = MyComponent;
}
```

3. Add the script to `src/index.html`
4. Initialize in `src/scripts/app.js`

### Component Guidelines
- Use ES6 classes for components
- Include proper error handling
- Add JSDoc comments for methods
- Make components configurable via options

## 📱 Responsive Design

### Breakpoints
```css
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Medium devices */
--breakpoint-lg: 1024px;  /* Large devices */
--breakpoint-xl: 1280px;  /* Extra large devices */
```

### Mobile-First Approach
1. Start with mobile styles
2. Use `min-width` media queries
3. Test on real devices
4. Consider touch interactions

## 🔍 Performance Optimization

### JavaScript
- Use `requestAnimationFrame` for scroll events
- Implement debouncing/throttling for frequent events
- Lazy load non-critical resources
- Minimize DOM queries

### CSS
- Use CSS variables for consistent theming
- Optimize selectors for performance
- Minimize repaints and reflows
- Use transform/opacity for animations

### Images
- Optimize image formats (WebP, AVIF)
- Implement lazy loading
- Use appropriate sizes for different devices
- Compress images for web

## 🧪 Testing

### Manual Testing Checklist
- [ ] Mobile navigation works
- [ ] Contact form validation
- [ ] Smooth scrolling
- [ ] Responsive design on all breakpoints
- [ ] Cross-browser compatibility
- [ ] Performance on slow connections

### Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 📦 Build Process

### Production Build
The build process copies files from `src/` to `dist/`:

```bash
npm run build
```

### Build Optimization
- Minify CSS and JavaScript (future enhancement)
- Optimize images (future enhancement)
- Generate source maps (future enhancement)
- Bundle dependencies (future enhancement)

## 🔧 Configuration

### Environment Variables
Configuration is centralized in `src/config.js`:

```javascript
const CONFIG = {
    site: {
        name: 'Marquez Truck Repairs',
        // ... other settings
    },
    contact: {
        formspreeEndpoint: null,
        // ... form settings
    }
};
```

### Customization
- Update site information in config
- Modify colors in CSS variables
- Add new components as needed
- Extend functionality through components

## 🐛 Debugging

### Console Logging
Enable debug logs in config:
```javascript
development: {
    debugMode: true,
    enableConsoleLogs: true
}
```

### Error Handling
- Global error handlers in main app
- Component-specific error handling
- User-friendly error messages
- Error reporting (future enhancement)

## 📚 Resources

### Documentation
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### Tools
- [Google Fonts](https://fonts.google.com/)
- [Formspree](https://formspree.io/) - Contact form backend
- [Netlify](https://netlify.com/) - Static hosting

## 🤝 Contributing

1. Follow the established code structure
2. Add comments for complex logic
3. Test on multiple devices
4. Update documentation as needed
5. Use semantic commit messages

---

**Happy coding! 🚛** 