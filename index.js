"use strict";
//Part 1: TypeScript Setup and Variables
const storeName = "ElectroShop";
const storeDescription = "Online Electronics Store";
const currency = "USD";
let availableProducts = 5;
let isStoreOpen = true;
console.log(storeName);
console.log(storeDescription);
console.log(currency);
console.log(availableProducts);
console.log(isStoreOpen);
//Part 3: Arrays and Multi-Type Arrays
let productNames = ["Laptop", "Mobile Phone", "Headphones", "Keyboard", "Mouse"];
console.log(productNames);
let productInfo = ["Laptop", 777, true];
console.log(productInfo);
//Part 4: Conditional Statements and Loops
if (isStoreOpen) {
    console.log("Store is Open");
}
else {
    console.log("Store is Closed");
}
let productPrice = 650;
if (productPrice > 500) {
    console.log("Expensive Product");
}
else if (productPrice >= 100 && productPrice <= 500) {
    console.log("Medium Price");
}
else {
    console.log("Affordable Product");
}
for (let i = 0; i < productNames.length; i++) {
    console.log(productNames[i]);
}
let productPrices = [650, 300, 75, 45, 120];
let count = 0;
for (let i = 0; i < productPrices.length; i++) {
    if (productPrices[i] > 100) {
        count++;
    }
}
console.log("Products above 100:", count);
//Part 5: Function Parameters and Return Types
function calculateDiscount(originalPrice, discountPercentage) {
    let discount = originalPrice * discountPercentage / 100;
    let finalPrice = originalPrice - discount;
    return finalPrice;
}
function checkProductAvailability(quantity) {
    if (quantity > 0) {
        return "In Stock";
    }
    else {
        return "Out of Stock";
    }
}
function displayStoreMessage(message) {
    console.log(message);
}
//Part 6: Optional and Default Parameters
function displayProductInfo(name, price, description, currency = "USD") {
    console.log("Name:", name);
    console.log("Price:", price, currency);
    if (description !== undefined) {
        console.log("Description:", description);
    }
}
displayProductInfo("Laptop", 650, "Core i5, 8GB RAM");
displayProductInfo("Headphones", 75);
//Part 7: Rest Parameters
function calculateTotalPrice(...prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return total;
}
console.log(calculateTotalPrice(100, 200, 50, 150));
//4. Main Practical Requirement – Load Products
let product = { name: "Laptop",
    description: "Core i5, 8GB RAM",
    price: 650
};
let products = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 650
    },
    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75
    },
    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 45
    }
];
console.log(products);
function loadProducts() {
    let container = document.getElementById("productsContainer");
    if (container) {
        container.innerHTML = "";
        for (let i = 0; i < products.length; i++) {
            container.innerHTML += `
                <div>
                    <h2>${products[i].name}</h2>
                    <p>${products[i].description}</p>
                    <p>Price: ${products[i].price} USD</p>
                </div>
            `;
        }
    }
}
let loadBtn = document.getElementById("loadBtn");
if (loadBtn) {
    loadBtn.addEventListener("click", loadProducts);
}
