export function calculatePrice(basePrice, glazing, packSize) {
    console.log(`calculatePrice called with: basePrice=${basePrice}, glazing=${glazing}, packSize=${packSize}`);
    
    const glazingPrice = {
        "Original": 0,
        "Sugar Milk": 0.5,
        "Vanilla Milk": 0.75,
        "Double-Chocolate": 1.50
    };

    const packSizeMultiplier = {
        1: 1,
        3: 3,
        6: 5,
        12: 10
    };

    if (!(glazing in glazingPrice)) {
        console.error(`Glazing "${glazing}" not found in glazingPrice.`);
        return undefined;
    }

    if (!(packSize in packSizeMultiplier)) {
        console.error(`Pack size "${packSize}" not found in packSizeMultiplier.`);
        return undefined;
    }

    const finalPrice = (basePrice + glazingPrice[glazing]) * packSizeMultiplier[packSize];
    console.log(`Final Price: ${finalPrice}`);
    return finalPrice;
}
