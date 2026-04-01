let buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let productBox = event.target.closest(".product-box");

        let name = productBox.querySelector("h3").innerText;
        let price = productBox.querySelector(".price").innerText;
        let image = productBox.querySelector("img").src;

        let product = {
            name: name,
            price: price,
            image: image
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();
        alert("Item added to cart!");
    });
});

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}

updateCartCount();