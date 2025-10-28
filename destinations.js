// Extended destinations data
const destinations = [
    {
        id: 1,
        name: "Maiyan Resort - Nanyuki",
        type: "mountain",
        price: "Ksh 3,999",
        image: "https://images.unsplash.com/photo-1464822759849-deb9df5c95c9?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=60",
        description: "Trek through the majestic Mt. Kenya with experienced guides",
        duration: "3 days",
        difficulty: "Advanced",
        rating: 4.9,
        features: ["Expert Guides", "Mountain Lodges", "Altitude Training"]
    },
    {
        id: 2,
        name: "Sarova Whitesands Beach Resort & Spa - Mombasa",
        type: "beach",
        price: "Ksh 4,999",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=60",
        description: "Luxury beachfront accommodation with water activities",
        duration: "3 days",
        difficulty: "Easy",
        rating: 4.7,
        features: ["Beachfront Villa", "Spa Treatments", "Water Sports"]
    },
    {
        id: 3,
        name: "Salt Lick Safari Lodge - Taita",
        type: "camping",
        price: "Ksh 3,850",
        image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=60",
        description: "Authentic camping experience in pristine wilderness",
        duration: "2 days",
        difficulty: "Moderate",
        rating: 4.8,
        features: ["Professional Gear", "Wildlife Watching", "Campfire Cooking"]
    },
    {
        id: 4,
        name: "Maasai Culture Tour - Narok",
        type: "cultural",
        price: "Ksh 2,999",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=60",
        description: "Immerse yourself in traditional rich Maa culture and history",
        duration: "2 days",
        difficulty: "Easy",
        rating: 4.9,
        features: ["Manyatta Stays", "Cultural Workshops", "Local Cuisine"]
    },
    {
        id: 5,
        name: "Ngong Hills Adventure",
        type: "mountain",
        price: "Ksh 1,999",
        image: "https://images.unsplash.com/photo-1464822759849-deb9df5c95c9?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=60",
        description: "Party under the turbines, hiking with luxury mountain huts catching a glimpse of the city under the sun - Nairobi - bird's eye view",
        duration: "1 day",
        difficulty: "Moderate",
        rating: 4.8,
        features: ["6ixx luxury mountain Huts", "Cable Car Rides", "Mountain Guides"]
    },
    {
        id: 6,
        name: "Atella Beach - Kisumu",
        type: "beach",
        price: "Ksh 4,999",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=60",
        description: "Private island experience in Africa's biggest natural lake, named after Queen Victoria",
        duration: "3 days",
        difficulty: "Easy",
        rating: 4.9,
        features: ["Private Beach", "Snorkeling", "Luxury Resort"]
    },
    {
        id: 7,
        name: "Karura Forest",
        type: "camping",
        price: "Ksh 2,999",
        image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=60",
        description: "African safari with luxury tent camping",
        duration: "2 days",
        difficulty: "Easy",
        rating: 5.0,
        features: ["Game Drives", "Luxury Tents", "Professional Photographer"]
    },
    {
        id: 8,
        name: "Fort Jesus - Mombasa",
        type: "cultural",
        price: "Ksh 2,900",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=60",
        description: "Explore ancient Kenyan history and coastal culture",
        duration: "3 days",
        difficulty: "Easy",
        rating: 4.7,
        features: ["Historical Sites", "Wine Tasting", "Cooking Classes"]
    }
];

