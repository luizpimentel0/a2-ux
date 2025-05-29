const featuredSection = document.querySelector('.featured-products');
const variant = Math.random();

const variantToRender = variant < 0.5 ? 'B' : 'A';

if (variantToRender === 'B') {
  featuredSection.innerHTML = `
<h2 class="title-variant">Geralmente são comprados juntos</h2>
<div class="product-grid-variant">
  <div class="product-card-variant">
    <div class="">
      <img src="mouse.jpg" alt="Mouse Ergonômico Bluetooth">
    </div>
    <div class="product-details-variant">
      <h3>Mouse Ergonômico Bluetooth Silence</h3>
      <p class="card-category"><span class="top-category">Mais vendido</span> da Categoria Tecnologia Essencial</p>
      <p class="card-price-old">R$ 199,90</p>
      <p class="card-price">R$ 149,90</p>
      <button class="add-to-cart-btn-small">Comprar agora!</button>
    </div>

  </div>
  `
}
