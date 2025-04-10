import React, { useState } from "react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBottom from '../components/FooterBottom';

const PropertyDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
      <>
      
      
      <MyNavbar />
      <div className="container-fluid px-3 mt-2 bg-detail">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-5 col-sm-12 col-12">
            <div style={{height:"500px"}}>
          <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          height:"80%"
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg"alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
      style={{height:"20%"}}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/china-gold.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
          </div>
          <div className="detail-main text-center py-1 col-xl-5 col-lg-5 col-md-4 col-sm-12 col-12">
            <h1>4&5 Rooms Luxury Apartment</h1>
            <button className="detail-btn py-1">COMING SOON</button>
            <h3>Location: Gulshan e Iqbal, Near Mosamiyat</h3>
            <ul className="text-start detail-point">
              <li>Safe and secured Boundary wall project</li>
              <li>Safe and secured Boundary wall project</li>
              <li>Safe and secured Boundary wall project</li>
              <li>Safe and secured Boundary wall project</li>
              <li>Safe and secured Boundary wall project</li>
              <li>Safe and secured Boundary wall project</li>
              <li>Safe and secured Boundary wall project</li>
              <li>Safe and secured Boundary wall project</li>
              <li>Safe and secured Boundary wall project</li>
            </ul>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 mt-5">
          <img className="w-100" src="/images/maxresdefault.jpg" alt=""/>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 mt-5">
            <div className="form px-4">
              <div className="text-center py-2">
                <img src="img/profile (1).png" alt="" />
              </div>
              <h2 className="text-center">Fill The Form Below To Schedule Your Site Tour and Receive Project Details</h2>
              <form className=" py-3">
                <input type="text" className="form-control py-1 mb-2" id="" placeholder="Name" required />
                <input type="tel" className="form-control mb-2" id="" placeholder="Email" required />
                <input type="email" className="form-control mb-2" id="" placeholder="+92" required />
                <input type="text" className="form-control mb-2" id="" placeholder="Address" required />
                <div className=" mb-2">
                  <select className="form-select w-100" id="dropdown-troggle">
                    <option>Interested In</option>
                    <option value="1">4 ROOM</option>
                    <option value="2">5 ROOM</option>
                  </select>
                </div>
                <button type="submit" className="form-btn mt-2 py-2 w-100 bg-theme">YES I AM INTERESTED</button>

              </form>
            </div>
          </div>
        </div>
      </div><Footer />
      <FooterBottom /></>

    );};
    export default PropertyDetails;