let cart = JSON.parse(localStorage.getItem('cart')) || [];
function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let subtotalPrice = document.getElementById('subtotal-price');
    let cartCount = document.getElementById('cart-count');
    cartItems.innerHTML = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>
                <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </td>
            <td>$${item.price * item.quantity}</td>
            <td><button class="remove-btn" onclick="removeItem(${index})">X</button></td>
        `;
        cartItems.appendChild(tr);
        subtotal += item.price * item.quantity;
    });
    subtotalPrice.textContent = subtotal;
    cartCount.textContent = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function changeQty(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

document.addEventListener("DOMContentLoaded", updateCart);
