import React from 'react';
import { GiHouseKeys } from 'react-icons/gi';
import OfferSection from "../components/Offers";
import TeamSection from "../components/team";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBottom from '../components/FooterBottom';

const AboutUs = () => {
  return (
    <><MyNavbar />
<div className="contact-page container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4">About Us</h1>
            <p className="lead">Helping you find the perfect home</p>
          </div>
        </div>
        <OfferSection /><TeamSection />
    </div>
    </div>

     <Footer /><FooterBottom /></>
  );
};

export default AboutUs;