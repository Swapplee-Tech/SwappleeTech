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



document.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-question");
    const icon = btn.querySelector(".icon");

    btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        // Close all others
        document.querySelectorAll(".faq-item.open").forEach(openItem => {
        if (openItem !== item) {
            openItem.classList.remove("open");
            openItem.querySelector(".icon").textContent = "+";
        }
        });

        // Toggle current item
        if (isOpen) {
        item.classList.remove("open");
        icon.textContent = "+";
        } else {
        item.classList.add("open");
        icon.textContent = "−";
        }
    });
});
