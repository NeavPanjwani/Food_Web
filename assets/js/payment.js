document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const paymentItems = document.getElementById("payment-items");
    const totalPrice = document.getElementById("payment-total-price");

    // Update the payment page with cart items and calculate total price
    function updatePaymentPage() {
        paymentItems.innerHTML = ''; // Clear previous items
        let total = 0;

        cart.forEach((item) => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
            `;
            paymentItems.appendChild(tr);
            total += item.price * item.quantity;
        });

        totalPrice.textContent = total.toFixed(2); // Update total price
    }

    // Handle the payment form submission
    document.getElementById("payment-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Show the toast notification
        showToast();

        // Simulate payment success and empty the cart
        localStorage.setItem("paymentSuccess", "true");
        localStorage.removeItem("cart");

        // Redirect to feedback page after 3 seconds
        setTimeout(function () {
            window.location.href = "feedback.html"; // Redirect to feedback page
        }, 3000);
    });

    // Show toast notification
    function showToast() {
        const toast = document.getElementById("toast");
        toast.classList.add("show"); // Make the toast visible

        // After 3 seconds, hide the toast
        setTimeout(function () {
            toast.classList.remove("show"); // Hide the toast
        }, 3000);
    }

    // After the page is loaded, check if payment was successful
    window.onload = function () {
        if (localStorage.getItem("paymentSuccess")) {
            localStorage.removeItem("paymentSuccess");
            window.location.href = "feedback.html"; // Redirect if payment was successful
        }
    };

    // Update the payment page when the page is loaded
    updatePaymentPage();
});
