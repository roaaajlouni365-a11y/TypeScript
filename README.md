# ElectroShop TypeScript Practical Task

## Task overview

Build a simple product management page for ElectroShop, an online electronics store. Use TypeScript to store product data, perform calculations, and display products in an HTML page. Product data must be kept in arrays; no database or external API is required.

## TypeScript requirements

- Set up the ElectroShop project with HTML and TypeScript files, and compile and run the TypeScript code.
- Declare the store name, description, currency, available product count, and whether the store is open. Use `let` and `const` appropriately.
- Create an array with at least five electronic product names and a mixed-type array containing a product name, price, and availability.
- Display whether the store is open or closed.
- Categorize a product price: above 500 is **Expensive Product**, 100 through 500 is **Medium Price**, and below 100 is **Affordable Product**.
- Loop through the product names and count how many product prices are greater than 100.
- Implement `calculateDiscount(originalPrice, discountPercentage)` to return the discounted price as a number.
- Implement `checkProductAvailability(quantity)` to return **In Stock** when quantity is above zero and **Out of Stock** otherwise.
- Implement `displayStoreMessage(message)` to print the message and return `void`.
- Implement `displayProductInfo(name, price, description?, currency = "USD")` with an optional description and a default currency.
- Implement `calculateTotalPrice(...prices)` using a rest parameter. For example, `calculateTotalPrice(100, 200, 50, 150)` returns `500`.

## Main practical requirement

Create an array of objects containing exactly three electronic products. Each object must have `name`, `description`, and `price`. The example products are:

| Product | Description | Price |
| --- | --- | ---: |
| Laptop | Core i5, 8GB RAM | 650 |
| Headphones | Wireless Bluetooth headphones | 75 |
| Keyboard | Mechanical gaming keyboard | 45 |

The HTML page must show the store name as a heading, include a **Load Products** button, and have an empty container for the products. Products should appear only after the button is clicked.

## Project file

Open [Task1.html](Task1.html) in a browser to view the practical task page.
