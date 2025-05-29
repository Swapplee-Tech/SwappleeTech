import { products } from "./services.js";

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productsGrid');
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    
    // Function to filter products by category
    function filterProducts(category) {
        return products.filter(product => 
            product.haveTag.label.toLowerCase() === category
        );
    }

    // Main render function
    function renderProducts(productsToRender) {
        grid.innerHTML = '';
        
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
                    <button class="footer-button"><i class="fa-solid fa-arrows-turn-to-dots "></i> Propose Trade</button>
                </div>
            `;
            card.querySelector('.footer-button').addEventListener('click', () => {
                window.location.href = `product-details.html?id=${p.id}`;
            });
            grid.appendChild(card);
        });

        attachHeartIcons();
    }

    // Filter button functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('filter-active'));
            
            // Add active class to clicked button
            button.classList.add('filter-active');
            
            // Filter and render products
            const category = button.dataset.filter;
            const filteredProducts = filterProducts(category);
            renderProducts(filteredProducts);
        });
    });

    // Heart icon functionality
    function attachHeartIcons() {
        document.querySelectorAll('.favor').forEach(icon => {
            icon.addEventListener('click', () => {
                icon.classList.toggle('fa-regular');
                icon.classList.toggle('fa-solid');
            });
        });
    }

    // Initial render - show Goods by default
    renderProducts(filterProducts('goods'));
});