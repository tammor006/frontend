import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import { NavLink } from "react-router-dom";

const projects = [
  {id:1,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:2,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:3,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:4,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:5,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:6,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:7,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:8,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:9,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:10,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:11,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:12,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:13,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:14,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:15,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  
];

const chunkArray = (arr, size) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

const Feature = () => {
  const [activeRow, setActiveRow] = useState(null);
  const swiperRef = useRef([]);

  const handleMouseEnter = (index) => {
    setActiveRow(index);
    if (swiperRef.current[index]) {
      setTimeout(() => {
        swiperRef.current[index]?.autoplay.start(); // ✅ Ensures autoplay starts reliably
      }, 100);
    }
  };

  const handleMouseLeave = (index) => {
    setActiveRow(null);
    if (swiperRef.current[index]) {
      swiperRef.current[index]?.autoplay.stop();
    }
  };

  const rows = chunkArray(projects, 5);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} lg={12} md={12}>
            <div className="headline-item text-center mt-5">
              <h3>Top Featured <span className="head-red">Projects</span></h3>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="swiper-container mt-5">
        {rows.map((items, index) => (
          <div 
            key={index} 
            onMouseEnter={() => handleMouseEnter(index)} 
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Swiper
              spaceBetween={10}
              onSwiper={(swiper) => (swiperRef.current[index] = swiper)} // ✅ Store Swiper instance
              modules={[Mousewheel, Keyboard, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false, // ✅ Prevents autoplay from stopping permanently
                pauseOnMouseEnter: false, 
              }}
              className="swiper-row container px-4"
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                865: { slidesPerView: 2 },
                1000: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
                1500: { slidesPerView: 3 },
                1700: { slidesPerView: 4 }
              }}
            >
              {items.map((project, i) => (
                <SwiperSlide key={i} className="show-cursor swiper-slide">
                  <NavLink to="/property">
                    <ul className="list-unstyled p-0 bg-white br-1" style={{ borderRadius: "10px" }}>
                      <li>
                        <figure style={{ position: "relative", height: "200px" }}>
                          <img className="w-100 banner-image" src={project.image} style={{ borderRadius: "10px" }} alt="" />
                          <span className="top-tag">{project.popular}</span>
                          <span className="tag">{project.category}</span>
                        </figure>
                      </li>
                      <li className="px-3"><h5 className="project-heading">{project.price}</h5></li>
                      <li className="px-3"><h5 className="project-heading">{project.name}</h5></li>
                      <li className="px-3 pb-4 mt-2"><p className="project-explanation">{project.description}</p></li>
                      <li className="py-1 d-flex px-3">
                        <img height={30} width={30} src="/images/property.png" alt='' />
                        <p className="ml-2 text-black font-0 text-bold icon-line-height">{project.subCategory}</p>
                      </li>
                      <li className="py-1 d-flex px-3">
                        <img height={30} width={30} src="/images/area.png" alt='' />
                        <p className="ml-2 text-black font-0 text-bold icon-line-height">{project.area}</p>
                      </li>
                      <li className="py-1 pb-3 d-flex px-3">
                        <img height={30} width={30} src="/images/map.png" alt='' />
                        <p className="ml-2 text-black font-0 text-bold icon-line-height">{project.address}</p>
                      </li>
                    </ul>
                  </NavLink>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feature;
