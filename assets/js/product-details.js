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


document.addEventListener('DOMContentLoaded', () => {

  const params = new URLSearchParams(location.search);
  const idx = +params.get('i');
  const p = products[idx];
  
   if (!p) {
        window.location.href = 'index.html';
        return; 
    }
  
  // Populate hero
    document.getElementById('detail-title').textContent = p.title;
    document.getElementById('detail-listed-date').textContent = `Listed on ${p.listedDate}`;
    document.getElementById('detail-image').src = p.image;
    document.getElementById('detail-avatar').src = p.user.avatar;
    document.getElementById('detail-name').textContent = p.user.name;
    document.getElementById('detail-rating').textContent = p.user.rating;
    document.getElementById('detail-desc').textContent = p.desc;
  
  // Tab switching
  document.querySelectorAll('.tab-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.tab-buttons .active').classList.remove('active');
      document.querySelector('.tab-content .active').classList.remove('active');
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
  
  // Recommended
  const rec =  products
      .filter((_, i) => i !== idx)
      .sort(() => Math.random() - 0.5) // Randomize
      .slice(0, 4);
  const grid = document.getElementById('recommended-grid');
   grid.innerHTML = '';
  rec.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-header">
        <img class="avatar" src="${p.user.avatar}" alt="${p.user.name}">
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
          <img src="${p.image}" alt="${p.title}">
          <span class="tag" style="background:${p.haveTag.bg};color:${p.haveTag.color}">${p.haveTag.label}</span>
          <i class="fa-regular fa-heart favor"></i>
        </div>
        <div class="time"><i class="fa-regular fa-clock"></i> ${p.time}</div>
      </div>
      <div class="card-footer">
        <div class="footer-have"><i class="fa-solid fa-gift"></i> I want</div>
        <div class="footer-want-text">${p.wantText}</div>
        <button class="footer-button"><i class="fa-solid fa-arrows-turn-to-dots"></i> Propose Trade</button>
      </div>`;
    grid.appendChild(card);
  });
  
  // Heart toggle
  grid.querySelectorAll('.favor').forEach(icon =>
    icon.addEventListener('click', ()=> icon.classList.toggle('fa-solid'))
  );
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


// insert current year
document.getElementById("year").textContent = new Date().getFullYear();