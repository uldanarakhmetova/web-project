
document.addEventListener("DOMContentLoaded", () => {
    displayCurrentDateTime();
    displayCities();
    loadFilterSettings();
    loadUserPreferences();
});
function loadUserPreferences() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

const tours = {
    "Istanbul": {
        price: 200,
        duration: "3 days",
        description: "Explore the historic sites of Istanbul."
    },
    "Cappadocia": {
        price: 150,
        duration: "2 days",
        description: "Experience the unique landscapes of Cappadocia."
    },
    "Cairo": {
        price: 180,
        duration: "4 days",
        description: "Visit the Great Pyramids and the Sphinx."
    },
    "Giza": {
        price: 220,
        duration: "3 days",
        description: "Discover the wonders of ancient Egypt."
    },
    "Luxor": {
        price: 250,
        duration: "5 days",
        description: "Explore the temples and tombs of Luxor."
    },
    "Dubai": {
        price: 300,
        duration: "4 days",
        description: "Experience luxury and modern attractions."
    },
    "Abu Dhabi": {
        price: 280,
        duration: "3 days",
        description: "Visit the Sheikh Zayed Grand Mosque."
    }
};

const citiesArray = ["Istanbul", "Cappadocia", "Cairo", "Giza", "Luxor", "Dubai", "Abu Dhabi"];

function displayTourDetails(city) {
    const tourInfo = tours[city];
    if (tourInfo) {
        document.getElementById("tour-message").textContent =
            `Tour: ${tourInfo.description}, Duration: ${tourInfo.duration}, Price: $${tourInfo.price}`;
    }
}

function displayCities() {
    const cityList = document.getElementById("city-list");
    citiesArray.forEach(city => {
        const listItem = document.createElement("li");
        listItem.textContent = city;
        cityList.appendChild(listItem);
    });
}

function processCities(callback) {
    citiesArray.forEach(callback);
}

processCities(city => {
    console.log(`Processing tour for: ${city}`);
});

function updateCities() {
    const cities = {
        "Turkey": ["Istanbul", "Cappadocia"],
        "Egypt": ["Cairo", "Giza", "Luxor"],
        "UAE": ["Dubai", "Abu Dhabi"]
    };
    const country = document.getElementById("country").value;
    const citySelect = document.getElementById("city");
    citySelect.innerHTML = "<option value=''>Select a city</option>";
    if (cities[country]) {
        cities[country].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.text = city;
            citySelect.appendChild(option);
        });
    }
}

function loadFilterSettings() {
    const savedCountry = localStorage.getItem('selectedCountry');
    const savedCity = localStorage.getItem('selectedCity');

    if (savedCountry) document.getElementById("country").value = savedCountry;
    if (savedCity) {
        document.getElementById("city").innerHTML = `<option value="${savedCity}">${savedCity}</option>`;
        document.getElementById("city").value = savedCity;
    }
}

function validateForm() {
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const date = document.getElementById("date").value;
    const nights = document.getElementById("nights").value;
    const message = document.getElementById("message");

    if (!country || !city || !date || !nights) {
        message.textContent = "Please fill in all fields.";
        return;
    }

    const selectedDate = new Date(date);
    const today = new Date();
    if (selectedDate <= today) {
        message.textContent = "Please select a future date.";
        return;
    }

    localStorage.setItem('selectedCountry', country);
    localStorage.setItem('selectedCity', city);

    message.textContent = `I found tours for your requirements in ${city}, ${country} for ${nights} nights on ${date}.`;

    displayTourDetails(city);
    window.location.href = 'tours.html';
}

function loadUserPreferences() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function displayCurrentDateTime() {
    const dateElement = document.getElementById('current-date-time');
    setInterval(() => {
        const now = new Date();
        dateElement.textContent = now.toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });
    }, 1000);
}

function changeBackground() {
    const colors = ["#f4f4f4", "#ffe4b5", "#add8e6", "#e6e6fa", "#ffcccb", "#d3ffce"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function playSound() {
    const sound = document.getElementById('notification-sound');
    if (sound) sound.play();
}

function resetForm() {
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById('message').textContent = "";
    document.getElementById('tour-message').textContent = "";
}
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
});

document.getElementById("submit-button").addEventListener("click", validateForm);
document.getElementById("reset-button").addEventListener("click", resetForm);
document.getElementById("change-bg-button").addEventListener("click", changeBackground);
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
