import React from 'react';
import { Navbar, Nav, Container,NavDropdown,Offcanvas,Button, NavLink } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaTiktok,FaPinterest,FaAngleRight } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <div  className="container-fluid bg-dark text-white-50 py-0 px-sm-3 px-lg-5 mt-5">
    <div className="row pt-5">
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-5">
        <Navbar.Brand href="/"> <img
            src="/images/logo-dark.png"
            alt="Logo" className="logo"
          /></Navbar.Brand>
           
            <h6 class="text-white text-left text-uppercase mt-4 mb-3">Follow Us</h6>
            <div class="text-left d-block">
                
                    <a href="/" className="btn btn-outline-primary btn-square mr-2 border-outline" target="_blank">
                         <FaInstagram className="text-theme mx-3 font-3" />
                    </a>
                    <a href="/" className="btn btn-outline-primary btn-square mr-2 mt-1 border-outline" target="_blank">
                    <FaFacebookF className="text-theme mx-3 font-3" />
                    </a>
                    <a href="/" class="btn btn-outline-primary btn-square mr-2 mt-1 border-outline" target="_blank">
                    <FaYoutube className="text-theme mx-3 font-3" />
                    </a>
                    <a href="/" className="btn btn-outline-primary btn-square mr-2 mt-1 border-outline" target="_blank">
                    <FaTiktok className="text-theme mx-3 font-3" />
                    </a>
                    <a href="/" className="btn btn-outline-primary btn-square mr-2 mt-1 border-outline" target="_blank">
                    <FaWhatsapp className="text-theme mx-3 font-3" />
                    </a>
                    <a href="/" className="btn btn-outline-primary btn-square mr-2 mt-1 border-outline" target="_blank">
                    <FaPinterest className="text-theme mx-3 font-3" />
                    </a>
                
               
                
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h5 class="text-white text-uppercase mb-4">Our Links</h5>
            <div class="d-flex flex-column justify-content-start">
                <a class="text-white-50 my-2 font-2" href="/"><FaAngleRight class="mr-2"></FaAngleRight>Home</a>
                <a class="text-white-50 my-2 font-2" href="/"><FaAngleRight class="mr-2"></FaAngleRight>Construction</a>
                <a class="text-white-50 my-2 font-2" href="/"><FaAngleRight class="mr-2"></FaAngleRight>Contact Us</a>
                <a class="text-white-50 my-2 font-2" href="/"><FaAngleRight class="mr-2"></FaAngleRight>About Us</a>
            </div>
        </div> 
        <div className="col-lg-3 col-md-6 mb-5">
            <h5 class="text-white text-uppercase mb-4">Our Services</h5>
            <div class="d-flex flex-column justify-content-start">
                <a class="text-white-50 my-2 font-2" href="/"><FaAngleRight class="mr-2"></FaAngleRight>Residential</a>
                <a class="text-white-50 my-2 font-2" href="/"><FaAngleRight class="mr-2"></FaAngleRight>Installment</a>
                <a class="text-white-50 my-2 font-2" href="/"><FaAngleRight class="mr-2"></FaAngleRight>Commercial</a>
            </div>
        </div> 
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-5">
            <h5 className="text-white text-uppercase mb-4">Contact Us</h5>
           
            <p className="font-1 mb-3 text-white-50 text-left"><FaPhoneAlt className="fa fa-phone-alt mr-2"></FaPhoneAlt>CALL US:+(92-21) 111-511-611</p>
            
           
            <p className="font-1 mb-3 text-white-50 text-left"><FaEnvelope className="fa fa-envelope mr-2"></FaEnvelope>Mail Us:info@gmail.com</p>
            
           
            <h6 className="text-white text-left text-uppercase mt-4 mb-3">Newsletter</h6>
            <div className="w-100 text-left">
                <div className="input-group">
                    <input type="text" className="form-control border-light p-2" placeholder="Your Email"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary bg-theme px-3 py-2">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
       

  );
};

export default Footer;