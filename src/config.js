/**
 * Configuration file for Marquez Truck Repairs
 * Centralized settings for the application
 */

const CONFIG = {
    // Site Information
    site: {
        name: 'Marquez Truck Repairs',
        description: '15+ Years of Experience in Heavy-Duty Truck Repairs',
        url: 'https://marquezrepairs.com',
        email: 'info@marquezrepairs.com',
        phone: '(305) 555-1234',
        location: 'Miami, FL'
    },

    // Contact Form Settings
    contact: {
        formspreeEndpoint: null, // Add your Formspree endpoint here
        enableValidation: true,
        showSuccessMessage: true
    },

    // Animation Settings
    animations: {
        enableScrollAnimations: true,
        enableHoverEffects: true,
        animationDuration: 600,
        scrollThreshold: 0.1
    },

    // Performance Settings
    performance: {
        enableThrottling: true,
        throttleDelay: 16, // ~60fps
        enableLazyLoading: false
    },

    // Development Settings
    development: {
        debugMode: false,
        enableConsoleLogs: true,
        enableErrorReporting: true
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
} 