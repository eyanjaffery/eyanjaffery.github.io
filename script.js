// Function to validate the password's strength
function validatePassword() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    // Check if the password meets the criteria
    if (!passwordPattern.test(password.value)) {
        password.style.borderColor = 'red';
        password.setCustomValidity('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.');
        //popup message
        return false;
    } else {
        password.style.borderColor = 'green';
        password.setCustomValidity('');
        return true;
    }
}

// Function to check if password and confirm password match
function validateConfirmPassword() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Check if password and confirm password match
    if (confirmPassword.value !== password.value) {
        confirmPassword.style.borderColor = 'red';
        confirmPassword.setCustomValidity('Passwords do not match.');
        return false;
    } else {
        confirmPassword.style.borderColor = 'green';
        confirmPassword.setCustomValidity('');
        return true;
    }
}

// Function to validate email format
function validateEmail(obj) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(obj.value)) {
        obj.style.borderColor = 'red';
        obj.style.color = 'red';
        obj.setCustomValidity('Please enter a valid email address.');
        return false;
    } else {
        obj.style.borderColor = 'green';
        obj.style.color = 'black';
        return true;
    }
}

// Function to validate name field
function validateName(obj) {
    if (!obj.value.trim()) {
        obj.style.borderColor = 'red';
        return false;
    } else {
        obj.style.borderColor = 'green';
        return true;
    }
}

// Submit event listener for the signup form
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let form = event.target;

    // Perform all validation checks using reusable functions
    const isNameValid = validateName(form.name);
    const isEmailValid = validateEmail(form.email);
    const isConfirmPasswordValid = validateConfirmPassword();

    // Check if all fields are valid
    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && form.checkValidity()) {
        let formData = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value
        };

        const jsonData = JSON.stringify(formData);
        alert('Signup successful!\n' + jsonData);
        form.reset(); // Reset the form after successful submission

        // Reset borders
        form.name.style.borderColor = '';
        form.email.style.borderColor = '';
        form.password.style.borderColor = '';
        form.confirmPassword.style.borderColor = '';
    } else {
        form.reportValidity(); // Show built-in validation errors if present
    }
});