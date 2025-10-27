// Destinations data
const destinations = [
    {
        id: 1,
        name: "Bali, Indonesia",
        type: "beach",
        price: 899,
        image: "images/destination1.jpg",
        description: "Tropical paradise with stunning beaches"
    },
    {
        id: 2,
        name: "Swiss Alps",
        type: "mountain",
        price: 1299,
        image: "images/destination2.jpg",
        description: "Majestic mountains and charming villages"
    },
    {
        id: 3,
        name: "Santorini, Greece",
        type: "beach",
        price: 1099,
        image: "images/destination3.jpg",
        description: "White-washed buildings and stunning sunsets"
    },
    {
        id: 4,
        name: "Tokyo, Japan",
        type: "city",
        price: 1499,
        image: "images/destination4.jpg",
        description: "Vibrant city blending tradition and modernity"
    },
    {
        id: 5,
        name: "Rocky Mountains",
        type: "mountain",
        price: 999,
        image: "images/destination5.jpg",
        description: "Breathtaking landscapes and outdoor adventures"
    },
    {
        id: 6,
        name: "Barcelona, Spain",
        type: "city",
        price: 1199,
        image: "images/destination6.jpg",
        description: "Architectural marvels and Mediterranean charm"
    }
];

// Display destinations
function displayDestinations(filter = 'all') {
    const grid = document.querySelector('.destinations-grid-extended');
    const filteredDestinations = filter === 'all' 
        ? destinations 
        : destinations.filter(dest => dest.type === filter);

    grid.innerHTML = filteredDestinations.map(dest => `
        <div class="destination-card" data-type="${dest.type}">
            <img src="${dest.image}" alt="${dest.name}">
            <div class="card-content">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
                <span class="price">From $${dest.price}</span>
                <button class="book-btn" data-id="${dest.id}">Book Now</button>
            </div>
        </div>
    `).join('');

    // Add event listeners to book buttons
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const destId = e.target.dataset.id;
            const destination = destinations.find(d => d.id == destId);
            alert(`Booking ${destination.name} for $${destination.price}`);
        });
    });
}

// Filter functionality
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

// Initialize destinations page
if (document.querySelector('.all-destinations')) {
    displayDestinations();
}
