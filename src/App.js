// App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import AddItem from "./components/AddItem";
import RemoveItem from "./components/RemoveItem";
import "./App.css";
import "./styles.css"; // Add the styles.css file

const MAX_CAPACITY = 50; // Fixed capacity for the inventory

const App = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [removedItems, setRemovedItems] = useState([]);

  const addItemToInventory = (newItem) => {
    if (inventoryItems.length < MAX_CAPACITY) {
      setInventoryItems([...inventoryItems, newItem]);
    } else {
      alert("Inventory is at maximum capacity.");
    }
  };

  const removeItemFromInventory = (itemName) => {
    const itemToRemove = inventoryItems.find((item) => item.name === itemName);
    if (itemToRemove) {
      setRemovedItems([...removedItems, itemToRemove]);
      setInventoryItems(
        inventoryItems.filter((item) => item.id !== itemToRemove.id)
      );
    } else {
      alert("Item not found in the inventory.");
    }
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
          <NavLink to="/inventory" activeClassName="active">
            Inventory
          </NavLink>
          <NavLink to="/add-item" activeClassName="active">
            Add Item
          </NavLink>
          <NavLink to="/remove-item" activeClassName="active">
            Remove Item
          </NavLink>
        </nav>

        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard inventoryItems={inventoryItems} />}
          />
          <Route
            path="/inventory"
            element={
              <Inventory
                inventoryItems={inventoryItems}
                removedItems={removedItems}
              />
            }
          />
          <Route
            path="/add-item"
            element={<AddItem addItemToInventory={addItemToInventory} />}
          />
          <Route
            path="/remove-item"
            element={
              <RemoveItem
                inventoryItems={inventoryItems}
                removeItemFromInventory={removeItemFromInventory}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
