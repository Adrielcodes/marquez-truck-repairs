# Marquez Truck Repairs Website

A modern, responsive website for Marquez Truck Repairs - a heavy-duty truck repair service with 15+ years of experience.

## 🚛 Project Overview

This is a professional website showcasing Marquez Truck Repairs' services including:
- Power Steering Repairs
- Gear Box Repairs  
- Power Pump Repairs
- Full-Service Truck Maintenance

## 📁 Project Structure

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

## 🎨 Features

### Design & User Experience
- **Modern, Clean Design**: Professional appearance with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects and hover animations for enhanced user experience
- **Mobile-First Navigation**: Hamburger menu for mobile devices

### Functionality
- **Interactive Navigation**: Smooth scrolling between sections
- **Contact Form**: Functional contact form with validation
- **Scroll Effects**: Dynamic navbar that changes on scroll
- **Performance Optimized**: Throttled scroll events and optimized animations

### Technical Features
- **Semantic HTML5**: Proper structure and accessibility
- **CSS3 Animations**: Modern CSS with keyframes and transitions
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **Cross-Browser Compatible**: Works on all modern browsers

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required

### Installation
1. Clone or download this repository
2. Install dependencies: `npm install` (optional)
3. For development: `npm run dev`
4. For production: `npm run build && npm run serve`

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Quick Start
```bash
# Clone the repository
git clone <repository-url>
cd MarquezTruckRepairs

# Open the website
npm run dev

# Or simply open src/index.html in your browser
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 🔧 Customization

### Colors
The main color scheme can be modified in `src/styles/variables.css`:
- Primary Blue: `#2563eb`
- Secondary Orange: `#f59e0b`
- Background Gray: `#f8fafc`
- Text Dark: `#1e293b`

### Content
- Update business information in `src/index.html`
- Modify services in the services section
- Update contact information in the contact section

### Styling
- All styles are in `src/styles/main.css` with clear section comments
- CSS variables are in `src/styles/variables.css`
- Responsive design is handled with media queries
- Animations are defined in the animations section

## 📧 Contact Form Integration

The contact form is currently set up for demonstration. To make it functional:

### Option 1: Formspree (Recommended)
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form action in `src/index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove the JavaScript form handling in `src/scripts/app.js`

### Option 2: Custom Backend
1. Set up your own backend server
2. Update the form action to point to your endpoint
3. Modify the JavaScript form handling accordingly

## 🚀 Deployment

### Static Hosting
This website can be deployed to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository
- **AWS S3**: Upload files to an S3 bucket

### Custom Domain
1. Purchase a domain name
2. Configure DNS settings to point to your hosting provider
3. Update any hardcoded URLs in the code

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: info@marquezrepairs.com
- Phone: (305) 555-1234

## 🔄 Version History

- **v1.0.0**: Initial release with responsive design and contact form
- Features: Mobile navigation, smooth scrolling, animations, form validation

---

**Built with ❤️ for Marquez Truck Repairs** 