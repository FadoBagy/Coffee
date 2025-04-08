// Example: Changing price based on selected size
// (Pseudo-logic: You'd supply actual logic for your pricing tiers.)

const sizeRadios = document.querySelectorAll('input[name="size"]');
const oldPriceEl = document.querySelector('.old-price');
const newPriceEl = document.querySelector('.new-price');

// Example base prices
let baseOldPrice = 120.00;
let baseNewPrice = 99.00;

sizeRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    switch (radio.value) {
      case 'Single':
        oldPriceEl.textContent = '120.00 лв';
        newPriceEl.textContent = '99.00 лв';
        break;
      case 'Double':
        oldPriceEl.textContent = '200.00 лв';
        newPriceEl.textContent = '179.00 лв';
        break;
      case 'Five':
        oldPriceEl.textContent = '500.00 лв';
        newPriceEl.textContent = '449.00 лв';
        break;
      // ...and so on for your other sizes
      default:
        oldPriceEl.textContent = `${baseOldPrice.toFixed(2)} лв`;
        newPriceEl.textContent = `${baseNewPrice.toFixed(2)} лв`;
    }
  });
});
