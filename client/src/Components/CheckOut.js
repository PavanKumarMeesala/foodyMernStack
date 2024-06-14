import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './CheckoutStyle.css';

const Checkout = () => {
    const location = useLocation();
    const cartItems = location.state?.cartItems || [];
    const navigate = useNavigate();

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    // State for payment method selection
    const [paymentMethod, setPaymentMethod] = useState('');

    // Function to generate a random order ID
    const generateOrderId = () => {
        return 'ORDER' + Math.floor(Math.random() * 1000000);
    };

    // Function to handle payment method selection
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    // Function to handle placing order
    const handlePlaceOrder = () => {
        const orderId = generateOrderId(); // Generate a random order ID
        // Logic to process payment using selected payment method
        // For example, you can integrate Stripe for payment processing
        console.log("Processing payment with", paymentMethod);
        // After successful payment, you can clear the cart or navigate to a success page
        navigate("/success", { state: { orderId } }); // Navigate to success page with order ID
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            {cartItems.length > 0 ? (
                <div>
                    <h3>Cart Items:</h3>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>{item.name} - ${item.price}</li>
                        ))}
                    </ul>
                    <p>Total Price: ${totalPrice}</p>
                    <div className="billing-info">
                        <h3>Billing Information:</h3>
                        {/* Include input fields for billing information (e.g., name, address) */}
                    </div>
                    <div className="payment-methods">
                        <h3>Payment Methods:</h3>
                        <label>
                            <input
                                type="radio"
                                value="credit_card"
                                checked={paymentMethod === 'credit_card'}
                                onChange={handlePaymentMethodChange}
                            />
                            Credit Card
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="paypal"
                                checked={paymentMethod === 'paypal'}
                                onChange={handlePaymentMethodChange}
                            />
                            PayPal
                        </label>
                        {/* Add more payment methods as needed */}
                    </div>
                    <button className="checkout-button" onClick={handlePlaceOrder}>Place Order</button>
                </div>
            ) : (
                <p>No items in the cart.</p>
            )}
        </div>
    );
}

export default Checkout;
