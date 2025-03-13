import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination,Grid } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

const Feature = () => {
    return (
      <><Container>
        <Row>
          <Col xs={12} sm={12} lg={12} md={12}>
          <div className="headline-item text-center mt-5">
            <h3>Top Featured
            <span class="head-red"> Projects</span>
            </h3>
          </div>
          </Col>
        </Row>
      </Container><div className="mt-5">
          <Swiper
            pagination={{
                clickable: true,
              }}
            spaceBetween={30}
             autoplay={{
               delay: 5000,
               disableOnInteraction: false,
             }}
            grid={{
                               rows: 3,
                               fill: "row",
                             }}
            modules={[Pagination,Grid,Autoplay]}
            className="featureSwiper container px-4"
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup:1,
              },
              768: {
                slidesPerView: 1,
                slidesPerGroup:1,
              },
              865:{
                slidesPerView:2,
                slidesPerGroup:2
              },
              1000:{
                slidesPerView:2,
                slidesPerGroup:2
              },
              1200:{
                slidesPerView:3,
                slidesPerGroup:3
              },
              1500:{
                slidesPerView:3,
                slidesPerGroup:3
              },
              1700:{
                slidesPerView:4,
                slidesPerGroup:4
              }
            }}
          >
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>

            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1" style={{borderRadius:"10px"}}>
                <li>
                    <figure style={{position:"relative",height:"200px"}}>
                    <img className="w-100 banner-image" src="/images/china-gold.jpg" style={{borderRadius:"10px"}} alt=""/>
                    <span className="top-tag">Hot</span>
                    <span className="tag">Installment</span>
                   
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                  PKR 19.3 Lakh to 1.22 Crore
                  </h5>
                </li>
                <li className="px-3">
                  <h5 className="project-heading">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 pb-4 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className=" py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                     Commercial Plots, Residential Plots
                  </p>
                </li>
                <li className="py-1 d-flex px-3">
                <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  3 Marla to 12 Marla
                  </p> 
                </li>
                <li className=" py-1 pb-3 d-flex px-3">
                <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                  <p className="ml-2 text-black font-0 text-bold icon-line-height">
                  Lahore, Main Boulevard Gulberg
                  </p> 
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>

          </Swiper>
        </div></>

   

        
    );
};
export default Feature;