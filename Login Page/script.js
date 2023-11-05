document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");
    const messageDiv = document.getElementById("message");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const regUsername = document.getElementById("reg-username").value;
        const regPassword = document.getElementById("reg-password").value;

        // Perform registration logic here (you can use AJAX to send data to the server).

        // Example message:
        messageDiv.textContent = "Registration successful!";
        messageDiv.classList.remove("hidden");
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const loginUsername = document.getElementById("login-username").value;
        const loginPassword = document.getElementById("login-password").value;

        // Perform login logic here (you can use AJAX to send data to the server).

        // Example message:
        messageDiv.textContent = "Login successful!";
        messageDiv.classList.remove("hidden");
    });
});