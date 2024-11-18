let currentStep = 1;

function nextStep() {
    document.getElementById(`step${currentStep}`).style.display = 'none';
    document.getElementById(`step${++currentStep}`).style.display = 'block';
}

function previousStep() {
    document.getElementById(`step${currentStep}`).style.display = 'none';
    document.getElementById(`step${--currentStep}`).style.display = 'block';
}

document.getElementById('multiStepForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let audio = new Audio('submit-sound.mp3');
    audio.play().then(() => {
        alert('Form submitted successfully!');
        
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }).catch(function(error) {
        console.error("Ошибка воспроизведения звука:", error);
    });

    currentStep = 1;
    document.querySelectorAll('.step').forEach(step => {
        step.style.display = 'none';
    });
    document.getElementById('step1').style.display = 'block';
});


function updateDateTime() {
    let now = new Date();
    document.getElementById('dateTime').innerText = now.toLocaleString();
}

setInterval(updateDateTime, 1000);

function toggleTheme() {
    const isDark = document.getElementById('themeToggle').checked;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', isDark);
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.toggle('dark-mode', localStorage.getItem('theme') === 'dark');
    document.getElementById('themeToggle').checked = localStorage.getItem('theme') === 'dark';
    document.getElementById('authLink').innerText = localStorage.getItem('isLoggedIn') === 'true' ? 'Logout' : 'Login';
});
document.addEventListener('DOMContentLoaded', () => {
            const currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'dark') {
                document.body.classList.add('dark-mode');
            }

            // Переключение темы
            document.getElementById('themeToggleBtn').addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                
                // Сохранение текущей темы в localStorage
                const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
                localStorage.setItem('theme', theme);
            });
        });
// Show login form on button click
document.getElementById('loginBtn').onclick = function() {
    document.getElementById('loginForm').style.display = 'block';
};

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        document.getElementById('authStatus').innerHTML = `Welcome, ${username}!`;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('loginBtn').textContent = 'Logout';
    } else {
        alert('Please enter both username and password');
    }
}

// Logout function
document.getElementById('loginBtn').onclick = function() {
    if (localStorage.getItem('username')) {
        localStorage.removeItem('username');
        document.getElementById('authStatus').innerHTML = '';
        document.getElementById('loginBtn').textContent = 'Login';
    } else {
        document.getElementById('loginForm').style.display = 'block';
    }
};

window.onload = function() {
    const loginBtn = document.getElementById('loginBtn');
    const loginForm = document.getElementById('loginForm');
    const closeLoginFormBtn = document.getElementById('closeLoginForm');
    const authStatus = document.getElementById('authStatus');
    
    // Function to clear the login form inputs
    function clearLoginForm() {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }

    // Show login form
    loginBtn.onclick = function() {
        if (localStorage.getItem('username')) {
            // If user is logged in, log them out
            localStorage.removeItem('username');
            authStatus.innerHTML = '';
            loginBtn.textContent = 'Login';
        } else {
            // Show login form if not logged in
            loginForm.style.display = 'block';
            clearLoginForm();  // Clear the form when it's opened
        }
    };

    // Close the login form when the X button is clicked
    closeLoginFormBtn.onclick = function() {
        loginForm.style.display = 'none';
    };

    // Login function
    function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            localStorage.setItem('username', username);
            authStatus.innerHTML = `Welcome, ${username}!`;
            loginForm.style.display = 'none';
            loginBtn.textContent = 'Logout';
        } else {
            alert('Please enter both username and password');
        }
    }

    // Bind the login function to the submit button inside the form
    document.querySelector('.login-form button[type="submit"]').onclick = function(e) {
        e.preventDefault(); // Prevent form submission
        login();
    };

    // Check session on page load
    const username = localStorage.getItem('username');
    if (username) {
        authStatus.innerHTML = `Welcome, ${username}!`;
        loginBtn.textContent = 'Logout';
    }
};
