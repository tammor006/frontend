import React from "react";
import { Container, Row,Col,NavLink } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaTiktok } from "react-icons/fa";

const HeaderSection = () => {
  return (
    <>
    <Container fluid className="px-lg-5 px-0 bg-theme d-laptop">
      <Row>
        <Col lg={4} xl={4} xs={6} sm={6} md={4}>
        <div className="d-flex f-right my-2">
           <FaPhoneAlt className="font-0 text-white mt-1 mr-1" />
           <p className="font-0 text-white">CALL US TODAY:+(92-21) 111-511-611</p>
         </div>
        </Col>
        <Col lg={4} xl={4} xs={6} sm={6} md={4}>
        <div className="d-flex f-right my-2">
           <FaEnvelope className="font-0 text-white mt-1 mr-1" />
           <p className="font-0 text-white">MAIL US TODAY:info@gmail.com</p>
           
         </div>
        </Col>
        <Col lg={4} xl={4} xs={12} sm={12} md={4}>
        <div className="d-flex f-right my-2">
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
