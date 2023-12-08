// Exporting module

console.log('Exporting Module');

const shippingCost = 10;
export const cart = [];
// console.log(cart);

export const addToCart = function(product, quantity) {
    cart.push({product, quantity})
    console.log(`${quantity} ${product} added to cart`)
}
// console.log(cart);

const totalPrice = 220;
const totalQuantity = 55;

export {totalPrice, totalQuantity as tq};

export default (function(product, quantity) {
    cart.push({product, quantity})
    console.log(`${quantity} ${product} added to cart`)
});

