document.addEventListener('DOMContentLoaded', () => {
    const otpForm = document.getElementById('otpForm');
    const otpInput = document.getElementById('otp');
    const toggleOtp = document.querySelector('.toggle-otp');

    // OTP visibility toggle
    toggleOtp.addEventListener('click', () => {
        const isPassword = otpInput.type === 'password';
        otpInput.type = isPassword ? 'text' : 'password';
        toggleOtp.querySelector('i').classList.toggle('fa-eye-slash', !isPassword);
        toggleOtp.querySelector('i').classList.toggle('fa-eye', isPassword);
    });

    // Form submission
    otpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const otp = otpInput.value;
        console.log("Verifying OTP:", otp);
        // Add OTP verification logic here
    });

    // Resend functionality
    document.querySelector('.resend-link').addEventListener('click', () => {
        console.log("Resending OTP...");
        // Add resend logic here
    });
});