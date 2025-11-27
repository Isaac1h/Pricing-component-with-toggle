const toggle = document.querySelector('.toggle input');
const prices = document.querySelectorAll('.price-section h1');

toggle.addEventListener('change', () => {
  const pricesList = toggle.checked 
    ? ['$19.99', '$24.99', '$39.99']    // Monthly
    : ['$199.99', '$249.99', '$399.99']; // Annually
  
  prices.forEach((price, i) => price.textContent = pricesList[i]);
});