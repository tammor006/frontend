import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaUsers, FaBuilding, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';


const Sidebar = ({ role }) => {
  const [isCollapsed, setIsCollapsed] = useState(true); // Collapsed state

  // Toggle collapse
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar">
        {/* Sidebar Header with Toggle Button */}
        <div className="sidebar-header">
          <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            {isCollapsed ? <FaBars /> : <FaBars />}
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="sidebar-content">
          <ul>
            <li>
              <Link to="/">
                <FaHome className="sidebar-icon" />
                {!isCollapsed && <span className="sidebar-text">Dashboard</span>}
              </Link>
            </li>
            {role === 'admin' && (
              <>
                <li>
                  <Link to="/users">
                    <FaUsers className="sidebar-icon" />
                    {!isCollapsed && <span className="sidebar-text">Manage Users</span>}
                  </Link>
                </li>
                <li>
                  <Link to="/properties">
                    <FaBuilding className="sidebar-icon" />
                    {!isCollapsed && <span className="sidebar-text">All Properties</span>}
                  </Link>
                </li>
                <li>
                  <Link to="/area-sizes">
                    <FaBuilding className="sidebar-icon" />
                    {!isCollapsed && <span className="sidebar-text">Area Sizes</span>}
                  </Link>
                </li>
                <li>
                  <Link to="/property-types">
                    <FaBuilding className="sidebar-icon" />
                    {!isCollapsed && <span className="sidebar-text">Property Types</span>}
                  </Link>
                </li>
                <li>
                  <Link to="/categories">
                    <FaBuilding className="sidebar-icon" />
                    {!isCollapsed && <span className="sidebar-text">Categories</span>}
                  </Link>
                </li>
              </>
            )}
            {role === 'agent' && (
              <>
                <li>
                  <Link to="/my-properties">
                    <FaBuilding className="sidebar-icon" />
                    {!isCollapsed && <span className="sidebar-text">My Properties</span>}
                  </Link>
                </li>
                <li>
                  <Link to="/add-property">
                    <FaBuilding className="sidebar-icon" />
                    {!isCollapsed && <span className="sidebar-text">Add Property</span>}
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/profile">
                <FaUserAlt className="sidebar-icon" />
                {!isCollapsed && <span className="sidebar-text">Profile</span>}
              </Link>
            </li>
            <li>
              <Link to="/logout">
                <FaSignOutAlt className="sidebar-icon" />
                {!isCollapsed && <span className="sidebar-text">Logout</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx="true">{`
        /* Sidebar Container */
        .sidebar-container {
          display: block;
          height: 100%;
        }

        /* Sidebar Styles */
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: ${isCollapsed ? '60px' : '230px'};
          background-color: #4b6cb7;
          color: white;
          transition: width 0.3s ease;
        }

        /* Sidebar Header */
        .sidebar-header {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .sidebar-toggle-btn {
          background: none;
          border: none;
          font-size: 24px;
          color: white;
          cursor: pointer;
        }

        /* Sidebar Content */
        .sidebar-content ul {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        .sidebar-content li {
          margin: 20px 20px;
          
        }

        .sidebar-content a {
          color: white;
          text-decoration: none;
          font-size: 18px;
         
          align-items: center;
        }

        .sidebar-content a:hover {
          color: #f0a500;
        }

        .sidebar-icon {
          margin-right: 10px;
          font-size: 20px;
        }

        /* Hide text when sidebar is collapsed */
        .sidebar.collapsed .sidebar-text {
          display: none;
        }

        /* Show text when sidebar is expanded */
        .sidebar:not(.collapsed) .sidebar-text {
          display: inline-block;
        }
           .admin-content {
             margin-left: ${isCollapsed ? '50px' : '220px'};
             
           }

        /* Media Queries for Responsive Sidebar */
        @media (max-width: 768px) {
          .sidebar {
            width: ${isCollapsed ? '50px' : '180px'};
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
