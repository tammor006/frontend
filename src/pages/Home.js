import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import PropertyBrowser from "../components/PropertyBrowser";
import Feature from "../components/Feature";
import ConstructionHome from "../components/ConstructionHome";
import OfferSection from "../components/Offers";
import TeamSection from "../components/team";

const Home = () => {
  return (
    <>
    
      <HeroCarousel />
      <PropertyBrowser/>
      <Feature/>
      <ConstructionHome/>
      <OfferSection/>
      <TeamSection/>

    </>
  );
};

export default Home;