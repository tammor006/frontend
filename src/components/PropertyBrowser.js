import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode} from 'swiper/modules';
import { Container,Row,Col} from 'react-bootstrap';

const PropertyBrowser = () => {
  const categories = [
        {
          title: "Homes",
          icon: "/images/apartment.png",
          subcategories: {
            Popular: [
              { label: "5 Marla Houses", link: "/homes/5marla" },
              { label: "10 Marla Houses", link: "/homes/10marla" },
              { label: "3 Marla Houses", link: "/homes/3marla" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
              { label: "New Houses", link: "/homes/new" },
    
            ],
            Type: [
              { label: "Apartments", link: "/homes/apartments" },
              { label: "Villas", link: "/homes/villas" },
              { label: "Apartments", link: "/homes/apartments" },
              { label: "Villas", link: "/homes/villas" },
    
              { label: "Apartments", link: "/homes/apartments" },
              { label: "Villas", link: "/homes/villas" },
              { label: "Apartments", link: "/homes/apartments" },
              { label: "Villas", link: "/homes/villas" },
              { label: "Apartments", link: "/homes/apartments" },
              { label: "Villas", link: "/homes/villas" },
              { label: "Apartments", link: "/homes/apartments" },
              { label: "Villas", link: "/homes/villas" },
              { label: "Apartments", link: "/homes/apartments" },
              { label: "Villas", link: "/homes/villas" },
              { label: "Apartments", link: "/homes/apartments" },
              { label: "Villas", link: "/homes/villas" },
              { label: "Apartments", link: "/homes/apartments" },
              { label: "Villas", link: "/homes/villas" },
    
            ],
            Area: [
              { label: "Lahore", link: "/homes/lahore" },
              { label: "Karachi", link: "/homes/karachi" },
              { label: "Lahore", link: "/homes/lahore" },
              { label: "Karachi", link: "/homes/karachi" },
              { label: "Lahore", link: "/homes/lahore" },
              { label: "Karachi", link: "/homes/karachi" },
              { label: "Lahore", link: "/homes/lahore" },
              { label: "Karachi", link: "/homes/karachi" },
              { label: "Lahore", link: "/homes/lahore" },
              { label: "Karachi", link: "/homes/karachi" },
              { label: "Lahore", link: "/homes/lahore" },
              { label: "Karachi", link: "/homes/karachi" },
            ],
          },
        },
        {
          title: "Plots",
          icon: "/images/location-pin.png",
          subcategories: {
            Popular: [
              { label: "5 Marla Plots", link: "/plots/5marla" },
              { label: "10 Marla Plots", link: "/plots/10marla" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
            ],
            Type: [
              { label: "Residential", link: "/plots/residential" },
              { label: "Commercial", link: "/plots/commercial" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
            ],
            Area: [
              { label: "Islamabad", link: "/plots/islamabad" },
              { label: "Rawalpindi", link: "/plots/rawalpindi" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
            ],
          },
        },
        {
          title: "Commercial",
          icon: "/images/store.png",
          subcategories: {
            Popular: [
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
            ],
            Type: [
              { label: "Retail", link: "/commercial/retail" },
              { label: "Warehouses", link: "/commercial/warehouses" },
              { label: "Retail", link: "/commercial/retail" },
              { label: "Warehouses", link: "/commercial/warehouses" },
              { label: "Retail", link: "/commercial/retail" },
              { label: "Warehouses", link: "/commercial/warehouses" },
              { label: "Retail", link: "/commercial/retail" },
              { label: "Warehouses", link: "/commercial/warehouses" },
              { label: "Retail", link: "/commercial/retail" },
              { label: "Warehouses", link: "/commercial/warehouses" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
            ],
            Area: [
              { label: "Faisalabad", link: "/commercial/faisalabad" },
              { label: "Multan", link: "/commercial/multan" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
              { label: "Small Offices", link: "/commercial/offices" },
              { label: "Running Shops", link: "/commercial/shops" },
            ],
          },
        },
       ];

  // State to track active tab for each category
  const [activeTabs, setActiveTabs] = useState(
    categories.map((category) => ({
      title: category.title,
      activeTab: Object.keys(category.subcategories)[0], // Default to first tab
    }))
  );

  // Create refs for each slider
  const sliderRefs = useRef({});

  const handleTabChange = (categoryTitle, tab) => {
    setActiveTabs((prevTabs) =>
      prevTabs.map((tabObj) =>
        tabObj.title === categoryTitle ? { ...tabObj, activeTab: tab } : tabObj
      )
    );

    // Reset slider to the first slide when tab changes
    if (sliderRefs.current[categoryTitle]) {
      sliderRefs.current[categoryTitle].slickGoTo(0);
    }
  };
  const PrevArrow = ({ onClick }) => {
    return <button className="slick-prev" onClick={onClick}>❮</button>;
  };
  
  // Custom Next Arrow
  const NextArrow = ({ onClick }) => {
    return <button className="slick-next" onClick={onClick}>❯</button>;
  };
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 3,
        },
      },
    ],
  };

  return (
    <><Container>
      <Row>
        <Col xs={12} sm={12} lg={12} md={12}>
          <div className="headline-item text-center mt-5">
            <h3>Browse
              <span class="head-red"> Properties</span>
            </h3>
          </div>
        </Col>
      </Row>
    </Container><div className="property-container">

        <div className="property-cards">

          <Swiper
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper container px-4"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              865: {
                slidesPerView: 2
              },
              1000: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              },
              1500: {
                slidesPerView: 3
              },
              1700: {
                slidesPerView: 4
              }
            }}
          >
            {categories.map((category, index) => {
              const categoryTab = activeTabs.find((tab) => tab.title === category.title);
              return (
                <SwiperSlide className="show-cursor">
                  <div key={index} className="property-card">
                    <h3 className="property-card-title">
                      <img height={40} width={40} src={category.icon} alt=""/> {category.title}
                    </h3>

                    <div className="property-tabs">
                      {Object.keys(category.subcategories).map((tab, i) => (
                        <button
                          key={i}
                          onClick={() => handleTabChange(category.title, tab)}
                          className={`property-tab ${categoryTab.activeTab === tab ? "active" : ""}`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Slick Slider with ref */}
                    
                    <Slider
                      ref={(slider) => (sliderRefs.current[category.title] = slider)}
                      {...settings}
                      className="property-slider my-2"
                    >
                      {category.subcategories[categoryTab.activeTab].map((option, i) => (
                        <div key={i} className="property-option">
                          <Link to={option.link} className="option-link">
                            {option.label}
                          </Link>
                        </div>
                      ))}
                    </Slider>
                    
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div></>
  );
};

export default PropertyBrowser;