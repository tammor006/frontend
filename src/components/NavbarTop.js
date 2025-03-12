import React from "react";
import { Container, Row,Col,NavLink } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaTiktok } from "react-icons/fa";

const HeaderSection = () => {
  return (
    <>
    <Container fluid className="px-lg-5 px-0 bg-white d-laptop">
      <Row>
      <Col lg={6} xl={6} md={6}>
      <div className="text-center py-2">
        <NavLink to="/">
        <img
            src="/images/logo.jpg"
            alt="Logo" className="logo"
          />
        </NavLink>
      </div>
      </Col>
        <Col lg={3} xl={3} md={3} className="p-0 br-1">
        <div className="d-flex py-3 px-4 float-end">
                  <FaPhoneAlt stroke="#FAAF32" fill="#FAAF32" className="font-3 mt-2 mr-2"  />
                  <div>
                    <p className="font-0-size text-black-50">CALL US TODAY</p>
                    <p className="font-0">+(92-21) 000-000-000</p>
                  </div>
                </div>
        </Col>
        <Col lg={3} xl={3} md={3} className="p-0">
        <div className="d-flex py-3 px-4 float-start ">
                  <FaEnvelope stroke="#FAAF32" fill="#FAAF32" className="font-3 mt-2 mr-2" />
                  <div>
                    <p className="font-0-size text-black-50">MAIL US TODAY</p>
                    <p className="font-0">info@gmail.com</p>
                  </div>
                </div>
        </Col>
      </Row>
   </Container>
   <Container fluid className="px-lg-5 px-0 bg-theme d-mobile">
   <Row>
     
     
     <Col lg={6} xl={6} xs={12} sm={12} md={4}>
     <div className="d-flex j-content-center my-2">
       <NavLink>
       <FaInstagram className="text-white mx-3 font-1" />
       </NavLink>
       <NavLink>
       <FaFacebookF className="text-white mx-3 font-1" />
       </NavLink>
       <NavLink>
       <FaYoutube className="text-white mx-3 font-1" />
       </NavLink>
       <NavLink>
       <FaWhatsapp className="text-white mx-3 font-1" />
       </NavLink>
       <NavLink>
       <FaTiktok className="text-white mx-3 font-1" />
       </NavLink>
      </div>
     </Col>
   </Row>
</Container>
    </>
  
  );
};

export default HeaderSection;
