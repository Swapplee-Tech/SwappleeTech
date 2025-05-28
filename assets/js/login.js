document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.querySelector('.toggle-password');

    // Password visibility toggle
    togglePassword.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        togglePassword.querySelector('i').classList.toggle('fa-eye-slash', !isPassword);
        togglePassword.querySelector('i').classList.toggle('fa-eye', isPassword);
    });

    // Form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        console.log("Logging in with:", email, password);
        // Add authentication logic here
    });
});