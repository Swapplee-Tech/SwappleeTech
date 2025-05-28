import { products } from "./services.js";

const grid    = document.getElementById("product-grid");
const buttons = document.querySelectorAll(".filter-buttons button");

function renderGrid(filterType) {
  grid.innerHTML = "";

  products
    .filter(p => p.type === filterType)
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";

      const tagsHtml = p.tags.map(tag => {
        const content = tag.icon ?? tag.text;
        const colorPart = tag.textColor ? `;color:${tag.textColor}` : "";
        return `<span class="tag ${tag.position}" style="background:${tag.bgColor}${colorPart}">${content}</span>`;
      }).join("");

      card.innerHTML = `
        <div class="product-image">
          ${tagsHtml}
          <img src="${p.imagePath}" alt="${p.name}">
        </div>
        <div class="details">
          <div class="price">
            <h4>${p.name}</h4>
            <span class="current">&#8358;${p.price.toFixed(2)}</span>
          </div>
          <div class="desc">
            ${p.isAvailable}
          </div>
          <div class="ratings">
            <span style= "color: gold">${p.ratings}</span>
            <span class= "rateNum">(${p.rateNum})</span>
          </div>
          <div class="cart">
            <button class="add-cart">${p.cartText}</button>
            <button class="comments">${p.fileIcon}</button>
            <button class="swap">${p.swapIcon}</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGrid(btn.dataset.filter);
  });
});

// initial render
renderGrid("goods");

grid.addEventListener("click", e => {
  const icon = e.target;
  if ( icon.closest('.tag.top-right') && icon.tagName === 'I' ) {
    if ( icon.classList.contains('fa-regular') || icon.classList.contains('far') ) {
      icon.classList.replace('fa-regular', 'fa-solid');
      // icon.classList.replace(      'far',     'fas');
    } else {
      icon.classList.replace('fa-solid',  'fa-regular');
      // icon.classList.replace(    'fas',          'far');
    }
  }
});





