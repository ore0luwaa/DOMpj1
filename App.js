document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll(".cart-item");

    cartItems.forEach(item => {
        const plusButton = item.querySelector(".plus-btn");
        const minusButton = item.querySelector(".minus-btn");
        const deleteButton = item.querySelector(".delete-btn");
        const likeButton = item.querySelector(".like-btn");
        const quantityField = item.querySelector(".quantity");
        const priceField = item.querySelector(".price");
        const totalPriceField = document.querySelector(".total-price");

        function updateTotalPrice() {
            let totalPrice = 0;
            cartItems.forEach(item => {
                const quantity = parseInt(item.querySelector(".quantity").textContent);
                const price = parseFloat(item.querySelector(".price").textContent);
                totalPrice += quantity * price;
            });
            totalPriceField.textContent = `Total: ${totalPrice.toFixed(2)}`;
        }

        plusButton.addEventListener("click", () => {
            quantityField.textContent = parseInt(quantityField.textContent) + 1;
            updateTotalPrice();
        });

        minusButton.addEventListener("click", () => {
            const quantity = parseInt(quantityField.textContent);
            if (quantity > 1) {
                quantityField.textContent = quantity - 1;
                updateTotalPrice();
            }
        });

        deleteButton.addEventListener("click", () => {
            item.remove();
            updateTotalPrice();
        });

        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("liked");
        });
    });

    updateTotalPrice();
});
