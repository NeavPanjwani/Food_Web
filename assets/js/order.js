function showMessage() {
    const messageBox = document.getElementById("message-box");
    messageBox.classList.remove("hidden");

    // Auto-hide the message and redirect after 3 seconds
    setTimeout(() => {
      messageBox.classList.add("hidden");
      window.location.href = "restaurant.html"; // Redirect to restaurant.html
    }, 3000);
}