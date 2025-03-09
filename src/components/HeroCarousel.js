import React from "react";
import { Carousel } from "react-bootstrap";
// import "../styles.css"; // Import custom styles if needed

const HeroCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100 hero-image" src="/images/mainbg.jpg" alt="Slide 1" />
        <Carousel.Caption>
          <h1>Find Your Dream Home</h1>
          <p>Discover top properties in your area.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 hero-image" src="/images/mainbg.jpg" alt="Slide 2" />
        <Carousel.Caption>
          <h1>Luxury Living Spaces</h1>
          <p>Modern designs with premium amenities.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 hero-image" src="/images/mainbg.jpg" alt="Slide 3" />
        <Carousel.Caption>
          <h1>Best Deals in the Market</h1>
          <p>Find affordable properties tailored for you.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;