// Display destinations with enhanced cards
function displayDestinations(filter = 'all') {
    const grid = document.querySelector('.destinations-grid-extended');
    const filteredDestinations = filter === 'all' 
        ? destinations 
        : destinations.filter(dest => dest.type === filter);

    grid.innerHTML = filteredDestinations.map(dest => `
        <div class="destination-card enhanced-card" data-type="${dest.type}">
            <div class="card-image">
                <img src="${dest.image}" alt="${dest.name}">
                <div class="card-badge">${dest.difficulty}</div>
                <div class="card-rating">
                    <i class="fas fa-star"></i> ${dest.rating}
                </div>
            </div>
            <div class="card-content">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
                
                <div class="destination-features">
                    ${dest.features.map(feature => `
                        <span class="feature-tag"><i class="fas fa-check"></i> ${feature}</span>
                    `).join('')}
                </div>
                
                <div class="card-meta-enhanced">
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${dest.duration}</span>
                    </div>
                    <div class="price">${dest.price}</div>
                </div>
                
                <button class="book-btn enhanced-btn" data-id="${dest.id}">
                    <i class="fas fa-calendar-check"></i> Book Adventure
                </button>
            </div>
        </div>
    `).join('');

    // Add event listeners to book buttons
    document.querySelectorAll('.enhanced-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const destId = e.target.closest('.enhanced-btn').dataset.id;
            const destination = destinations.find(d => d.id == destId);
            bookDestination(destination);
        });
    });
}

// Book destination function
function bookDestination(destination) {
    const modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Book ${destination.name}</h3>
            <p>${destination.description}</p>
            <div class="booking-details">
                <p><strong>Duration:</strong> ${destination.duration}</p>
                <p><strong>Difficulty:</strong> ${destination.difficulty}</p>
                <p><strong>Price:</strong> ${destination.price}</p>
            </div>
            <div class="modal-actions">
                <button class="cancel-btn">Cancel</button>
                <button class="confirm-btn">Confirm Booking</button>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.querySelector('.modal-content').style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        animation: slideInUp 0.3s ease;
    `;
    
    modal.querySelector('.cancel-btn').style.cssText = `
        background: #ccc;
        color: #333;
        border: none;
        padding: 12px 25px;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 1rem;
    `;
    
    modal.querySelector('.confirm-btn').style.cssText = `
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 5px;
        cursor: pointer;
    `;
    
    // Add event listeners
    modal.querySelector('.cancel-btn').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.confirm-btn').addEventListener('click', () => {
        alert(`Booking confirmed for ${destination.name}! We'll contact you soon.`);
        modal.remove();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    document.body.appendChild(modal);
}

// Filter functionality
function initializeFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Filter destinations
            const filter = e.target.dataset.filter;
            displayDestinations(filter);
        });
    });
}

// Add enhanced card styles
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    .destinations-header.hero {
        height: 60vh;
        margin-top: 80px;
    }
    
    .destinations-filter {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 3rem;
        flex-wrap: wrap;
    }
    
    .filter-btn {
        background: var(--white);
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
        padding: 12px 25px;
        border-radius: 25px;
        cursor: pointer;
        transition: var(--transition);
        font-weight: 600;
    }
    
    .filter-btn.active,
    .filter-btn:hover {
        background: var(--primary-color);
        color: var(--white);
    }
    
    .destinations-grid-extended {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2.5rem;
    }
    
    .enhanced-card {
        position: relative;
    }
    
    .card-badge {
        position: absolute;
        top: 15px;
        left: 15px;
        background: var(--secondary-color);
        color: white;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
    }
    
    .card-rating {
        position: absolute;
        top: 15px;
        right: 15px;
        background: rgba(255,255,255,0.9);
        color: var(--text-dark);
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .card-rating i {
        color: #ffd700;
    }
    
    .destination-features {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }
    
    .feature-tag {
        background: var(--background-light);
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .feature-tag i {
        color: var(--primary-color);
        font-size: 0.7rem;
    }
    
    .card-meta-enhanced {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1.5rem 0;
    }
    
    .meta-item {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--text-light);
    }
    
    .enhanced-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .all-destinations {
        padding: 80px 0;
        background: var(--background-light);
    }
`;
document.head.appendChild(enhancedStyles);

// Initialize destinations page
if (document.querySelector('.all-destinations')) {
    displayDestinations();
    initializeFilters();
    
    // Check URL parameters for specific filters
    const urlParams = new URLSearchParams(window.location.search);
    const typeFilter = urlParams.get('type');
    if (typeFilter && ['mountain', 'beach', 'camping', 'cultural'].includes(typeFilter)) {
        document.querySelector(`.filter-btn[data-filter="${typeFilter}"]`).click();
    }
}
