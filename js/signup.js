/*
 Name: Eyan Jaffery
 Course: IST 256 - 001
 Assignment: Storefront Web Application
 Date: 10/22/2020
*/
$(document).ready(function () {
    //Scroll to form automatically
    $('.container').get(0).scrollIntoView();


    // Attach form submit event listener using jQuery
    let signupForm = $('#signupForm');

    // Real-time validation for name and email fields
    signupForm.find('#name').on('input', function () {
        validateName($(this));
    });

    signupForm.find('#email').on('input', function () {
        validateEmail($(this));
    });

    signupForm.find('#username').on('input', function () {
        validateUsername($(this));
    });

    signupForm.find('#confirmUsername').on('input', function () {
        validateConfirmUsername();
    });

    signupForm.find('#password').on('input', function () {
        validatePassword($(this));
    });

    signupForm.find('#confirmPassword').on('input', function () {
        validateConfirmPassword();
    });

    // Attach submit event handler for the form
    signupForm.on('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Perform all validation checks using reusable functions
        let isNameValid = validateName($('#name'));
        let isEmailValid = validateEmail($('#email'));
        let isPasswordValid = validatePassword($('#password'));
        let isConfirmPasswordValid = validateConfirmPassword();

        // Check if all fields are valid
        if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            let formData = {
                name: $('#name').val().trim(),
                email: $('#email').val().trim(),
                username: $('#username').val(),
                password: $('#password').val(),
            };

            let jsonData = JSON.stringify(formData);
            alert('Signup successful!\n' + jsonData);
            signupForm.trigger('reset'); // Reset the form after successful submission

            // Reset classes
            $('input').removeClass('valid-input invalid-input');
        } else {
            console.log("Form invalid. PLEASE FIX ERRORS BEFORE SUBMITTING.");
        }
    });
});

// Function to validate the password's strength
function validatePassword(passwordField) {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    let password = passwordField.val();

    // Check if the password meets the criteria
    if (!passwordPattern.test(password)) {
        $('#password').addClass('invalid-input').removeClass('valid-input');
        $('#password-error').text('Password must contain at least 8 characters, including at least one number, one lowercase letter, one uppercase letter, and one special character.');
        return false;
    } else {
        $('#password').addClass('valid-input').removeClass('invalid-input');
        $('#password-error').text(''); // Reset the confirmed password field
        return true;
    }
}

// Function to validate the username
function validateUsername(usernameField) {
    const pattern = /^[a-zA-Z0-9]{6,}$/; // Alphanumeric characters only with a minimum length of 6
    let username = usernameField.val();
    if (!pattern.test(username)) {
        $('#username').addClass('invalid-input').removeClass('valid-input');
        $('#username-error').text('Username must contain at least 6 characters and no special characters.');
        return false;
    } else {
        $('#username').addClass('valid-input').removeClass('invalid-input');
        $('#username-error').text('');
        return true;
    }
}

// Function to check if username and confirm username match
function validateConfirmUsername() {
    let username = $('#username').val();
    let confirmUsername = $('#confirmUsername').val();

    // Check if username and confirm username match
    if (confirmUsername !== username) {
        $('#confirmUsername').addClass('invalid-input').removeClass('valid-input');
        $('#confirmUsername-error').text('Usernames do not match.');
        return false;
    } else {
        $('#confirmUsername').addClass('valid-input').removeClass('invalid-input');
        $('#confirmUsername-error').text('');
        return true;
    }
}

// Function to check if password and confirm password match
function validateConfirmPassword() {
    let password = $('#password').val();
    let confirmPassword = $('#confirmPassword').val();

    // Check if password and confirm password match
    if (confirmPassword !== password) {
        $('#confirmPassword').addClass('invalid-input').remooveClass('valid-input');
        $('#confirmPassword-error').text('Passwords do not match.');
        return false;
    } else {
        $('#confirmPassword').addClass('valid-input').removeClass('invalid-input');
        $('#confirmPassword-error').text('');
        return true;
    }
}

// Function to validate email format
function validateEmail(emailField) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let email = emailField.val();

    // Check if the email is in a valid format
    if (!emailPattern.test(email)) {
        $('#email').addClass('invalid-input').removeClass('valid-input');
        $('#email-error').text('Please enter a valid email address.');
        return false;
    } else {
        $('#email').addClass('valid-input').removeClass('invalid-input');
        $('#email-error').text('');
        return true;
    }
}

// Function to validate name field
function validateName(nameField) {
    let name = nameField.val().trim();

    // Check if the name is not empty
    if (name === "") {
        $('#name').addClass('invalid-input').removeClass('valid-input');
        $('#name-error').text('Please enter your full name.');
        return false;
    } else {
        $('#name').addClass('valid-input').removeClass('invalid-input');
        $('#name-error').text('');
        return true;
    }
}