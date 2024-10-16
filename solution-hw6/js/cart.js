
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price'); // Corrected ID

    if (!cartContainer) return;

    cartContainer.innerHTML = ''; 

    let total = 0;

    // Display each item in the cart
    cart.forEach((item, index) => {
        const itemPrice = typeof item.price === 'number' ? item.price : 0; // Use 0 if price is undefined or not a number
        if (typeof item.price !== 'number') {
            console.warn(`Item at index ${index} has an invalid price:`, item);
        }
        total += itemPrice;

        const rollItem = document.createElement('div');
        rollItem.classList.add('roll-item');

        rollItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.type} Cinnamon Roll">
            <div class="roll-details">
                <h2>${item.type} Cinnamon Roll</h2>
                <p>Glazing: ${item.glazing}</p>
                <p>Pack Size: ${item.size}</p>
                <p>Price: $${itemPrice.toFixed(2)}</p>
                <span class="remove-item" data-index="${index}">Remove</span>
            </div>
        `;

        cartContainer.appendChild(rollItem);
    });

    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            removeItem(index);
        });
    });

    // Update total price
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
}

// Function to remove item from cart
function removeItem(index) {
    if (index === null || index === undefined) {
        console.error('Invalid index for removal:', index);
        return;
    }

    const parsedIndex = parseInt(index, 10);
    if (isNaN(parsedIndex) || parsedIndex < 0 || parsedIndex >= cart.length) {
        console.error('Index out of bounds for removal:', index);
        return;
    }

    cart.splice(parsedIndex, 1); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    updateCartDisplay(); 
}

function emptyCart() {
    cart = []; 
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    updateCartDisplay(); 
}

// Expose removeItem and emptyCart globally bc of errors
window.removeItem = removeItem;
window.emptyCart = emptyCart;

// had to redo f(x) to add item to cart
export function addToCart(rollType, glazing, size, price, imageUrl) { // Export the function
    if (typeof price !== 'number' || isNaN(price)) {
        console.error('Invalid price:', price);
        alert('Failed to add item to cart due to invalid price.');
        return;
    }

    const cartItem = {
        type: rollType,
        glazing: glazing,
        size: parseInt(size, 10), // Store the pack size as a number
        price: price,
        quantity: 1, 
        imageUrl: imageUrl
    };
    
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert(`${rollType} Cinnamon Roll added to cart!`);
}

// On page load, update cart display
document.addEventListener('DOMContentLoaded', updateCartDisplay);
