/**
 * MARQUEZ TRUCK REPAIRS - MAIN JAVASCRIPT FILE
 * Handles all interactive functionality for the website
 */

// Import configuration
// Note: In a real build process, you'd use a module bundler
// For now, we'll load config via script tag in HTML

// ========================================
// MAIN APPLICATION CLASS
// ========================================

class MarquezTruckRepairsApp {
    constructor() {
        this.config = window.CONFIG || {};
        this.components = {};
        
        this.init();
    }
    
    init() {
        this.loadComponents();
        this.setupAnimations();
        this.setupErrorHandling();
        this.logInitialization();
    }
    
    loadComponents() {
        // Initialize navigation component
        if (window.Navigation) {
            this.components.navigation = new window.Navigation();
        }
        
        // Initialize contact form component
        if (window.ContactForm) {
            this.components.contactForm = new window.ContactForm();
        }
    }
    
    setupAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: this.config.animations?.scrollThreshold || 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }
    
    setupErrorHandling() {
        // Global error handler for unhandled errors
        window.addEventListener('error', (e) => {
            console.error('An error occurred:', e.error);
            // You can add error reporting logic here
        });

        // Handle unhandled promise rejections
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
            // You can add error reporting logic here
        });
    }
    
    logInitialization() {
        if (this.config.development?.enableConsoleLogs) {
            console.log('🚛 Marquez Truck Repairs website loaded successfully!');
            console.log('📋 Configuration:', this.config);
        }
    }
}

// ========================================
// MOBILE MENU FUNCTIONALITY
// ========================================

/**
 * Toggle mobile menu visibility
 */
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

/**
 * Close mobile menu when clicking on navigation links
 */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========================================
// NAVBAR SCROLL EFFECTS
// ========================================

/**
 * Add/remove scrolled class to navbar based on scroll position
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

/**
 * Configuration for intersection observer
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

/**
 * Intersection observer for fade-in animations
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

/**
 * Observe all fade-in elements for animation triggers
 */
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ========================================
// CONTACT FORM HANDLING
// ========================================

/**
 * Handle contact form submission
 */
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Validate form data
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission (replace with actual backend integration)
    alert(`Thank you, ${name}! We've received your message and will get back to you at ${email} soon.`);
    
    // Reset form
    this.reset();
    
    // Note: To integrate with Formspree, replace the form action with:
    // <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    // and remove the JavaScript preventDefault
});

// ========================================
// SMOOTH SCROLLING
// ========================================

/**
 * Enable smooth scrolling for all anchor links
 */
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

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - The function to debounce
 * @param {number} wait - The delay in milliseconds
 * @returns {Function} - The debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit how often a function can be called
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} - The throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ========================================
// PERFORMANCE OPTIMIZATIONS
// ========================================

/**
 * Optimize scroll event with throttling
 */
const optimizedScrollHandler = throttle(() => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 16); // ~60fps

// Replace the original scroll listener with optimized version
window.removeEventListener('scroll', () => {});
window.addEventListener('scroll', optimizedScrollHandler);

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Create and initialize the main application
    window.app = new MarquezTruckRepairsApp();
});

// Export for use in other modules (if using a module bundler)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MarquezTruckRepairsApp;
} else {
    window.MarquezTruckRepairsApp = MarquezTruckRepairsApp;
} 