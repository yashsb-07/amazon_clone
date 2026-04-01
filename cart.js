let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartContainer = document.getElementById("cart-items");
let totalPrice = 0;

function displayCart() {
    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        let priceNumber = parseInt(item.price.replace("₹", ""));
        totalPrice += priceNumber;

        cartContainer.innerHTML += `
        <div class="cart-item">
            <img src="${item.image}">
            
            <div class="cart-details">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
            </div>

            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        </div>
    `;
    });

    document.getElementById("total-price").innerText = totalPrice;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}

displayCart();