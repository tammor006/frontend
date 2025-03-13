import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode} from 'swiper/modules';
const TopCategories = () => {
    return (
      <><Container>
        <Row>
          <Col xs={12} sm={12} lg={12} md={12}>
          <div className="headline-item text-center mt-5">
            <h3>Most Popular
            <span class="head-red"> Categories</span>
            </h3>
          </div>
          </Col>
        </Row>
      </Container><div className="mt-5">
          <Swiper
            
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper container px-4"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              865:{
                slidesPerView:2
              },
              1000:{
                slidesPerView:3
              },
              1200:{
                slidesPerView:3
              },
              1500:{
                slidesPerView:3
              },
              1700:{
                slidesPerView:3
              }
            }}
          >
            <SwiperSlide className="show-cursor"><div className="top-categories">
              <div className="icon">
              <img src="/images/apartment.png" alt="icon"/>
              </div>
              <div className="details">
                <h4>Appartments</h4>
                <p>
                  Apartment or Flat and Town house are styled developments.
                </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="top-categories">
              <div className="icon">
                <img src="/images/location-pin.png" alt="icon"/>
              </div>
              <div className="details">
                <h4>Plots</h4>
                <p>
                  Apartment or Flat and Town house are styled developments.
                </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="top-categories">
              <div className="icon">
              <img src="/images/home.png" alt="icon"/>
              </div>
              <div className="details">
                <h4>Installment</h4>
                <p>
                  Apartment or Flat and Town house are styled developments.
                </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="top-categories">
              <div className="icon">
              <img src="/images/store.png" alt="icon"/>
              </div>
              <div className="details">
                <h4>Commerical</h4>
                <p>
                  Apartment or Flat and Town house are styled developments.
                </p>
              </div>
            </div></SwiperSlide>


          </Swiper>
        </div></>

   

        
    );
};
export default TopCategories;