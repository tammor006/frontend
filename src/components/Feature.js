import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FaBed,FaMapMarkerAlt } from "react-icons/fa";
import { FreeMode, Pagination } from 'swiper/modules';
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
            freeMode={true}
            modules={[FreeMode,Pagination]}
            className="mySwiper container px-4"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              865:{
                slidesPerView:2
              },
              1000:{
                slidesPerView:2
              },
              1200:{
                slidesPerView:3
              },
              1500:{
                slidesPerView:3
              },
              1700:{
                slidesPerView:4
              }
            }}
          >
            <SwiperSlide className="show-cursor">
            
            <NavLink to="/property">
              <ul className="list-unstyled p-0 bg-white br-1">
                <li>
                    <figure style={{position:"relative"}}>
                    <img className="w-100" src="/images/china-gold.jpg" alt=""/>
                    <span className="tag">Installment</span>
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading mt-3">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className="project-room mt-4  py-2 d-flex px-3">
                  <FaBed className="font-2 text-theme"></FaBed>
                  <p className="ml-3">
                    Lorem ipsum dolor sit amet cons
                  </p>
                </li>
                <li className="project-room py-2 d-flex px-3">
                  <FaMapMarkerAlt className="font-2 text-theme"></FaMapMarkerAlt>
                  <p className="ml-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p> 
                </li>
                <li className="px-3">
                  <img className="w-100" src="/images/map.jpeg" alt=""/>
                </li>
                <li className="text-center px-3 pb-3">
                  <a href="/" className="btn btn-lg w-100 mt-3">GET DETAILS
                  </a>
                </li>
             </ul>
             </NavLink>
              
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            <ul className="list-unstyled p-0 bg-white br-1">
                <li>
                    <figure style={{position:"relative"}}>
                    <img className="w-100" src="/images/china-gold.jpg" alt=""/>
                    <span className="tag">Installment</span>
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading mt-3">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className="project-room mt-4  py-2 d-flex px-3">
                  <FaBed className="font-2 text-theme"></FaBed>
                  <p className="ml-3">
                    Lorem ipsum dolor sit amet cons
                  </p>
                </li>
                <li className="project-room py-2 d-flex px-3">
                  <FaMapMarkerAlt className="font-2 text-theme"></FaMapMarkerAlt>
                  <p className="ml-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p> 
                </li>
                <li className="px-3">
                  <img className="w-100" src="/images/map.jpeg" alt=""/>
                </li>
                <li className="text-center px-3 pb-3">
                  <a href="/" className="btn btn-lg w-100 mt-3">GET DETAILS
                  </a>
                </li>
             </ul>  
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            <ul className="list-unstyled p-0 bg-white br-1">
                <li>
                    <figure style={{position:"relative"}}>
                    <img className="w-100" src="/images/china-gold.jpg" alt=""/>
                    <span className="tag">Installment</span>
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading mt-3">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className="project-room mt-4  py-2 d-flex px-3">
                  <FaBed className="font-2 text-theme"></FaBed>
                  <p className="ml-3">
                    Lorem ipsum dolor sit amet cons
                  </p>
                </li>
                <li className="project-room py-2 d-flex px-3">
                  <FaMapMarkerAlt className="font-2 text-theme"></FaMapMarkerAlt>
                  <p className="ml-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p> 
                </li>
                <li className="px-3">
                  <img className="w-100" src="/images/map.jpeg" alt=""/>
                </li>
                <li className="text-center px-3 pb-3">
                  <a href="/" className="btn btn-lg w-100 mt-3">GET DETAILS
                  </a>
                </li>
             </ul>  
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            <ul className="list-unstyled p-0 bg-white br-1">
                <li>
                    <figure style={{position:"relative"}}>
                    <img className="w-100" src="/images/china-gold.jpg" alt=""/>
                    <span className="tag">Installment</span>
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading mt-3">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className="project-room mt-4  py-2 d-flex px-3">
                  <FaBed className="font-2 text-theme"></FaBed>
                  <p className="ml-3">
                    Lorem ipsum dolor sit amet cons
                  </p>
                </li>
                <li className="project-room py-2 d-flex px-3">
                  <FaMapMarkerAlt className="font-2 text-theme"></FaMapMarkerAlt>
                  <p className="ml-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p> 
                </li>
                <li className="px-3">
                  <img className="w-100" src="/images/map.jpeg" alt=""/>
                </li>
                <li className="text-center px-3 pb-3">
                  <a href="/" className="btn btn-lg w-100 mt-3">GET DETAILS
                  </a>
                </li>
             </ul>  
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            <ul className="list-unstyled p-0 bg-white br-1">
                <li>
                    <figure style={{position:"relative"}}>
                    <img className="w-100" src="/images/china-gold.jpg" alt=""/>
                    <span className="tag">Installment</span>
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading mt-3">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className="project-room mt-4  py-2 d-flex px-3">
                  <FaBed className="font-2 text-theme"></FaBed>
                  <p className="ml-3">
                    Lorem ipsum dolor sit amet cons
                  </p>
                </li>
                <li className="project-room py-2 d-flex px-3">
                  <FaMapMarkerAlt className="font-2 text-theme"></FaMapMarkerAlt>
                  <p className="ml-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p> 
                </li>
                <li className="px-3">
                  <img className="w-100" src="/images/map.jpeg" alt=""/>
                </li>
                <li className="text-center px-3 pb-3">
                  <a href="/" className="btn btn-lg w-100 mt-3">GET DETAILS
                  </a>
                </li>
             </ul>  
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            <ul className="list-unstyled p-0 bg-white br-1">
                <li>
                    <figure style={{position:"relative"}}>
                    <img className="w-100" src="/images/china-gold.jpg" alt=""/>
                    <span className="tag">Installment</span>
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading mt-3">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className="project-room mt-4  py-2 d-flex px-3">
                  <FaBed className="font-2 text-theme"></FaBed>
                  <p className="ml-3">
                    Lorem ipsum dolor sit amet cons
                  </p>
                </li>
                <li className="project-room py-2 d-flex px-3">
                  <FaMapMarkerAlt className="font-2 text-theme"></FaMapMarkerAlt>
                  <p className="ml-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p> 
                </li>
                <li className="px-3">
                  <img className="w-100" src="/images/map.jpeg" alt=""/>
                </li>
                <li className="text-center px-3 pb-3">
                  <a href="/" className="btn btn-lg w-100 mt-3">GET DETAILS
                  </a>
                </li>
             </ul>  
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            <ul className="list-unstyled p-0 bg-white br-1">
                <li>
                    <figure style={{position:"relative"}}>
                    <img className="w-100" src="/images/china-gold.jpg" alt=""/>
                    <span className="tag">Installment</span>
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading mt-3">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className="project-room mt-4  py-2 d-flex px-3">
                  <FaBed className="font-2 text-theme"></FaBed>
                  <p className="ml-3">
                    Lorem ipsum dolor sit amet cons
                  </p>
                </li>
                <li className="project-room py-2 d-flex px-3">
                  <FaMapMarkerAlt className="font-2 text-theme"></FaMapMarkerAlt>
                  <p className="ml-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p> 
                </li>
                <li className="px-3">
                  <img className="w-100" src="/images/map.jpeg" alt=""/>
                </li>
                <li className="text-center px-3 pb-3">
                  <a href="/" className="btn btn-lg w-100 mt-3">GET DETAILS
                  </a>
                </li>
             </ul>  
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            <ul className="list-unstyled p-0 bg-white br-1">
                <li>
                    <figure style={{position:"relative"}}>
                    <img className="w-100" src="/images/china-gold.jpg" alt=""/>
                    <span className="tag">Installment</span>
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading mt-3">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className="project-room mt-4  py-2 d-flex px-3">
                  <FaBed className="font-2 text-theme"></FaBed>
                  <p className="ml-3">
                    Lorem ipsum dolor sit amet cons
                  </p>
                </li>
                <li className="project-room py-2 d-flex px-3">
                  <FaMapMarkerAlt className="font-2 text-theme"></FaMapMarkerAlt>
                  <p className="ml-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p> 
                </li>
                <li className="px-3">
                  <img className="w-100" src="/images/map.jpeg" alt=""/>
                </li>
                <li className="text-center px-3 pb-3">
                  <a href="/" className="btn btn-lg w-100 mt-3">GET DETAILS
                  </a>
                </li>
             </ul>  
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            <ul className="list-unstyled p-0 bg-white br-1">
                <li>
                    <figure style={{position:"relative"}}>
                    <img className="w-100" src="/images/china-gold.jpg" alt=""/>
                    <span className="tag">Installment</span>
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading mt-3">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className="project-room mt-4  py-2 d-flex px-3">
                  <FaBed className="font-2 text-theme"></FaBed>
                  <p className="ml-3">
                    Lorem ipsum dolor sit amet cons
                  </p>
                </li>
                <li className="project-room py-2 d-flex px-3">
                  <FaMapMarkerAlt className="font-2 text-theme"></FaMapMarkerAlt>
                  <p className="ml-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p> 
                </li>
                <li className="px-3">
                  <img className="w-100" src="/images/map.jpeg" alt=""/>
                </li>
                <li className="text-center px-3 pb-3">
                  <a href="/" className="btn btn-lg w-100 mt-3">GET DETAILS
                  </a>
                </li>
             </ul>  
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            <ul className="list-unstyled p-0 bg-white br-1">
                <li>
                    <figure style={{position:"relative"}}>
                    <img className="w-100" src="/images/china-gold.jpg" alt=""/>
                    <span className="tag">Installment</span>
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading mt-3">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className="project-room mt-4  py-2 d-flex px-3">
                  <FaBed className="font-2 text-theme"></FaBed>
                  <p className="ml-3">
                    Lorem ipsum dolor sit amet cons
                  </p>
                </li>
                <li className="project-room py-2 d-flex px-3">
                  <FaMapMarkerAlt className="font-2 text-theme"></FaMapMarkerAlt>
                  <p className="ml-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p> 
                </li>
                <li className="px-3">
                  <img className="w-100" src="/images/map.jpeg" alt=""/>
                </li>
                <li className="text-center px-3 pb-3">
                  <a href="/" className="btn btn-lg w-100 mt-3">GET DETAILS
                  </a>
                </li>
             </ul>  
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
            <ul className="list-unstyled p-0 bg-white br-1">
                <li>
                    <figure style={{position:"relative"}}>
                    <img className="w-100" src="/images/china-gold.jpg" alt=""/>
                    <span className="tag">Installment</span>
                    </figure>
                
                </li>
                <li className="px-3">
                  <h5 className="project-heading mt-3">
                   CHINA GOLD PARK MAIL
                  </h5>
                </li>
                <li className="px-3 mt-2">
                  <p className="project-explanation">
                    Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us 
                  </p>
                </li>
                <li className="project-room mt-4  py-2 d-flex px-3">
                  <FaBed className="font-2 text-theme"></FaBed>
                  <p className="ml-3">
                    Lorem ipsum dolor sit amet cons
                  </p>
                </li>
                <li className="project-room py-2 d-flex px-3">
                  <FaMapMarkerAlt className="font-2 text-theme"></FaMapMarkerAlt>
                  <p className="ml-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p> 
                </li>
                <li className="px-3">
                  <img className="w-100" src="/images/map.jpeg" alt=""/>
                </li>
                <li className="text-center px-3 pb-3">
                  <a href="/" className="btn btn-lg w-100 mt-3">GET DETAILS
                  </a>
                </li>
             </ul>  
            </SwiperSlide>
            


          </Swiper>
        </div></>

   

        
    );
};
export default Feature;