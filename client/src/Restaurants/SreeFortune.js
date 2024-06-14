import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './FoodItemsStyle.css';

const FoodItems = ({ restaurantId }) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    // Function to add item to cart
    const handleAddToCart = (itemId) => {
        setCart([...cart, itemId]); // Use spread operator to update cart
    };

    // Function to handle checkout
    const handleCheckout = () => {
        // Navigate to checkout page with cart data
        navigate("/checkout", { state: { cartItems: cart } }); // Pass cart items as location state
    };
   
    // Sample food items
    const foodItems = [
        { id: 101, name: "Chicken Biryani", price: 10 },
        { id: 102, name: "Veg Fried Rice", price: 8 },
        { id: 103, name: "Paneer Tikka", price: 12 }
    ];

    return (
        <div className="food-items-container">
            <h2>Available Food Items</h2>
            {foodItems.map((item) => (
                <div key={item.id} className="food-item">
                    {/* Checkbox to add item to cart */}
                    <input
                        type="checkbox"
                        id={item.id}
                        onChange={() => handleAddToCart(item)}
                    />
                    {/* Label showing item name and price */}
                    <label htmlFor={item.id}>{item.name} - ${item.price}</label>
                </div>
            ))}
            {/* Button to trigger checkout */}
            <button onClick={handleCheckout}>Checkout</button> {/* Call handleCheckout on button click */}
        </div>
    );
}

export default FoodItems;
