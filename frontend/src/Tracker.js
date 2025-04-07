import React, { useState } from "react";
import { db } from "./firebase"; // adjust the path to your firebase config
import { collection, addDoc } from "firebase/firestore";
import "./Tracker.css";

const FoodTracker = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [entries, setEntries] = useState([{ food: "", quantity: "" }]);

  // Add new input fields when "+ Add another" is clicked
  const handleAddAnother = () => {
    setEntries([...entries, { food: "", quantity: "" }]);
  };

  // Handle saving the data to Firebase
  const handleSave = async () => {
    console.log("save button clicked")
    try {
      // Save the data to Firestore
      await addDoc(collection(db, "foodEntries"), {
        pickupDate,
        entries,
        timestamp: new Date(),
      });

      alert("Data saved to Firebase!");
      setPickupDate("");
      setEntries([{ food: "", quantity: "" }]); // Reset the form after saving
    } catch (error) {
      console.error("Error saving data:", error);
      alert("There was an error saving your entry.");
    }
  };

  // Handle change in input fields for food and quantity
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newEntries = [...entries];
    newEntries[index][name] = value;
    setEntries(newEntries);
  };

  return (
    <div className="food-tracker-container">
      <h2 className="login-title">Food Tracker</h2>
      <div className="food-tracker-content">
        <input
          type="text"
          placeholder="Date of Pickup"
          className="tracker-input"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
        <div className="input-group">
          {entries.map((entry, index) => (
            <div key={index} className="entry-inputs">
              <input
                type="text"
                name="food"
                placeholder="Input type of food"
                className="tracker-input"
                value={entry.food}
                onChange={(e) => handleInputChange(index, e)}
              />
              <input
                type="text"
                name="quantity"
                placeholder="Input quantity"
                className="tracker-input"
                value={entry.quantity}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
          ))}
        </div>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
        <button className="add-button" onClick={handleAddAnother}>
          + Add another
        </button>
      </div>
    </div>
  );
};

export default FoodTracker;
