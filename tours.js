
function loadFilterSettings() {
    const savedCountry = localStorage.getItem('selectedCountry');
    const savedCity = localStorage.getItem('selectedCity');

    if (savedCountry) {
        document.getElementById("country").value = savedCountry;
    }
    if (savedCity) {
        document.getElementById("city").innerHTML = `<option value="${savedCity}">${savedCity}</option>`;
        document.getElementById("city").value = savedCity;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    loadFilterSettings();
    loadUserPreferences();
});
document.addEventListener("DOMContentLoaded", () => {
    const weatherDescription = document.getElementById("weather-description");
    const weatherForm = document.getElementById("weather-form");
    const cityInput = document.getElementById("city-input");
    const cityButtons = document.querySelectorAll(".city-btn");

    async function fetchWeather(city = "London") {
        try {
            const apiKey = "872e0624c57589a77e909895cce49332"; // Replace with your API key
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            );
            const data = await response.json();
            if (data.cod === 200) {
                weatherDescription.textContent = `${data.name}: ${data.weather[0].description}, ${data.main.temp}°C`;
            } else {
                weatherDescription.textContent = "City not found. Please try again.";
            }
        } catch (error) {
            weatherDescription.textContent = "Error fetching weather data.";
        }
    }

    fetchWeather();

    weatherForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
            cityInput.value = "";
        }
    });


    cityButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const city = button.getAttribute("data-city");
            fetchWeather(city);
        });
    });
});


function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

function loadTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

document.addEventListener("DOMContentLoaded", loadTheme);

function showTourDetails(tour) {
    const moreInfoSection = document.getElementById(`${tour}-details`);
    if (moreInfoSection.style.display === "none" || moreInfoSection.style.display === "") {
        moreInfoSection.style.display = "block";
    } else {
        moreInfoSection.style.display = "none";
    }
}

function openModal(tour) {
    const modal = document.getElementById(`${tour}-modal`);
    modal.style.display = 'block';
}

function closeModal(tour) {
    const modal = document.getElementById(`${tour}-modal`);
    modal.style.display = 'none';
}

document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.parentElement.parentElement;
        modal.style.display = 'none';
    });
});

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        const stars = this.parentElement.querySelectorAll('.star');
        const ratingValue = parseInt(this.getAttribute('data-value'));

        stars.forEach(star => star.style.color = '#ccc');

        for (let i = 0; i < ratingValue; i++) {
            stars[i].style.color = '#ffcc00';
        }
    });
});
function loadFilterSettings() {
    const savedCountry = localStorage.getItem('selectedCountry');
    const savedCity = localStorage.getItem('selectedCity');
    if (savedCountry) {
        document.getElementById("country").value = savedCountry;
    }
    if (savedCity) {
        document.getElementById("city").innerHTML = `<option value="${savedCity}">${savedCity}</option>`;
        document.getElementById("city").value = savedCity;
    }
}

document.addEventListener("DOMContentLoaded", loadFilterSettings);

document.getElementById("readMoreBtn").addEventListener("click", function() {
    const moreInfoSection = document.getElementById("more-info");
    if (moreInfoSection.style.display === "none" || moreInfoSection.style.display === "") {
        moreInfoSection.style.display = "block";
        this.textContent = "Read Less";
    } else {
        moreInfoSection.style.display = "none";
        this.textContent = "Read More";
    }
});
