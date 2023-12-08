// // IMPORTING MODULE
// // import './shoppingCart';
// // import { addToCart, totalPrice as Price, tq } from './shoppingCart'
// // console.log('Importing module');

// // addToCart('pizza', 2);
// // console.log(Price, tq);

// // Importing name
// // import * as shopify from './shoppingCart';

// // shopify.addToCart('Burger', 1);
// // console.log(shopify.totalPrice, shopify.tq)

// // Importing whole module
// import add, {cart} from './shoppingCart';
// add('bread', 2);
// add('noodles', 5);
// add('sandwich', 3);

// console.log(cart);

// // TOP LEVEL AWAIT
// // console.log('something before')

// const getLastPost = async function() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();
// console.log(data);
// return {title: data.at(-1).title, text: data.at(-1).body}
// }

// const post = getLastPost();
// console.log(post);
// console.log('something after');

// // not clean
// // post.then(last => {console.log(last)});

// // const post2 = await getLastPost();
// // console.log(post2);

// //////////////
// // Module Pattern
// const shoppingCart2 = (function() {
//     const cart = [];
//     const shippingCost = 20;
//     const totalPrice = 250;
//     const totalQuantity = 25;

//     const addToCart = function(product, quantity) {
//         cart.push({product, quantity})
//         console.log(`${quantity} ${product} added to cart(shipping cost is ${shippingCost})`)
//     }

//     const orderStock = function(product, quantity) {
//         console.log(`${quantity} ${product} ordered from supplier`)
//     }

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity
//     };

// })();

// shoppingCart2.addToCart('Orange', 4);
// console.log(shoppingCart2);
// console.log(shoppingCart2.shippingCost);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';