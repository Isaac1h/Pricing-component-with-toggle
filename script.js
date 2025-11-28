const toggle = document.querySelector('.toggle input');
const prices = document.querySelectorAll('.price-section h1');

function updatePrices() {
  let pricesList;
  if (toggle.checked === true) {
    pricesList = ['$19.99', '$24.99', '$39.99'];
  } else {
    pricesList = ['$199.99', '$249.99', '$399.99'];
  }
  prices.forEach((price, i) => price.textContent = pricesList[i]);
}

updatePrices();

toggle.addEventListener('change', updatePrices);