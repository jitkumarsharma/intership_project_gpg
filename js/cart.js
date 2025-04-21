document.addEventListener("DOMContentLoaded", function () {
    const cartModal = document.getElementById("cartModal");
    const openCartBtn = document.getElementById("openCartBtn");
    const subtotalEl = document.getElementById("subtotal");

    openCartBtn.addEventListener("click", () => {
        cartModal.style.display = "block"; 
        updateSubtotal();
    });

    document.querySelector(".close-btn").addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    document.querySelectorAll(".increase").forEach(button => {
        button.addEventListener("click", function () {
            let input = this.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            updateSubtotal();
        });
    });

    document.querySelectorAll(".decrease").forEach(button => {
        button.addEventListener("click", function () {
            let input = this.nextElementSibling;
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateSubtotal();
            }
        });
    });

    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.remove();
            updateSubtotal();
        });
    });

    function updateSubtotal() {
        let total = 0;
        document.querySelectorAll(".cart-item").forEach(item => {
            let price = parseInt(item.getAttribute("data-price"));
            let quantity = parseInt(item.querySelector("input").value);
            total += price * quantity;
        });
        subtotalEl.textContent = `$${total.toFixed(2)}`;
    }
});
