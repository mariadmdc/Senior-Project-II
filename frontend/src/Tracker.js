import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import "./Tracker.css";

const FoodTracker = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [entries, setEntries] = useState([{ food: "", quantity: "" }]);
  const [isSaved, setIsSaved] = useState(false);

  const handleAddAnother = () => {
    setEntries([...entries, { food: "", quantity: "" }]);
  };

  const handleSave = async () => {
    try {
      await addDoc(collection(db, "foodEntries"), {
        pickupDate,
        entries,
        timestamp: new Date(),
      });
  
      setEntries([{ food: "", quantity: "" }]);
      setPickupDate(""); 
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    } catch (error) {
      console.error("Error saving data:", error);
      alert("There was an error saving your entry.");
    }
  };  

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
        <button className="tracker-btn" onClick={handleSave} disabled={isSaved}>
          {isSaved ? "✓ Saved" : "Save"}
        </button>
        <button className="add-button" onClick={handleAddAnother}>
          + Add another
        </button>
      </div>
    </div>
  );
};

export default FoodTracker;
