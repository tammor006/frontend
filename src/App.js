import React from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';  // ❌ Remove BrowserRouter
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import PropertyListings from './pages/PropertyListing';
import PropertyDetails from './pages/PropertyDetails';
import Login from "./pages/Login";
import ManageUsers from "./pages/ManageUsers";
import AddProperty from "./pages/AddProperty";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/dashboard/Sidebar";
import Profile from "./pages/Profile";

const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

// Function to check user role
const getUserRole = () => {
  return localStorage.getItem("role");
};

// Private Route Wrapper
const PrivateRoute = ({ element, allowedRoles }) => {
  const isAuth = isAuthenticated();
  const userRole = getUserRole();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" />;
  }

  return element;
};

const App = () => {
  return (
    <>
      <Preloader />
      {isAuthenticated() && <Sidebar role={getUserRole()} />}
      <Routes>  {/* ✅ No need to wrap in <Router> */}
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<PropertyListings />} />
        <Route path="/property" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} allowedRoles={["admin", "agent"]} />} />
            <Route path="/profile" element={<PrivateRoute element={<Profile />} allowedRoles={["admin", "agent"]} />} />
            <Route path="/manage-users" element={<PrivateRoute element={<ManageUsers />} allowedRoles={["admin"]} />} />
            <Route path="/add-property" element={<PrivateRoute element={<AddProperty />} allowedRoles={["agent"]} />} />
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default App;
