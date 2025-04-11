// PropertyDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../components/axiosInstance";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom";
import { FaMapMarkerAlt, FaHome, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(`/properties/public/${id}`);
        debugger
        setProperty(res.data);
      } catch (err) {
        console.error("Error fetching property details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!property) return <div className="text-center py-5 text-danger">Property not found.</div>;

  return (
    <>
      <MyNavbar />
      <div className="container-fluid my-5 px-3">
        <div className="row align-items-stretch">
          {/* Image */}
          <div className="col-md-4 px-0 d-flex">
            <img
              src={property.images[0] || "https://via.placeholder.com/400x300"}
              alt={property.name}
              className="img-fluid  shadow w-100 object-fit-cover"
              style={{ height: "100%", minHeight: "300px" }}
            />
          </div>

          {/* Property Details */}
          <div className="col-md-3 bg-white px-0 d-flex">
            <div className=" shadow px-3 pt-3 pb-0 w-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="mb-2">{property.name}</h3>
                <h5 className="text-success mb-3">
                   {property.price.toLocaleString()}
                </h5>
                <p className="text-muted">
                  <FaMapMarkerAlt className="me-1" /> {property.address}
                </p>
                <p style={{fontSize:"13px"}}>{property.description}</p>

                <ul className="list-unstyled mt-2">
  {property.areaSizes?.length > 0 && (
    <li className="mb-1">
      <strong>Area Sizes:</strong>{" "}
      {property.areaSizes.map((size) => (
        <span key={size._id} className="badge bg-info text-dark me-1">
          {size.name}
        </span>
      ))}
    </li>
  )}
  {property.propertyTypes?.length > 0 && (
    <li className="mb-1">
      <strong>Property Types:</strong>{" "}
      {property.propertyTypes.map((type) => (
        <span key={type._id} className="badge bg-secondary me-1">
          {type.name}
        </span>
      ))}
    </li>
  )}
 
</ul>

              </div>
            </div>
          </div>
          <div className="col-md-2 bg-white px-0 d-flex">
            <div className="pt-0 pb-3 px-3  w-100 d-flex flex-column justify-content-between">
              <div>
              <ul className="list-unstyled">
  {property.points && (
    <li>
      <ul className="mb-0 ps-0 mb-2 mt-lg-3 mt-0">
        {property.points.map((pt, i) => (
          <li key={i} style={{fontSize:"12px"}}>
            <FaCheckCircle className="text-success me-1" />
            {pt.trim()}
          </li>
        ))}
      </ul>
    </li>
  )}
</ul>
                </div>
                </div></div>
          {/* Contact Form */}
          <div className="col-md-3 px-0 d-flex ">
            <div className=" bg-white  shadow p-3 w-100 d-flex flex-column justify-content-between">
              <h5>Contact Us</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control" placeholder="Enter name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input type="email" className="form-control" placeholder="Enter subject" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="3" placeholder="Message" />
                </div>
                <button className="btn btn-primary w-100" type="submit">
                  <FaPhoneAlt className="me-2" />Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Row */}
        <div className="row mt-4">
          <div className="col">
            <div className="rounded shadow overflow-hidden" style={{ height: "400px" }}>
              {property.location?.coordinates && (
                <MapContainer
                  center={[
                    property.location.coordinates[0],
                    property.location.coordinates[1],
                  ]}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    url="https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=b10ff82cd89f4664a4fc96b348d503f0"
                    attribution='&copy; <a href="https://www.geoapify.com/">Geoapify</a> contributors'
                  />
                  <Marker
                    position={[
                      property.location.coordinates[0],
                      property.location.coordinates[1],
                    ]}
                    icon={L.icon({
                      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                      iconSize: [25, 41],
                      iconAnchor: [12, 41],
                    })}
                  >
                    <Popup>{property.name}</Popup>
                  </Marker>
                </MapContainer>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default PropertyDetails;
