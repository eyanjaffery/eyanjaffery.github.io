/*
 Name: Eyan Jaffery
 Course: IST 256 - 001
 Assignment: Storefront Web Application
 Date: 10/22/2020
*/
$(document).ready(function () {

    $('#loginForm').on('submit', function (event) {
        event.preventDefault();

        let username = $('#username').val().trim();
        let password = $('#password').val();

        if (validateUsername(username) && validatePassword(password)) {
            let formData = {
                username: username,
                password: password
            };

            let jsonData = JSON.stringify(formData);
            alert('Login successful!\n' + jsonData);
            $('#loginForm').trigger('reset');
        } else {
            console.log("Login Failed.");
        }
    });
});