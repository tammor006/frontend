import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import PropertyBrowser from "../components/PropertyBrowser";
import Feature from "../components/Feature";
import ConstructionHome from "../components/ConstructionHome";

const Home = () => {
  return (
    <>
    
      <HeroCarousel />
      <PropertyBrowser/>
      <Feature/>
      <ConstructionHome/>

    </>
  );
};

export default Home;