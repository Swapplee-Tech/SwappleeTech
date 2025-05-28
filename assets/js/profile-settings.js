
// Tab switching logic
document.querySelectorAll('.tab').forEach((tab, idx) => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    // Switch content if there are multiple tabs/sections
    // For this mockup, actual tab content switching isn't implemented.
  });
});

// Sidebar navigation highlight
document.querySelectorAll('.sidebar nav li').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.sidebar nav li').forEach(li => li.classList.remove('active'));
    this.classList.add('active');
    // Switch form section if needed
  });
});

// Profile Picture Preview and Top Avatar Sync
const profileInput = document.getElementById('profilePicInput');
const profileImage = document.getElementById('profileImage');
const topProfileAvatar = document.getElementById('topProfileAvatar');

profileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
        profileImage.src = ev.target.result;
        topProfileAvatar.src = ev.target.result; // Sync top avatar too
            localStorage.setItem('profilePic', ev.target.result);  // Save to localStorage
    };
    reader.readAsDataURL(file);
});

// Tab switch logic (if more tabs are needed)
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        // Can add logic to show/hide different tab content
    });
});

// Example submit handler
document.querySelector('.profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Profile updated!');
    // Here you would normally collect and send the form data to a backend
});
// Form submit (demo)
document.querySelector('.profile-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Profile updated! (This is a demo action.)');
});

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
            password: passwordInput.value
        });
        // Add registration logic here
    });
});
function togglePassword(inputId, iconElement) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    iconElement.textContent = "🙈";
  } else {
    input.type = "password";
    iconElement.textContent = "👁️";
  }
}
// Dropdown toggle logic
const avatarDropdown = document.querySelector('.avatar-dropdown');
const avatarImg = document.getElementById('topProfileAvatar');

avatarImg.addEventListener('click', function(e) {
    avatarDropdown.classList.toggle('open');
    e.stopPropagation(); // Prevent click from propagating to document
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (avatarDropdown.classList.contains('open')) {
        avatarDropdown.classList.remove('open');
    }
});

// Optionally: Prevent closing dropdown when clicking inside the menu
document.getElementById('avatarDropdownMenu').addEventListener('click', function(e) {
    e.stopPropagation();
});
// helper to load HTML fragment into a container
// function includeHTML(containerId, url) {
//     fetch(url)
//         .then(res => {
//         if (!res.ok) throw new Error(`Failed to load ${url}`);
//         return res.text();
//         })
//         .then(html => {
//         document.getElementById(containerId).innerHTML = html;
//     })
//     .catch(console.error);
// }

// // on DOM ready
// document.addEventListener('DOMContentLoaded', () => {
//     includeHTML('site-header', '/partials/navbar.html');
//     includeHTML('site-footer', '/partials/footer.html');
// });

document.addEventListener('click', e => {
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (e.target.closest('.mobile-menu-toggle')) {
        const isOpen = sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        e.target.closest('.mobile-menu-toggle')
        .setAttribute('aria-expanded', isOpen);
        sidebar.setAttribute('aria-hidden', !isOpen);
        return;
    }

    if (
        e.target.closest('.close-sidebar') ||
        e.target.closest('.sidebar-overlay')
    ) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.querySelector('.mobile-menu-toggle')
        .setAttribute('aria-expanded', false);
        sidebar.setAttribute('aria-hidden', true);
        return;
    }
});

document.addEventListener('keydown', e => {
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.querySelector('.mobile-menu-toggle')
        .setAttribute('aria-expanded', false);
        sidebar.setAttribute('aria-hidden', true);
    }
});
document.getElementById('personalIdentityForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted!');
});