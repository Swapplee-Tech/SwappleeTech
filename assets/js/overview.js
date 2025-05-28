const products = [
    {
        id: 1,
        user: { name: 'Emma Stone', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', rating: 4.5 },
        haveTag: { label: 'Goods', bg: '#e0f7fa', color: '#00796b' },
        haveText: 'I Have',
        title: 'MacBook Pro 2023 (Like New)',
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
        desc: 'Used MacBook Pro M2, 16GB RAM, 512GB SSD. Includes original box & accessories',
        image: './assets/images/product_1.png',
        time: 'Estimated value: $1200',
        wantText: 'Gaming PC or High-end components'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const myActiveGrid = document.getElementById('myActiveListingGrid');
    const marketplaceGrid = document.getElementById('marketplaceGrid');
    
    // Render first 3 products in My Active Listing
    renderProductSection(products.slice(0, 3), myActiveGrid);
    
    // Render next 3 products (4,5,6) in Marketplace
    renderProductSection(products.slice(3, 6), marketplaceGrid);
    
    // Update My Listing count to 3
    document.getElementById('myListingCount').textContent = '3';
    
    function renderProductSection(productsToRender, container) {
        container.innerHTML = '';
        productsToRender.forEach(p => {
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
                    <button class="footer-button"><i class="fa-solid fa-arrows-turn-to-dots"></i> Propose Trade</button>
                </div>
            `;
            container.appendChild(card);
        });

        // Attach heart icon functionality
        container.querySelectorAll('.favor').forEach(icon => {
            icon.addEventListener('click', function() {
                this.classList.toggle('fa-regular');
                this.classList.toggle('fa-solid');
            });
        });
    }
});

function copyText(text) {
    navigator.clipboard.writeText(text);
    alert('Reference ID copied: ' + text);
}





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







// insert current year
document.getElementById("year").textContent = new Date().getFullYear();