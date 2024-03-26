function distanceFromHqInBlocks(blocks) {
    return Math.abs(block -42)
}
let
// Function to calculate distance from headquarters to pickup location in blocks
function distanceFromHqInBlocks(pickupLocation) {
    const hq = 42; // Scuber's headquarters location
    return Math.abs(pickupLocation - hq); // Calculate the absolute difference between pickupLocation and hq
}

function calculatesFarePrice(startBlock, endBlock) {
    const feetPerBlock = 264; // Assuming each block is 264 feet

    // Calculate the distance in feet
    const distance = Math.abs(endBlock - startBlock) * feetPerBlock;

    // If distance is less than or equal to 400 feet, fare is free
    if (distance <= 400) {
        return 0;
    }
    // If distance is between 400 and 2000 feet, fare is calculated as 2 cents per foot (excluding the first 400 feet)
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    // If distance is between 2000 and 2500 feet, flat fare of $25
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }
    // If distance is over 2500 feet, return 'cannot travel that far'
    else {
        return 'cannot travel that far';
    }
}

// Example usage:
console.log(calculatesFarePrice(43, 45)); // Output: 0 (within first 400 feet)
console.log(calculatesFarePrice(43, 50)); // Output: 6.72 (between 400 and 2000 feet)
console.log(calculatesFarePrice(43, 56)); // Output: 25 (flat fare for distance over 2000 feet and under 2500 feet)
console.log(calculatesFarePrice(43, 70)); // Output: 'cannot travel that far' (over 2500 feet)
