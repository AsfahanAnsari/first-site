// ========================================
// NEXORA - JAVASCRIPT
// ========================================
 



// ---------- CART ----------



let cart = [];


// Find all "Addto cart" buttons 
const addtocartbutton =
document.querySelectorAll(".product-card button");


//Find the cart button 
const cartbutton =
document.getElementById("cart-button")


//Add click event to every product button
addtocartbutton.forEach(function(button) {

    button.addEventListener("click",function() { 


        //Find the product card
        const productCard =
        button.closest(".product-card");

        //Get product name
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


        //show notification
        alert(productName + " Added to cart!")



        //update cart button
        updatecartButton();


    });
});




// ---------- UPDATE CART BUTTON ----------

function updateCart Button() {

    cartButton.textContent =
     "🛒 Cart (" + cart.length + ")";

}



// ---------- OPEN CART ----------

cartButton.addEventListener("click", function() {
    
    if (cart.length === 0)
});