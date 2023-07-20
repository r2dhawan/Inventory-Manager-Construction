// components/Inventory.js
import React from "react";
import "./Inventory.css";

const Inventory = ({ inventoryItems, removedItems }) => {
  return (
    <div>
      <h1>Active Items</h1>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.dateAdded}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Removed Items</h1>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Date Removed</th>
          </tr>
        </thead>
        <tbody>
          {removedItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.dateAdded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
