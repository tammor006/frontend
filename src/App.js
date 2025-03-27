import React from 'react';
import { Routes, Route } from 'react-router-dom';  // ❌ Remove BrowserRouter
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import PropertyListings from './pages/PropertyListing';
import PropertyDetails from './pages/PropertyDetails';
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterBottom from './components/FooterBottom';

const App = () => {
  return (
    <>
      <Preloader />
      <MyNavbar />
      <Routes>  {/* ✅ No need to wrap in <Router> */}
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<PropertyListings />} />
        <Route path="/property" element={<PropertyDetails />} />
      </Routes>
      <Footer />
      <FooterBottom />
      <ScrollToTop />
    </>
  );
};

export default App;
