// Show the correct form (login or registration)
function showForm(formId) {
    document.querySelectorAll('.form-box').forEach(form => {
        form.classList.remove('active');
    });
    document.getElementById(formId).classList.add('active');
}

// Show alert
function showAlert(message) {
    alert(message);
}

// Handle login form submission
document.querySelector('#login-form form').addEventListener('submit', function (event) {
    if (!event.target.email.value || !event.target.password.value) {
        event.preventDefault();
        showAlert('Please fill in both email and password.');
    } else {
        // Redirect to index.html after login (if PHP validation succeeds)
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    }
});

// Handle registration form submission
document.querySelector('#register-form form').addEventListener('submit', function (event) {
    if (!event.target.name.value || !event.target.email.value || !event.target.password.value || !event.target.role.value) {
        event.preventDefault();
        showAlert('Please fill in all fields.');
    } else {
        // Redirect to login form after successful registration
        setTimeout(() => {
            showForm('login-form');
        }, 500);
    }
});
