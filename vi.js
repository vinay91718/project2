document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
  
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        clearErrors();


        let valid = true;

        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        if (!validateUsername(username.value)) {
            showError(username, 'Username must be at least 3 characters long.');
            valid = false;
        }

        if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address.');
            valid = false;
        }

        if (!validatePassword(password.value)) {
            showError(password, 'Password must be at least 6 characters long.');
            valid = false;
        }

        if (valid) {
           alert('Form submitted successfully!');
        
        }
    });

    function validateUsername(username) {
        return username.length >= 3;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const error = document.createElement('div');
        error.className = 'error';
        error.innerText = message;
        formGroup.appendChild(error);
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());
    }
});