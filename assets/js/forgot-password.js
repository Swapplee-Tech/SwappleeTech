document.addEventListener('DOMContentLoaded', () => {
    const resetForm = document.getElementById('resetForm');
    
    resetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        console.log("Sending password reset link to:", email);
        // Add password reset logic here
    });
});