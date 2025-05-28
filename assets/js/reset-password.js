document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('passwordForm');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const errorMessage = document.getElementById('errorMessage');
    const toggleButtons = document.querySelectorAll('.toggle-visibility');

    const togglePasswordVisibility = (input, button) => {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        button.querySelector('i').classList.toggle('fa-eye-slash', !isPassword);
        button.querySelector('i').classList.toggle('fa-eye', isPassword);
    };

    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const input = index === 0 ? newPasswordInput : confirmPasswordInput;
            togglePasswordVisibility(input, button);
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (newPasswordInput.value !== confirmPasswordInput.value) {
            errorMessage.textContent = 'Passwords do not match';
            errorMessage.style.display = 'block';
            return;
        }

        errorMessage.style.display = 'none';
        console.log("Setting new password:", newPasswordInput.value);
        // Add password reset logic here
    });
});