function toggleFAQ(faqId) {
    var answer = document.getElementById(faqId);
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

document.getElementById('readMoreBtn').addEventListener('click', function() {
    const extraContent = document.getElementById('extraContent');
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        extraContent.style.display = 'none';
        this.textContent = 'Read More';
    }
});

const facts = [
    "We organize over 500 tours a year.",
    "Our team consists of 30 travel experts.",
    "We have traveled to over 50 countries.",
    "We offer personalized itineraries for every client."
];

document.getElementById('randomFactBtn').addEventListener('click', function() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('randomFact').textContent = randomFact;
});


const testimonials = [
    { text: "Global Travels made our dream vacation possible! Highly recommend.", author: "Shaidullin Alibek" },
    { text: "Best travel agency! Everything was smooth and well-planned.", author: "Umarova Adiya" },
    { text: "The service was exceptional, and the trip was unforgettable.", author: "Potapova Alina" }
];

const testimonialsContainer = document.getElementById('testimonialsContainer');
testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<div class="card-body">
        <p class="card-text text-center">"${testimonial.text}"</p>
        <p class="blockquote-footer text-center">${testimonial.author}</p>
    </div>`;
    testimonialsContainer.appendChild(card);
});

function updateDateTime() {
    let now = new Date();
    document.getElementById('dateTime').innerText = now.toLocaleString();
}

setInterval(updateDateTime, 1000);


document.getElementById('subscribeBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'block';
});

function closePopup() {
    document.getElementById('popupForm').style.display = 'none';
}


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('popupEmail').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.match(emailPattern)) {
        let audio = new Audio('subscribe-sound.mp3'); 
        audio.play().then(() => {
            alert('Thank you for subscribing!');
            closePopup();
        }).catch(function(error) {
            console.error("Ошибка воспроизведения звука:", error);
        });
    } else {
        alert('Please enter a valid email address.');
    }
});

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

