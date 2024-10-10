
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let form = event.target;
    let formData = {
        email: form.email.value,
        password: form.password.value
    };
    if (form.checkValidity()) {
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);
        form.reset();
    } else {
        form.reportValidity();
    }
});

function validatePassword() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    // Check if the password meets the criteria
    if (!passwordPattern.test(password.value)) {
        password.style.borderColor = 'red';
    } else {
        password.style.borderColor = 'green';
    }

    // Check if password and confirm password match
    if (confirmPassword.value !== password.value) {
        confirmPassword.style.borderColor = 'red';
    } else {
        confirmPassword.style.borderColor = 'green';
    }
}

function validateEmail(obj) {
    let email = obj.value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        obj.style.borderColor = 'red';
    } else {
        obj.style.borderColor = 'green';
    }

}
