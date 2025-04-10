import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBottom from '../components/FooterBottom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <><MyNavbar /><div className="contact-page container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4">Contact Us</h1>
            <p className="lead">We'd love to hear from you</p>
          </div>
        </div>

        <div className="row">
          {/* Company Information */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="company-info card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title mb-4">Our Information</h3>

                <div className="contact-item mb-4">
                  <div className="icon-box">
                    <FaMapMarkerAlt className="react-icon" />
                  </div>
                  <div>
                    <h5>Address</h5>
                    <p>123 Business Avenue, Suite 456<br />New York, NY 10001, USA</p>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <div className="icon-box">
                    <FaPhone className="react-icon" />
                  </div>
                  <div>
                    <h5>Phone</h5>
                    <p>+1 (555) 123-4567<br />+1 (555) 765-4321</p>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <div className="icon-box">
                    <FaEnvelope className="react-icon" />
                  </div>
                  <div>
                    <h5>Email</h5>
                    <p>info@company.com<br />support@company.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-box">
                    <FaClock className="react-icon" />
                  </div>
                  <div>
                    <h5>Working Hours</h5>
                    <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 3pm<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form card shadow-sm">
              <div className="card-body">
                <h3 className="card-title mb-4">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address*</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="subject" className="form-label">Subject*</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Your Message*</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg">
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><Footer /><FooterBottom /></>
  );
};

export default ContactPage;