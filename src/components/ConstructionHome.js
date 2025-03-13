import React from 'react';
import { Container,Row,Col, NavLink} from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode,Navigation} from 'swiper/modules';
import {FaAngleRight } from "react-icons/fa";
const ConstructionHome = () => {
    return (
      <><Container>
        <Row>
          <Col xs={12} sm={12} lg={12} md={12}>
          <div className="headline-item text-center mt-5">
            <h3>Popular
            <span class="head-red"> Construction</span>
            </h3>
          </div>
          </Col>
        </Row>
      </Container><div className="mt-5">
          <Swiper
             navigation={true}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode,Navigation]}
            className="popularContructionSwiper container-fluid px-4"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              865:{
                slidesPerView:3
              },
              1000:{
                slidesPerView:4
              },
              1200:{
                slidesPerView:6
              },
              1500:{
                slidesPerView:7
              },
              1700:{
                slidesPerView:8
              }
            }}
          >
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
            <SwiperSlide className="show-cursor">
                <NavLink className="popular-contruction bg-white">
                    <h4 className="popular-contruction-heading">3 Marla Construction Cost</h4>
                    <div className="popular-contruction-div">Double Story</div>
                    <div className="popular-contruction-div">1,215 sq. ft.</div>
                    <div className="popular-contruction-button-div mt-2">
                        <span>Details</span>
                        <FaAngleRight className="popular-contruction-button-svg mt-1"></FaAngleRight>
                    </div>

            </NavLink>
            </SwiperSlide>
          </Swiper>
        </div></>

   

        
    );
};
export default ConstructionHome;