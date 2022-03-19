//   Problem-1   //
//Conversion seer to mon

function seerToMon(seer) {
    /* If number not number */
    /* error message */
    if (typeof seer != 'number') {
        return "Please enter a number.";
    }

    /* If number not positve */
    if (seer < 0) {
        return "Please Enter Positive number and the number 40 and above";
    }

    /* calculate seerToMon */
    const Mon = seer / 40;
    return Mon;
}
const totalMon = seerToMon(40);
console.log(totalMon);


//    Problem-2   //
//Sales Budget calculator for shirt, pant and shoes

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    /* error message */
    /* If can not enter number */
    if (typeof shirtQuantity != 'number') {
        return 'Please Enter a number';
    }
    if (typeof pantQuantity != 'number') {
        return 'Please Enter a number';
    }
    if (typeof shoeQuantity != 'number') {
        return 'Please Enter a number';
    }

    /* If can not enter positive value */
    if (shirtQuantity < 0) {
        return 'Please Enter a positive shirt number';
    }
    if (pantQuantity < 0) {
        return 'Please Enter a positive pant number';
    }
    if (shoeQuantity < 0) {
        return 'Please Enter a positive shoe number';
    }

    /* Price declaration */
    const perShirt = 100;
    const perPant = 200;
    const perShoe = 500;

    /* Total sales calculation */
    const totalShirtCost = perShirt * shirtQuantity;
    const totalPantCost = perPant * pantQuantity;
    const totalShoeCost = perShoe * shoeQuantity;

    const totalPrice = totalShirtCost + totalPantCost + totalShoeCost;
    return totalPrice;
}

const totalCost = totalSales(5, 2, 6);
console.log(totalCost);


//   Problem-3   //
// Delivery cost calculation

function deliveryCost(piece) {
    /* error message */
    /* If piece not number */
    if (typeof piece != 'number') {
        return "Please Enter a number.";
    }

    /* If number not positve */
    if (piece < 0) {
        return "Please enter Positive number.";
    }

    /* Item Price Dicliaration */
    const first100ItemCost = 100;
    const second200ItemCost = 80;
    const lastAllItemCost = 50;

    /* First 100 Item Cost */
    if (piece <= 100) {
        const first100ItemTotalPrice = piece * first100ItemCost;
        return first100ItemTotalPrice;
    }

    /* Second 200 Item Cost */
    else if (piece <= 200) {
        const first100ItemTotalPrice = 100 * first100ItemCost;
        const restPices = piece - 100;
        const second100ItemTotalPrice = restPices * second200ItemCost;
        const totalPrice = first100ItemTotalPrice + second100ItemTotalPrice;
        return totalPrice;
    }

    /* Rest of Item Cost */
    else {
        const first100ItemTotalPrice = 100 * first100ItemCost;
        const second100ItemTotalPrice = 100 * second200ItemCost;
        const restPices = piece - 200;
        const restPicesPrice = restPices * lastAllItemCost;
        const totalPrice = first100ItemTotalPrice + second100ItemTotalPrice + restPicesPrice;
        return totalPrice;
    }
}

const price = deliveryCost(120);
console.log(price);


//   Problem-4   //
// Perfect friend name in an array

function perfectFriend(name) {
    /* error message */
    for (const element of name) {
        if (element.length == 5) {
            return element;
        }
    }
}

var friend = perfectFriend(['Joy', 'Ornob', 'Anupom', 'Setu', 'Amit']);
console.log(friend);