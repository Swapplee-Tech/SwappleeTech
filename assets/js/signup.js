document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const togglePassword = document.querySelector('.toggle-password');
    const toggleConfirmPassword = document.querySelector('.toggle-confirm-password');

    const handlePasswordToggle = (input, toggle) => {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        toggle.querySelector('i').classList.toggle('fa-eye-slash', !isPassword);
        toggle.querySelector('i').classList.toggle('fa-eye', isPassword);
    };

    togglePassword.addEventListener('click', () => handlePasswordToggle(passwordInput, togglePassword));
    toggleConfirmPassword.addEventListener('click', () => handlePasswordToggle(confirmPasswordInput, toggleConfirmPassword));

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Passwords don't match");
            return;
        }
        console.log('Signing up:', {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            location: document.getElementById('location').value,
            password: passwordInput.value
        });
        // Add registration logic here
    });
});