document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
        });

        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
        }
    }
});


const carouselItems = document.querySelectorAll('.carousel-item');
let currentSlide = 0;

function moveToNextSlide() {
    carouselItems[currentSlide].classList.remove('active');

    const nextSlide = (currentSlide + 1) % carouselItems.length;

    carouselItems[nextSlide].classList.add('active');

    currentSlide = nextSlide;
}

setInterval(moveToNextSlide, 3000);
