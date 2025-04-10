import React from "react";
import Sidebar from "../components/dashboard/Sidebar";

const Dashboard = () => {
  const userRole = localStorage.getItem("role"); // Get role from local storage

  return (
    <div className="admin-container">
      <Sidebar role={userRole} />
      <div className="admin-content">
        <h1>Welcome to Dashboard</h1>
        <p>Manage your properties and profile here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
