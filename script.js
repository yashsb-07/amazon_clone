let cartCount = localStorage.getItem("cartCount") || 0;
document.getElementById("cart-count").innerText = cartCount;

let buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        localStorage.setItem("cartCount", cartCount);
        document.getElementById("cart-count").innerText = cartCount;
        alert("Item added to cart!");
    });
});