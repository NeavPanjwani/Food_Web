document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".buy-icon");
    const cartCount = document.getElementById("cart-count");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const notification = document.createElement("div");
    notification.id = "cart-notification";
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.background = "#4CAF50";
    notification.style.color = "#fff";
    notification.style.padding = "15px 25px";
    notification.style.fontSize = "20px"; /* Increased font size */
    notification.style.fontWeight = "bold"; /* Make it bold */
    notification.style.borderRadius = "8px";
    notification.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
    notification.style.display = "none";
    notification.style.zIndex = "1000";
    document.body.appendChild(notification);

    cartButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const productCard = button.closest(".product-cart");
            const productName = productCard.querySelector("h4").textContent;
            const productPrice = parseFloat(
                productCard.querySelector(".price").textContent.replace("$", "")
            );
            const productImg = productCard.querySelector("img").src;

            const product = {
                name: productName,
                price: productPrice,
                image: productImg,
                quantity: 1,
            };

            const existingProduct = cart.find((item) => item.name === product.name);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            cartCount.textContent = cart.length;

            // Show notification with larger text
            notification.textContent = "✔ Item added to cart!";
            notification.style.display = "block";

            setTimeout(() => {
                notification.style.display = "none";
            }, 2000);
        });
    });
});