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
import UpdateProperty from "./pages/UpdateProperty";
import PropertyLists from "./pages/Property";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Sidebar from "./components/dashboard/Sidebar";
import Profile from "./pages/Profile";
import "leaflet/dist/leaflet.css";

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
      {/* {isAuthenticated() && <Sidebar role={getUserRole()} />} */}
      <Routes>  {/* ✅ No need to wrap in <Router> */}
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<PropertyListings />} />
        <Route path="/property" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} allowedRoles={["admin", "agent"]} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} allowedRoles={["admin", "agent"]} />} />
        <Route path="/users" element={<PrivateRoute element={<ManageUsers />} allowedRoles={["admin"]} />} />
        <Route path="/properties/add" element={<PrivateRoute element={<AddProperty />} allowedRoles={["admin", "agent"]} />} />
        <Route  path="/properties/update/:id" element={<PrivateRoute element={<UpdateProperty />} allowedRoles={["admin", "agent"]} />} />
        <Route path="/properties" element={<PrivateRoute element={<PropertyLists />} allowedRoles={["admin", "agent"]} />} />
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default App;
