import React from 'react';
import { FaHome, FaHandshake, FaChartLine, FaUserTie} from 'react-icons/fa';
import { GiHouseKeys } from 'react-icons/gi';

const AboutUs = () => {
  return (
    <div className="about-us-page real-estate-theme">
      {/* Hero Section */}
      <section className="about-hero real-estate-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>About Our Real Estate Agency</h1>
              <p className="lead">Helping you find the perfect home since 2005</p>
              <button className="btn btn-primary btn-lg mt-3">Meet Our Agents</button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Story</h2>
              <div className="divider"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <p className="story-text">
                Founded in 2005 by John and Sarah Thompson, our agency began with a simple mission: 
                to make the home buying and selling process transparent, stress-free, and rewarding.
              </p>
              <p className="story-text">
                What started as a small local office has grown into one of the region's most trusted 
                real estate networks, serving over 5,000 happy clients and managing $1.2B in property sales.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="milestones">
                <div className="milestone-item">
                  <div className="milestone-icon">
                    <GiHouseKeys />
                  </div>
                  <div className="milestone-content">
                    <h4>2005</h4>
                    <p>Founded with just 3 agents</p>
                  </div>
                </div>
                <div className="milestone-item">
                  <div className="milestone-icon">
                    <GiHouseKeys />
                  </div>
                  <div className="milestone-content">
                    <h4>2012</h4>
                    <p>Expanded to 3 offices in the metro area</p>
                  </div>
                </div>
                <div className="milestone-item">
                  <div className="milestone-icon">
                    <GiHouseKeys />
                  </div>
                  <div className="milestone-content">
                    <h4>2020</h4>
                    <p>Named "Best Real Estate Agency" by City Magazine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Approach</h2>
              <div className="divider"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="value-card">
                <div className="value-icon">
                  <FaHome />
                </div>
                <h4>Local Experts</h4>
                <p>We know every neighborhood intimately and can find the perfect match for your lifestyle.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="value-card">
                <div className="value-icon">
                  <FaHandshake />
                </div>
                <h4>Client Focused</h4>
                <p>Your needs always come first - we listen carefully and respond quickly.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="value-card">
                <div className="value-icon">
                  <FaChartLine />
                </div>
                <h4>Market Savvy</h4>
                <p>We provide data-driven advice to help you make informed decisions.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="value-card">
                <div className="value-icon">
                  <FaUserTie />
                </div>
                <h4>Professional</h4>
                <p>Licensed, experienced agents with proven track records.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
     

      {/* Stats Section */}
      <section className="stats-section py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Track Record</h2>
              <div className="divider-light"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3 mb-4">
              <div className="stat-item">
                <h3>18</h3>
                <p>Years in Business</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="stat-item">
                <h3>5K+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="stat-item">
                <h3>$1.2B</h3>
                <p>Property Sold</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="stat-item">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">What Our Clients Say</h2>
              <div className="divider"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="quote">"</div>
                <p className="testimonial-text">
                Working with this team was a game-changer. They found us the perfect family home in just 3 weeks!
                </p>
                <div className="client-info">
                  <h5>The Anderson Family</h5>
                  <p>Homebuyers, 2023</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="quote">"</div>
                <p className="testimonial-text">
                Got 15% over asking price for our condo thanks to their marketing strategy and negotiation skills.
                </p>
                <div className="client-info">
                  <h5>James &amp; Lisa Wong</h5>
                  <p>Home Sellers, 2022</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="quote">"</div>
                <p className="testimonial-text">
                As first-time buyers, we were nervous, but our agent guided us through every step with patience.
                </p>
                <div className="client-info">
                  <h5>Emily Rodriguez</h5>
                  <p>First-Time Buyer, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;