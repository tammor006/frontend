import React, { useState } from "react";
import { Navbar, Nav, Container,NavDropdown,Offcanvas,Button,Row,Col} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "../style.css";
import { FaUser} from "react-icons/fa";
const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [openMenu, setOpenMenu] = useState(null); // For first-level categories
    const [openSubMenu, setOpenSubMenu] = useState(null); // For subcategories
  
  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  // Toggle subcategories
  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };


  return (
    <>
  
 <div className="d-laptop">
    
    <Navbar className=" bg-theme p-0 " expand="lg">
      <Container className="">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-btn" />
        
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-item px-3 py-3 p-0">Home</NavLink>
            {/* Projects Dropdown */}
            <NavDropdown title="Projects" className="dropdown-custom nav-item px-3 py-3 p-0">
              {/* Sub-dropdown inside Projects */}
              <NavDropdown title="Residential" drop="end" className="dropdown-submenu ">
                <NavDropdown.Item className="" href="#">Sub Project 1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="" href="#">Sub Project 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="" href="#">Sub Project 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown title="Installment" drop="end" className="dropdown-submenu ">
                <NavDropdown.Item className="" href="#">Sub Project 1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="" href="#">Sub Project 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="" href="#">Sub Project 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown title="Commercial" drop="end" className="dropdown-submenu ">
                <NavDropdown.Item className="" href="#">Sub Project 1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="" href="#">Sub Project 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="" href="#">Sub Project 3</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            
            <Nav.Link className="nav-item px-3 py-3 p-0" href="#">
              Construction
            </Nav.Link>
            <Nav.Link href="#" className="nav-item px-3 py-3 p-0">
              Contact Us
            </Nav.Link>
            <Nav.Link href="#" className="nav-item px-3 py-3 p-0">
              About Us
            </Nav.Link>

            <Nav.Link href="#" className="login-btn px-3 py-3 p-0">
              <FaUser className="login-icon" /> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <Container fluid className="px-lg-5 px-0 bg-white d-laptop">
          <Row>
          <Col lg={6} xl={6} md={6}>
          <div className="text-center py-3">
            <NavLink to="/">
            <img
                src="/images/logo.jpg"
                alt="Logo" className="logo"
              />
            </NavLink>
          </div>
          </Col>
            <Col lg={3} xl={3} md={3} className="p-0 br-1">
            <div className="d-flex py-4 px-4 float-end">
                      {/* <FaPhoneAlt stroke="#FAAF32" fill="#FAAF32" className="font-4 mt-2 mr-2"  /> */}
                      <img width={35} className="mt-2" height={35} src="/images/iphone.png" alt=""/>
                      <div className="mt-2">
                        <p className="font-0-size text-black-50">CALL US TODAY</p>
                        <p className="font-0">+(92-21) 000-000-000</p>
                      </div>
                    </div>
            </Col>
            <Col lg={3} xl={3} md={3} className="p-0">
            <div className="d-flex py-4 px-4 float-start ">
              <img className="mr-3 mt-2" width={35} height={35} src="/images/letter.png" alt=""/>
                      {/* <FaEnvelope stroke="#FAAF32" fill="#FAAF32" className="font-4 mt-2 mr-2" /> */}
                      <div className="mt-2">
                        <p className="font-0-size text-black-50">MAIL US TODAY</p>
                        <p className="font-0">info@gmail.com</p>
                      </div>
                    </div>
            </Col>
          </Row>
       </Container> 
 </div>
<div className="d-mobile">
      {/* Main Navbar */}
      <Navbar expand="md" className="custom-navbar">
        <Container fluid>
          {/* Left: Offcanvas Trigger (☰) */}
          <Button variant="link" className="menu-btn" onClick={handleShow}>
          <span></span>
      <span></span>
      <span></span>
            {/* <FaBars className="menu-icon" /> */}
          </Button>

          {/* Center: Logo */}
          <Navbar.Brand href="#" className="navbar-logo">
            <img src="/images/logo.jpg" alt="Logo" className="logo" />
          </Navbar.Brand>

          {/* Right: Login Button */}
          <Nav.Link href="#" className="login-icon">
            <img src="/images/account.png" alt="login" />
            {/* <FaUser className="login-icon" /> Login */}
          </Nav.Link>

        </Container>
      </Navbar>
      <div className="flex justify-between items-center bg-white">
      {/* Left Section: Contact Info */}
      <div className="container-fluid px-3">
        <div className="row">
          <div className="col-6 pr-0 br-1">
          <div className="d-block py-3 text-center">
          <img className="mb-2" width={30} src="/images/iphone.png" alt=""/>
                      
                        <p className="font-0-size text-black-50">CALL US TODAY</p>
                        <p className="font-0">+(92-21) 000-000-000</p>
                      </div>
          </div>
          
          <div className="col-6 pr-0">
          <div className="d-block py-3 text-center ">
          
                      {/* <FaEnvelope stroke="#FAAF32" fill="#FAAF32" className="font-4 mt-2 mr-2" /> */}
                      <img className="mb-2" width={30} src="/images/letter.png" alt=""/>
                        <p className="font-0-size text-black-50">MAIL US TODAY</p>
                        <p className="font-0">info@gmail.com</p>
                      
        </div>
          </div>
        </div>
       
        
      </div>
      </div>
      {/* Offcanvas Sidebar for Mobile Menu */}
      <Offcanvas show={show} onHide={handleClose} className="w-75" placement="start">
        <Offcanvas.Header className="bg-theme">
          <Offcanvas.Title className="mx-auto text-white">Menu</Offcanvas.Title>
          
        </Offcanvas.Header>
        <hr/>
        <Offcanvas.Body className=" p-0">
        <Nav className="flex-column">
        <ul className="p-0 text-lg font-medium space-y-3 mobile-menu-bar">
        {/* Sample Categories */}
        {[
            { title: "Home" },
          {
            title: "Projects",
            subcategories: [
              {
                title: "Residential",
                subsubcategories: ["Apartments", "Villas", "Condos"],
              },
              {
                title: "Commercial",
                subsubcategories: ["Offices", "Retail Spaces", "Warehouses"],
              },
              {
                title: "Installment",
                subsubcategories: ["Offices", "Retail Spaces", "Warehouses"],
              },
            ],
          },
          {
            title: "Construction",
            
          },
          { title: "Contact Us" },
          { title: "About Us" },
        ].map((item, index) => (
          <li key={index} className="border-b">
            <div className="flex justify-between items-center py-2 px-3">
              <span>{item.title}</span>
              {item.subcategories && (
                <button
                  className="text-xl"
                  onClick={() => toggleMenu(index)}
                >
                  {openMenu === index ? "−" : "+"}
                </button>
              )}
            </div>

            {/* Subcategories */}
            {openMenu === index && item.subcategories && (
              <ul className="ml-4 mt-2 space-y-2 text-sm">
                {item.subcategories.map((sub, subIndex) => (
                  <li key={subIndex} className="border-l pl-3">
                    <div className="flex justify-between">
                      <span>{sub.title}</span>
                      {sub.subsubcategories && (
                        <button
                          className="text-xl"
                          onClick={() => toggleSubMenu(subIndex)}
                        >
                          {openSubMenu === subIndex ? "−" : "+"}
                        </button>
                      )}
                    </div>

                    {/* Sub-subcategories */}
                    {openSubMenu === subIndex && sub.subsubcategories && (
                      <ul className="ml-4 mt-1 text-xs space-y-1 text-gray-600">
                        {sub.subsubcategories.map((subsub, i) => (
                          <li key={i}>{subsub}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
</div>
</>
  );
};

export default MyNavbar;