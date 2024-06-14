import React from "react";
import "./SuccessPage.css"; // Import the CSS file

const SuccessPage = () => {
    return (
        <div className="success-container">
            <div className="success-message">
                <h2 className="success-title">Order Successful!</h2>
                <p className="success-description">
                    Your order has been successfully placed. Thank you for shopping with us!
                </p>
                {/* You can include additional content or links here */}
            </div>
        </div>
    );
}

export default SuccessPage;
