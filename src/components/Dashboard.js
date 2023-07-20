// components/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Inventory Management System</h1>
      <p>
        Manage your inventory efficiently with our easy-to-use system. Add,
        remove, and keep track of all your items effortlessly.
      </p>
      <Link to="/inventory" className="btn">
        View Inventory
      </Link>
    </div>
  );
};

export default Dashboard;
