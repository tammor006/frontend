import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import PropertyBrowser from "../components/PropertyBrowser";
import Partner from "../components/Partner";
import Feature from "../components/Feature";
import TopCategories from "../components/TopCategories";
import ConstructionHome from "../components/ConstructionHome";

const Home = () => {
  return (
    <>
    
      <HeroCarousel />
      <TopCategories/>
      <PropertyBrowser/>
      <Feature/>
      <ConstructionHome/>
      <Partner/>
    </>
  );
};

export default Home;