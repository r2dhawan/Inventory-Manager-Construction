// components/RemoveItem.js
import React, { useState } from "react";

const RemoveItem = ({ inventoryItems, removeItemFromInventory }) => {
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    removeItemFromInventory(itemName);
    setItemName("");
  };

  return (
    <div>
      <h1>Remove Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item-name">Item Name:</label>
          <input
            type="text"
            id="item-name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Remove Item
        </button>
      </form>
    </div>
  );
};

export default RemoveItem;
