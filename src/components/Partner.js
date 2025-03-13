import React from 'react';
import { Row,Col, NavLink} from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Grid,Autoplay} from 'swiper/modules';
import {FaMapMarkerAlt } from "react-icons/fa";
const Partner = () => {
    return (
      <div className="bg-white px-5">
        <Row>
          <Col xs={12} sm={12} lg={12} md={12}>
          <div className="headline-item text-center mt-5">
            <h3>Our
            <span class="head-red"> Agents</span>
            </h3>
          </div>
          </Col>
        </Row>
        <Row className="">
        <Swiper
            spaceBetween={30}
            grid={{
              rows: 2,
              fill: "row",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Grid,Autoplay]}
            className="agentSwiper px-5 py-5"
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup:1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup:2,
              },
              865:{
                slidesPerView:2,
                slidesPerGroup:2
              },
              1000:{
                slidesPerView:3,
                slidesPerGroup:3
              },
              1200:{
                slidesPerView:4,
                slidesPerGroup:4
              },
              1500:{
                slidesPerView:5,
                slidesPerGroup:5
              },
              1700:{
                slidesPerView:6,
                slidesPerGroup:6
              }
            }}
          >
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt="agent-logo"/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide>
                <NavLink>
                  <div className="agent-home-div">
                    <img src="/images/FalakNaz-01.jpg" className="agent-home-div-img" alt=""/>
                    <div className="agent-home-div-text">
                      <div className="agent-home-div-title">FalakNaz</div>
                        <div className="agent-home-div-label-svg">
                          <FaMapMarkerAlt className="agent-home-div-svg"></FaMapMarkerAlt>
                         <div className="agent-home-div-label">Lahore</div>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
            </SwiperSlide>
          </Swiper>
        </Row>
      </div>

   

        
    );
};
export default Partner;