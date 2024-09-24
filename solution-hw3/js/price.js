//glazing and pack options
const glazingOptions = [
    {name: 'Keep original  ▼', price: 0},
    {name: 'Sugar milk', price: 0},
    {name: 'Vanilla milk', price: 0.5},
    {name: 'Double chocolate', price: 1.5}
];

const packSizeOptions = [
    {size: 1 , multiplier: 1},
    {size: 3, multiplier: 3},
    {size: 6, multiplier: 5},
    {size: 12, multiplier: 10}
];

// base price of a single cinnamon roll
const basePrice = 2.49;

const glazingSelect = document.getElementById('glazing');
const packSizeSelect = document.getElementById('pack-size');
const priceElement = document.querySelector('.price');

// populates the glazing and pack options dropdown dynamically
for (let i = 0; i < glazingOptions.length; i++) {
    let option = document.createElement('option');
    option.textContent = glazingOptions[i].name;
    option.value = glazingOptions[i].price;
    glazingSelect.appendChild(option);
}

for (let i = 0; i < packSizeOptions.length; i++) {
    let option = document.createElement('option');
    option.textContent = packSizeOptions[i].size;
    option.value = packSizeOptions[i].multiplier;
    packSizeSelect.appendChild(option);
}

//updates the price dynamically
function updatePrice() {
    const selectedGlazingPrice = parseFloat(glazingSelect.value);
    const selectedPackSizeMultiplier = parseFloat(packSizeSelect.value);
    
    const totalPrice = (basePrice + selectedGlazingPrice) * selectedPackSizeMultiplier;
    priceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

//event listeners
glazingSelect.addEventListener('change', updatePrice);
packSizeSelect.addEventListener('change', updatePrice);

//initialize the price on page load
window.onload = updatePrice;
