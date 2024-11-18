const hotels = [
    {
        name: "Rixos Premium Belek",
        description: "Discover the beauty of the Turkish Riviera, enjoy the hospitality, and indulge in the delicious cuisine.",
        image: "rixos.jpg",
        reviews: [
            { name: "John Doe", review: "An amazing experience! Highly recommended!" },
            { name: "Jane Smith", review: "A fantastic stay with great amenities." }
        ]
    },
    {
        name: "Steigenberger Aqua Magic",
        description: "Explore the mysteries of Ancient Egypt and relax on the beaches of the Red Sea.",
        image: "egypt-hotel.jpg",
        reviews: [
            { name: "Michael Brown", review: "A truly unforgettable holiday." },
            { name: "Emily Davis", review: "I loved every moment of my stay here." }
        ]
    },
    {
        name: "The Ritz-Carlton Dubai",
        description: "Feel the luxury and modernity of Dubai.",
        image: "dubai.jpg",
        reviews: [
            { name: "Sarah Wilson", review: "A luxurious stay with all comforts." },
            { name: "David Johnson", review: "Amazing views, highly recommend!" }
        ]
    }
];

function displayHotels() {
    const hotelList = document.getElementById('hotel-list');
    hotels.forEach(hotel => {
        const hotelSection = document.createElement('section');
        hotelSection.classList.add('hotel-category', 'mb-4');
        hotelSection.innerHTML = `
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="card mb-3">
                        <img src="${hotel.image}" class="card-img-top img-fluid" alt="${hotel.name}">
                        <div class="card-body">
                            <h5 class="card-title">${hotel.name}</h5>
                            <p class="card-text">${hotel.description}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="reviews">
                        <h3>Customer Reviews</h3>
                        ${hotel.reviews.map(review => `
                            <div class="review">
                                <p><strong>${review.name}:</strong> "${review.review}"</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        hotelList.appendChild(hotelSection);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
        });

        // Apply saved theme on page load
        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
        }
    }

    // Initialize hotel display
    displayHotels();
});

// Adjusting modals for dark mode as well
document.addEventListener('show.bs.modal', function (event) {
    const modal = event.relatedTarget;
    if (document.body.classList.contains("dark-mode")) {
        modal.classList.add('dark-mode');
    } else {
        modal.classList.remove('dark-mode');
    }
});
