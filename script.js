// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu && navToggle) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links
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

// Newsletter form submission
function subscribeNewsletter(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Simulate API call
    showNotification(`Thank you for subscribing with: ${email}`, 'success');
    form.reset();
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#2c5530' : '#ff6b35'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Explore Now button functionality
function exploreNow() {
    window.location.href = 'destinations.html';
}

// Show destination details
function showDestination(type) {
    const destinations = {
        mountain: {
            name: 'Mountain Trekking',
            price: 799,
            description: 'Experience the thrill of high-altitude adventures with expert guides.'
        },
        beach: {
            name: 'Beach Paradise',
            price: 699,
            description: 'Relax and unwind in tropical paradise locations.'
        },
        camping: {
            name: 'Wilderness Camping',
            price: 499,
            description: 'Connect with nature in pristine wilderness areas.'
        }
    };
    
    const dest = destinations[type];
    if (dest) {
        showNotification(`Exploring ${dest.name} - $${dest.price}`, 'info');
        // In a real app, you would redirect to a booking page or show a modal
        setTimeout(() => {
            window.location.href = `destinations.html?type=${type}`;
        }, 1000);
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification button {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
document.head.appendChild(notificationStyles);

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('6ixx Adventures website loaded successfully!');
    
    // Add loading animation removal
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Page transition
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// Add this to your existing CSS for better transitions
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .page-transition {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    }
    
    .page-loaded .page-transition {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(additionalStyles);

// Mark page as loaded
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});
