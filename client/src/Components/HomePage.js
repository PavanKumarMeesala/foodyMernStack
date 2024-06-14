import React from "react";
import './WelcomeStyle.css';
import location from '../images/Location.png';
import SreeFortune from '../images/SreeFortune.png';
import SoulOfSouth from '../images/SoulOfSouth.png';
import Prime from '../images/Prime.png';
import Asif from '../images/Asif.png';
import Barkass from '../images/Barkass.png';
import {Link} from 'react-router-dom';

function Welcome() {
    const restaurants = [
        { name: "Sree Fortune Grand", rating: 4.5, image: SreeFortune },
        { name: "Soul of South", rating: 4.0, image: SoulOfSouth },
        { name: "Prime Prime", rating: 4.5, image: Prime },
        { name: "Asif Briyani", rating: 3.5, image: Asif},
        { name: "Barkass", rating: 4.2, image: Barkass}
    ];

    return (
        <div className="WelcomePage">
            <Link to="/cart" className="cart-link">
                <div className="cart-icon">🛒</div>
            </Link>

            <img src={location} alt="loading" className="location-icon" />
            <div id="location">Vijaywada</div>

            {restaurants.map((restaurant, index) => (
                <Link key={index} to={`/restaurant/${index}`} className="container">
                    <div className="restaurant-box">
                        <img className="restaurant-image" src={restaurant.image} alt="Restaurant Image" />
                        <div className="restaurant-details">
                            <div className="restaurant-name">{restaurant.name}</div>
                            <div className="rating">Rating: {restaurant.rating}</div>
                            <button className="order-button">Order Now</button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Welcome;
