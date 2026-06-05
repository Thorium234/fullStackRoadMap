// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const changeColorBtn = document.getElementById('changeColorBtn');
    const counterText = document.getElementById('counter');
    let clickCount = 0;
    
    // Add click event listener to the button
    changeColorBtn.addEventListener('click', function() {
        // Generate a random background color
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
        
        // Update the click counter
        clickCount++;
        counterText.textContent = `You've clicked the button ${clickCount} times.`;
    });
    
    // Function to generate a random hex color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

// Form validation
const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', function(e) {
    let isValid = true;
    
    // Reset errors
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    
    // Validate username
    if (usernameInput.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate password
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        isValid = false;
    }
    
    // Prevent form submission if validation fails
    if (!isValid) {
        e.preventDefault();
    } else {
        e.preventDefault(); // In a real app, you might remove this and let the form submit
        alert('Form submitted successfully!');
        form.reset();
    }
});
