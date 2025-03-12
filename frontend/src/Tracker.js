import React from "react";
import "./Tracker.css";

const FoodTracker = () => {
  return (
    <div className="food-tracker-container">
        <h2 className="login-title">Food Tracker</h2>
      <div className="food-tracker-content">
        <input type="text" placeholder="Date of Pickup" className="tracker-input" />
        <div className="input-group">
          <input type="text" placeholder="Input type of food" className="tracker-input" />
          <input type="text" placeholder="Input quantity" className="tracker-input" />
        </div>
        <button className="add-button">+ Add another</button>
      </div>
    </div>
  );
};

export default FoodTracker;