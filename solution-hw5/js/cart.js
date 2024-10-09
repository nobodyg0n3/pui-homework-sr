//please note i had to do SO MUCH debugging due to issues with deletions and the transfer of rolls, had to immensely edge case the process of adding to cart/rpicing

import { calculatePrice } from './price.js'; 
import { rolls } from './rollsData.js';  

document.addEventListener('DOMContentLoaded', () => {
    
    const cart = [];

    // Function to add an item to the cart
    function addToCart(rollType, glazing, packSize) {
        const rollDetails = rolls[rollType];
        
        if (!rollDetails) {
            console.error(`Roll type "${rollType}" not found in rollsData.`);
            return;
        }

        console.log(`Roll Type: ${rollType}, Base Price: ${rollDetails.basePrice}, Glazing: ${glazing}, Pack Size: ${packSize}`);

        const price = calculatePrice(rollDetails.basePrice, glazing, packSize);
        
        if (isNaN(price) || price === undefined) {
            console.error("Price calculation failed.");
            return;
        }

        console.log(`Calculated Price: ${price}`);

        const cartItem = {
            type: rollType,
            glazing: glazing,
            packSize: packSize,
            price: price,
            image: rollDetails.imageFile
        };
        
        cart.push(cartItem);
        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartContainer = document.getElementById("cart-items");
        if (!cartContainer) {
            console.error("Cart container element not found.");
            return;
        }

        cartContainer.innerHTML = '';

        // Loop through cart items & display them
        cart.forEach((item, index) => {
            if (item.price !== undefined && !isNaN(item.price)) {
                const rollElement = document.createElement('div');
                rollElement.className = 'roll-item';
                rollElement.innerHTML = `
                    <img src="products/${item.image}" alt="${item.type}" style="width: 200px; height: 200px;">
                    <p>${item.type} Cinnamon Roll <br>
                    ${item.glazing} <br>
                    Pack Size: ${item.packSize} <br>
                    Price: $${item.price.toFixed(2)}</p>
                    <span class="remove-item">Remove</span>
                `;
                cartContainer.appendChild(rollElement);

                // Add event listener to the "Remove" link
                rollElement.querySelector('.remove-item').addEventListener('click', () => {
                    removeFromCart(index);
                });
            } else {
                console.error("Invalid item price:", item);
            }
        });

        // Display total price
        const totalPrice = calculateTotalPrice();
        const totalPriceElement = document.createElement('div');
        totalPriceElement.className = 'cart-total';
        totalPriceElement.innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;
        cartContainer.appendChild(totalPriceElement);
    }

    // Function to remove an item from the cart
    function removeFromCart(index) {
        cart.splice(index, 1); 
        updateCartDisplay(); 
    }

    // Function to calculate the total price of the cart
    function calculateTotalPrice() {
        return cart.reduce((total, item) => total + (item.price || 0), 0);
    }

    // Populating the cart for testing
    addToCart("Original", "Sugar Milk", 1);
    addToCart("Walnut", "Vanilla Milk", 1);
    addToCart("Raisin", "Sugar Milk", 1);
    addToCart("Apple", "Original", 1);
});
