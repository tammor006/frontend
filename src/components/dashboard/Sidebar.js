import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ role }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>

        {role === "admin" && (
          <>
            <li><Link to="/users">Manage Users</Link></li>
            <li><Link to="/properties">All Properties</Link></li>
          </>
        )}

        {role === "agent" && (
          <>
            <li><Link to="/my-properties">My Properties</Link></li>
            <li><Link to="/add-property">Add Property</Link></li>
          </>
        )}

        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
