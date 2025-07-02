/**
 * Simple Build Script for Marquez Truck Repairs
 * Copies files from src/ to dist/ for production
 */

const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// Function to copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Copy all files from src to dist
try {
    copyDir('src', 'dist');
    console.log('✅ Build completed successfully!');
    console.log('📁 Files copied from src/ to dist/');
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
} 