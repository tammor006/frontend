import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import TopCategories from "../components/TopCategories";
import Partner from "../components/Partner";
import Feature from "../components/Feature";

const Home = () => {
  return (
    <>
    
      <HeroCarousel />
      <TopCategories/>
      <Feature/>
      <Partner/>
    </>
  );
};

export default Home;