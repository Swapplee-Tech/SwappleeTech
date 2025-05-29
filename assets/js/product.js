const products = [
    {
        id: 1,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 2nd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 2,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/66.jpg', rating: 4.5 },
        haveTag: { label: 'Services', bg: '#FFE3D3', color: '#F5813F' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 22nd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 3,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/67.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 4,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', rating: 4.5 },
        haveTag: { label: 'Services', bg: '#FFE3D3', color: '#F5813F' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 5,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/69.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 6,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/70.jpg', rating: 4.5 },
        haveTag: { label: 'Services', bg: '#FFE3D3', color: '#F5813F' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 7,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 8,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', rating: 4.5 },
        haveTag: { label: 'Services', bg: '#FFE3D3', color: '#F5813F' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 10th, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 9,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/4.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 10,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/men/65.jpg', rating: 4.5 },
        haveTag: { label: 'Services', bg: '#FFE3D3', color: '#F5813F' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 11,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/men/67.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 12,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/men/10.jpg', rating: 4.5 },
        haveTag: { label: 'Services', bg: '#FFE3D3', color: '#F5813F' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 13,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/men/22.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 31th, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 14,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/56.jpg', rating: 4.5 },
        haveTag:{ label: 'Services', bg: '#FFE3D3', color: '#F5813F' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 23rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 15,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/15.jpg', rating: 4.5 },
        haveTag: { label: 'Services', bg: '#FFE3D3', color: '#F5813F' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 16,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/45.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 17,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/77.jpg', rating: 4.5 },
        haveTag:{ label: 'Services', bg: '#FFE3D3', color: '#F5813F' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 18,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/91.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 2nd, 2024',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 19,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/81.jpg', rating: 4.5 },
        haveTag: { label: 'Services', bg: '#FFE3D3', color: '#F5813F' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 20,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/39.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 21,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/men/89.jpg', rating: 4.5 },
        haveTag: { label: 'Services', bg: '#FFE3D3', color: '#F5813F' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 22,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/men/13.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 23,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/13.jpg', rating: 4.5 },
        haveTag: { label: 'Services', bg: '#FFE3D3', color: '#F5813F' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
    {
        id: 24,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/60.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
        listedDate: 'May 3rd, 2025',
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productsGrid');
    const paginationContainer = document.querySelector('.pagination-container');
    const resultsText = document.querySelector('.product-heading h2');
    
    // Configuration
    const itemsPerPage = 12;
    let currentPage = 1;
    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    // Main render function
    function renderProducts() {
        grid.innerHTML = '';
        const start = (currentPage - 1) * itemsPerPage; 
        const end = start + itemsPerPage;
        const paginatedItems = products.slice(start, end);

        paginatedItems.forEach((p, indexInPaginated) => {
            const originalIndex = start + indexInPaginated;
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-header">
                    <img class="avatar" src="${p.user.avatar}" alt="${p.user.name}" />
                    <div class="user-info">
                        <span class="name">${p.user.name}</span>
                        <span class="rating"><i class="fa-solid fa-star"></i> ${p.user.rating}</span>
                    </div>
                </div>
                <div class="card-body">
                    <div class="have-label"><i class="fa-solid fa-gift"></i> ${p.haveText}</div>
                    <h3 class="title">${p.title}</h3>
                    <p class="desc">${p.desc}</p>
                    <div class="image-wrapper">
                        <img src="${p.image}" alt="${p.title}" />
                        <span class="tag" style="background:${p.haveTag.bg};color:${p.haveTag.color}">${p.haveTag.label}</span>
                        <i class="fa-regular fa-heart favor"></i>
                    </div>
                    <div class="time"><i class="fa-regular fa-clock"></i> ${p.time}</div>
                </div>
                <div class="card-footer">
                    <div class="footer-have"><i class="fa-solid fa-gift"></i> I want</div>
                    <div class="footer-want-text">${p.wantText}</div>
                    <button class="footer-button"><i class="fa-solid fa-arrows-turn-to-dots "></i> Propose Trade</button>
                </div>
            `;
            card.querySelector('.footer-button').addEventListener('click', () => {
            window.location.href = `product-details.html?i=${originalIndex}`;
        });
            grid.appendChild(card);
        });

        updateResultsText();
        attachHeartIcons();
    }

    // Update results text
    function updateResultsText() {
        const shownCount = Math.min(currentPage * itemsPerPage, totalProducts);
        resultsText.textContent = `Showing ${shownCount} results from total ${totalProducts}`;
    }

    // Create pagination buttons
    function renderPagination() {
        paginationContainer.innerHTML = '';
        const pagination = document.createElement('div');
        pagination.className = 'pagination';

        // Previous Button
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '&laquo; Prev';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderProducts();
                renderPagination();
            }
        });

        // Page Numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.className = currentPage === i ? 'active' : '';
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderProducts();
                renderPagination();
            });
            pagination.appendChild(pageButton);
        }

        // Next Button
        const nextButton = document.createElement('button');
        nextButton.innerHTML = 'Next &raquo;';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderProducts();
                renderPagination();
            }
        });

        pagination.prepend(prevButton);
        pagination.append(nextButton);
        paginationContainer.appendChild(pagination);
    }

    // Heart icon functionality
    function attachHeartIcons() {
        document.querySelectorAll('.favor').forEach(icon => {
            icon.addEventListener('click', () => {
                icon.classList.toggle('fa-regular');
                icon.classList.toggle('fa-solid');
            });
        });
    }

    // Initial render
    renderProducts();
    renderPagination();
});


document.querySelector('.filters-heading button').addEventListener('click', () => {
    // Clear input fields
    document.querySelectorAll('input[list="item-list"]').forEach(input => input.value = '');
    document.querySelectorAll('.filter-search-input input').forEach(input => input.value = '');
    document.getElementById('location-input').value = '';

    // Reset toggle switch
    document.getElementById('switch1').checked = false;

    // Clear category filters
    document.querySelectorAll('#categories-form input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Clear rating filters
    document.querySelectorAll('#ratings-form input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Clear brand filters
    document.querySelectorAll('#brands-form input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset price filter
    const priceSlider = document.getElementById('price-slider');
    priceSlider.value = 500;
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';

    // Reset quantity filter
    const quantitySlider = document.getElementById('quantity-slider');
    quantitySlider.value = 50;
    document.getElementById('min-qty').value = '';
    document.getElementById('max-qty').value = '';
});



// Mobile Navigation
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const closeBtn = document.querySelector('.close-sidebar');

    function toggleSidebar() {
        const isOpen = sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
        sidebar.setAttribute('aria-hidden', !isOpen);
    }
    
    menuToggle.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });

    // Trap focus in sidebar when open
    sidebar.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && sidebar.classList.contains('active')) {
            const focusableElements = sidebar.querySelectorAll('button, input, a[href]');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
});



// Cupertino Logic
const checkbox = document.getElementById('switch1');
    const label = checkbox.nextElementSibling;

function refreshAria() {
    label.setAttribute('aria-checked', checkbox.checked);
    console.log('Switch is now', checkbox.checked ? 'ON' : 'OFF');
}

// Initialize
    refreshAria();

// When user toggles
checkbox.addEventListener('change', refreshAria);


// Categories
const categoriesData = [
    { type: "Home Appliances", ratings: 118 },
    { type: "Clothing", ratings: 245 },
    { type: "Electronics", ratings: 362 },
    { type: "Furniture", ratings: 89 },
    { type: "Books", ratings: 152 },
    { type: "Beauty", ratings: 75 },
    { type: "Groceries", ratings: 98 },
    { type: "Sports", ratings: 64 }
];

const form = document.getElementById("categories-form");
const toggleBtn = document.getElementById("toggle-categories");

let showAll = false;

// Initial rendering of only a few
categoriesData.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "category-item";
    if (index >= 4) wrapper.classList.add("hidden-category");

    const leftSide = document.createElement("div");
    leftSide.className = "category-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `category-${index}`;
    checkbox.name = "category";
    checkbox.value = item.type;

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = item.type;

    leftSide.appendChild(checkbox);
    leftSide.appendChild(label);

    const rating = document.createElement("span");
    rating.className = "category-rating";
    rating.textContent = `(${item.ratings})`;

    wrapper.appendChild(leftSide);
    wrapper.appendChild(rating);
    form.appendChild(wrapper);
});

toggleBtn.addEventListener("click", () => {
    const hiddenItems = document.querySelectorAll(".hidden-category");
    showAll = !showAll;

    hiddenItems.forEach(item => {
        if (showAll) {
        item.classList.add("show");
} else {
        item.classList.remove("show");
    }
});

    toggleBtn.textContent = showAll ? "Show less" : "Show more";
});

const collapseToggle = document.getElementById("toggle-collapse");
const caretIcon = document.getElementById("caret-icon");
const categoriesBox = document.querySelector(".categories");

collapseToggle.addEventListener("click", () => {
  const isCollapsed = categoriesBox.classList.toggle("collapsed");

  if (isCollapsed) {
    caretIcon.classList.remove("fa-caret-up");
    caretIcon.classList.add("fa-caret-down");
  } else {
    caretIcon.classList.remove("fa-caret-down");
    caretIcon.classList.add("fa-caret-up");
  }
});


// Ratings
const ratingsCollapseToggle = document.getElementById("ratings-collapse-toggle");
const ratingsCaretIcon = document.getElementById("ratings-caret-icon");
const ratingsBox = document.querySelector(".main-ratings");
const ratingsForm = document.getElementById("ratings-form");

// Clear previous content (in case of re-render)
ratingsForm.innerHTML = "";

// Updated ratings data
const ratingsData = [
  { stars: 5, value: 4.0, label: "and up", ratings: 118 },
  { stars: 5, value: 3.0, label: "and up", ratings: 96 },
  { stars: 5, value: 2.0, label: "and up", ratings: 72 },
  { stars: 5, value: 2.0, label: "and up", ratings: 72 },
];

// Build each rating option
ratingsData.forEach((item, index) => {
  const wrapper = document.createElement("div");
  wrapper.className = "rating-option";
  wrapper.style.display = "flex";
  wrapper.style.justifyContent = "space-between";
  wrapper.style.alignItems = "center";
  wrapper.style.marginBottom = "8px";

  // Left side: radio + stars + tag
  const left = document.createElement("label");
  left.style.display = "flex";
  left.style.alignItems = "center";
  left.style.gap = "6px";

  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "ratings";
  radio.value = item.value;

  const stars = document.createElement("span");
  stars.innerHTML = '<i class="fa-solid fa-star"></i>'.repeat(item.stars);

  const tag = document.createElement("span");
  tag.innerHTML = `<strong>${item.value}</strong> ${item.label}`;

  left.appendChild(radio);
  left.appendChild(stars);
  left.appendChild(tag);

  // Right side: (ratings)
  const right = document.createElement("span");
  right.textContent = `(${item.ratings})`;

  wrapper.appendChild(left);
  wrapper.appendChild(right);
  ratingsForm.appendChild(wrapper);
});

// Collapse/Expand toggle with icon switch
ratingsCollapseToggle.addEventListener("click", () => {
  const isCollapsed = ratingsBox.classList.toggle("collapsed");

  if (isCollapsed) {
    ratingsCaretIcon.classList.remove("fa-caret-up");
    ratingsCaretIcon.classList.add("fa-caret-down");
  } else {
    ratingsCaretIcon.classList.remove("fa-caret-down");
    ratingsCaretIcon.classList.add("fa-caret-up");
  }
});

// Brands
const brandsData = [
  { name: "Apple", count: 80 },
  { name: "Samsung", count: 72 },
  { name: "Sony", count: 54 },
  { name: "LG", count: 39 },
  { name: "Dell", count: 35 },
  { name: "HP", count: 33 },
  { name: "Asus", count: 27 },
  { name: "Lenovo", count: 25 },
  { name: "Microsoft", count: 19 },
];

const brandsForm = document.getElementById("brands-form");
const brandsToggle = document.getElementById("brands-toggle");
const brandsBox = document.querySelector(".brands");
const brandsCollapseToggle = document.getElementById("brands-collapse-toggle");
const brandsCaretIcon = document.getElementById("brands-caret-icon");

let showAllBrands = false;

function renderBrands(limit = 5) {
  brandsForm.innerHTML = "";
  const items = showAllBrands ? brandsData : brandsData.slice(0, limit);

  items.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "brand-option";
    wrapper.style.display = "flex";
    wrapper.style.justifyContent = "space-between";
    wrapper.style.alignItems = "center";
    wrapper.style.marginBottom = "8px";

    const left = document.createElement("label");
    left.style.display = "flex";
    left.style.alignItems = "center";
    left.style.gap = "6px";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "brands";
    checkbox.value = item.name;

    const labelText = document.createElement("span");
    labelText.textContent = item.name;

    left.appendChild(checkbox);
    left.appendChild(labelText);

    const right = document.createElement("span");
    right.textContent = `(${item.count})`;

    wrapper.appendChild(left);
    wrapper.appendChild(right);
    brandsForm.appendChild(wrapper);
  });

  brandsToggle.textContent = showAllBrands ? "Show less" : "Show more";
}

// Initial render
renderBrands();

// Show more / less toggle
brandsToggle.addEventListener("click", () => {
  showAllBrands = !showAllBrands;
  renderBrands();
});

// Collapse/Expand toggle
brandsCollapseToggle.addEventListener("click", () => {
  const isCollapsed = brandsBox.classList.toggle("collapsed");
  if (isCollapsed) {
    brandsCaretIcon.classList.remove("fa-caret-up");
    brandsCaretIcon.classList.add("fa-caret-down");
  } else {
    brandsCaretIcon.classList.remove("fa-caret-down");
    brandsCaretIcon.classList.add("fa-caret-up");
  }
});



// PRICE COLLAPSE
const priceSection = document.querySelector('.price');
const priceToggle = document.getElementById('price-collapse-toggle');
const priceIcon = document.getElementById('price-caret-icon');

priceToggle.addEventListener('click', () => {
    const isCollapsed = priceSection.classList.toggle('collapsed');
    priceIcon.classList.toggle('fa-caret-up', !isCollapsed);
    priceIcon.classList.toggle('fa-caret-down', isCollapsed);
});

// PRICE SYNC
const priceSlider = document.getElementById('price-slider');
const minPriceBox = document.getElementById('min-price');
const maxPriceBox = document.getElementById('max-price');

priceSlider.value = priceSlider.max / 2;
minPriceBox.value = priceSlider.min;
maxPriceBox.value = priceSlider.value;

priceSlider.addEventListener('input', (e) => {
    maxPriceBox.value = e.target.value;
});

minPriceBox.addEventListener('input', () => {
    let min = parseInt(minPriceBox.value);
    let max = parseInt(maxPriceBox.value);
    if (min >= max) min = max - 1;
    priceSlider.min = min;
});

maxPriceBox.addEventListener('input', () => {
    let max = parseInt(maxPriceBox.value);
    let min = parseInt(minPriceBox.value);
    if (max <= min) max = min + 1;
    priceSlider.value = max;
    priceSlider.max = max;
});



// QUANTITY COLLAPSE
const quantitySection = document.querySelector('.quantity');
const quantityToggle = document.getElementById('quantity-collapse-toggle');
const quantityIcon = document.getElementById('quantity-caret-icon');

quantityToggle.addEventListener('click', () => {
    const isCollapsed = quantitySection.classList.toggle('collapsed');
    quantityIcon.classList.toggle('fa-caret-up', !isCollapsed);
    quantityIcon.classList.toggle('fa-caret-down', isCollapsed);
});

// QUANTITY SYNC
const qtySlider = document.getElementById('quantity-slider');
const minQtyBox = document.getElementById('min-qty');
const maxQtyBox = document.getElementById('max-qty');

qtySlider.value = qtySlider.max / 2;
minQtyBox.value = qtySlider.min;
maxQtyBox.value = qtySlider.value;

qtySlider.addEventListener('input', (e) => {
    maxQtyBox.value = e.target.value;
});

minQtyBox.addEventListener('input', () => {
    let min = parseInt(minQtyBox.value);
    let max = parseInt(maxQtyBox.value);
    if (min >= max) min = max - 1;
    qtySlider.min = min;
});

maxQtyBox.addEventListener('input', () => {
    let max = parseInt(maxQtyBox.value);
    let min = parseInt(minQtyBox.value);
    if (max <= min) max = min + 1;
    qtySlider.value = max;
    qtySlider.max = max;
});





// insert current year
document.getElementById("year").textContent = new Date().getFullYear();