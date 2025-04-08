// Volume discount calculation
const radioOptions = document.querySelectorAll('input[name="qty"]');
const customQtyInput = document.getElementById('customQty');
const totalPriceEl = document.getElementById('totalPrice');

if (radioOptions.length) {
  radioOptions.forEach(option => {
    option.addEventListener('change', updateTotal);
  });
}

if (customQtyInput) {
  customQtyInput.addEventListener('input', () => {
    // Uncheck any radio if custom input is used
    radioOptions.forEach(radio => radio.checked = false);
    const customQty = Number(customQtyInput.value) || 1;
    totalPriceEl.textContent = (40 * customQty) + 'лв'; // base price example
  });
}

function updateTotal() {
  const checkedOption = document.querySelector('input[name="qty"]:checked');
  if (!checkedOption) return;
  const discountValue = Number(checkedOption.getAttribute('data-discount')) || 0;
  const quantity = Number(checkedOption.value) || 1;
  const regularTotal = 40 * quantity; // base price example
  const discountedTotal = regularTotal - discountValue;
  totalPriceEl.textContent = discountedTotal + 'лв';
}

function openLiveChat() {
  alert("Starting live chat session...");
  // Replace with real chat widget code as needed
}
