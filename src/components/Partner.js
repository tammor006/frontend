import React from 'react';
import { Row,Col} from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode,Autoplay} from 'swiper/modules';
const Partner = () => {
    return (
      <div className="bg-white px-5">
        <Row>
          <Col xs={12} sm={12} lg={12} md={12}>
          <div className="headline-item text-center mt-5">
            <h3>Our
            <span class="head-red"> Partners</span>
            </h3>
          </div>
          </Col>
        </Row>
        <Row className="">
        <Swiper
            spaceBetween={30}
            freeMode={true}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            //   }}
            loop={true}
            centeredSlides={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            modules={[FreeMode,Autoplay]}
            className="mySwiper px-5 py-5"
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              639: {
                slidesPerView: 2,
              },
              865:{
                slidesPerView:4
              },
              1000:{
                slidesPerView:6
              },
              1500:{
                slidesPerView:6
              },
              1700:{
                slidesPerView:6
              }
            }}
          >
            <SwiperSlide>
                <img src="/images/Domanin-01.jpg" width={100} height={100} alt="partner icon"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/FalakNaz-01.jpg" width={100} height={100} alt="partner icon"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/Elite-01.jpg" width={100} height={100} alt="partner icon"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/Firdouse-01.jpg" width={100} height={100} alt="partner icon"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/Shahmeer-01.jpg" width={100} height={100} alt="partner icon"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/Untitled-2-01.jpg" width={100} height={100} alt="partner icon"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/NB-01.jpg" width={100} height={100} alt="partner icon"/>
            </SwiperSlide>


          </Swiper>
        </Row>
      </div>

   

        
    );
};
export default Partner;