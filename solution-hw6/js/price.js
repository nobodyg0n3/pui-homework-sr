// Mapping of glazing options and their price adjustments
const glazingOptions = {
    "Original": 0.00,
    "Sugar Milk": 0.50,
    "Vanilla Milk": 0.75,
    "Double-Chocolate": 1.50
};

const packSizeOptions = {
    1: 1,
    3: 3,
    6: 5,
    12: 10
};

export function calculatePrice(basePrice, glazing, packSize) {
    const glazingPrice = glazingOptions[glazing] || 0; // Get glazing price adjustment
    const packSizeMultiplier = packSizeOptions[packSize] || 1; // Get pack size multiplier

    return (basePrice + glazingPrice) * packSizeMultiplier;
}
