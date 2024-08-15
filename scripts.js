let totalAmount = 0;

function updateQuantity(item, price, action) {
    let quantityElement = document.getElementById(item + '-quantity');
    let quantity = parseInt(quantityElement.textContent);

    if (action === 'increase') {
        quantity += 1;
        totalAmount += price;
    } else if (action === 'decrease' && quantity > 0) {
        quantity -= 1;
        totalAmount -= price;
    }

    // Update the quantity displayed
    quantityElement.textContent = quantity;

    // Update the total amount to pay
    updateTotalAmount();
}

function updateTotalAmount() {
    let totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.textContent = totalAmount;
}

document.getElementById('pay-now-button').addEventListener('click', function() {
    // Replace with the actual payment gateway URL
    const paymentGatewayURL = 'https://www.example-payment-gateway.com/checkout';
    
    // Redirect to the payment gateway
    window.location.href = paymentGatewayURL;
});

document.getElementById("pay-now-section").addEventListener("click", function() {
    window.location.href = "thank-you.html";
});

