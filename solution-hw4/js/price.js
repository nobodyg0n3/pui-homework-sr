// Glazing and pack options
const glazingOptions = [
    { name: 'Keep original  ▼', price: 0 },
    { name: 'Sugar milk', price: 0 },
    { name: 'Vanilla milk', price: 0.5 },
    { name: 'Double chocolate', price: 1.5 }
];

const packSizeOptions = [
    { size: 1, multiplier: 1 },
    { size: 3, multiplier: 3 },
    { size: 6, multiplier: 5 },
    { size: 12, multiplier: 10 }
];

// Get necessary details
const glazingSelect = document.getElementById('glazing');
const packSizeSelect = document.getElementById('pack-size');
const priceElement = document.getElementById('product-price'); 

// Populate glazing options dynamically
glazingOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.textContent = option.name;
    optionElement.value = option.price;
    glazingSelect.appendChild(optionElement);
});

// Populate pack size options dynamically
packSizeOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.textContent = option.size;
    optionElement.value = option.multiplier;
    packSizeSelect.appendChild(optionElement);
});

function updatePrice() {
    const selectedGlazingPrice = parseFloat(glazingSelect.value); 
    const selectedPackSizeMultiplier = parseFloat(packSizeSelect.value); 
    const rollBasePrice = parseFloat(priceElement.dataset.baseprice); 
    const totalPrice = (rollBasePrice + selectedGlazingPrice) * selectedPackSizeMultiplier;
    
    priceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

glazingSelect.addEventListener('change', updatePrice); 
packSizeSelect.addEventListener('change', updatePrice); 

updatePrice();
