// ========================================
// NEXORA - JAVASCRIPT
// ========================================


// ---------- CART ----------

let cart = [];


// Find all "Add to Cart" buttons
const addToCartButtons =
    document.querySelectorAll(".product-card button");


// Find the Cart button
const cartButton =
    document.getElementById("cartButton");


// Add click event to every product button
addToCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Find the product card
        const productCard =
            button.closest(".product-card");

        // Get product name
        const productName =
            productCard.querySelector("h3").textContent;

        // Get product price
        const productPrice =
            productCard.querySelector("strong").textContent;


        // Add product to cart
        cart.push({
            name: productName,
            price: productPrice
        });


        // Show notification
        alert(productName + " added to cart!");


        // Update cart button
        updateCartButton();

    });

});


// ---------- UPDATE CART BUTTON ----------

function updateCartButton() {

    cartButton.textContent =
        "🛒 Cart (" + cart.length + ")";

}


// ---------- OPEN CART ----------

cartButton.addEventListener("click", function() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    let cartMessage =
        "🛒 YOUR NEXORA CART\n\n";


    cart.forEach(function(product, index) {

        cartMessage +=
            (index + 1) +
            ". " +
            product.name +
            " - " +
            product.price +
            "\n";

    });


    cartMessage +=
        "\nTotal items: " +
        cart.length;


    alert(cartMessage);

});
