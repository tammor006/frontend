import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import PropertyBrowser from "../components/PropertyBrowser";
import Feature from "../components/Feature";
import ConstructionHome from "../components/ConstructionHome";
import OfferSection from "../components/Offers";
import TeamSection from "../components/team";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBottom from '../components/FooterBottom';

const Home = () => {
  return (
    <>
      <MyNavbar />
      <HeroCarousel />
      <PropertyBrowser/>
      <Feature/>
      <ConstructionHome/>
      <OfferSection/>
      <TeamSection/>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Home;