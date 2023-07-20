// components/AddItem.js
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddItem = ({ addItemToInventory }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      name: itemName,
      quantity: parseInt(quantity),
      dateAdded: new Date().toLocaleDateString(),
    };
    addItemToInventory(newItem);
    setItemName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Add Item</h1>
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
        <div>
          <label htmlFor="item-quantity">Quantity:</label>
          <input
            type="number"
            id="item-quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
