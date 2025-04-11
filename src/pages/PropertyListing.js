import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FaThLarge, FaBars } from "react-icons/fa";
import { Container, Row, Col, CardBody, Card, CardFooter, CardHeader, NavLink } from "react-bootstrap";
import TextTruncate from "../components/TextTruncate";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBottom from '../components/FooterBottom';
import axios from "../components/axiosInstance";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
const ITEMS_PER_PAGE = 12;
const PropertyListings = () => {
 
  
  // 3. Fix the marker icons (add this above your component)
  const [properties, setProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("list");
  useEffect(() => {
    const updateViewMode = () => {
      const width = window.innerWidth;
      if (width >= 992) {
        setViewMode("list"); // Large screens (lg and up)
      } else {
        setViewMode("grid"); // Smaller screens
      }
    };
  
    updateViewMode(); // Initial check
  
    window.addEventListener("resize", updateViewMode); // Handle resize
  
    return () => window.removeEventListener("resize", updateViewMode);
  }, []);
  
  // Fetch all data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [propertiesRes, categoriesRes] = await Promise.all([
          axios.get('/properties/public'),
          axios.get('/properties/categories/public')
        ]);

        setProperties(propertiesRes.data);
        setCategories(categoriesRes.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Failed to fetch data:", err);
      }
    };

    fetchData();
  }, []);

  // Filter properties
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         property.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || 
                          property.category?._id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = filteredProperties.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const totalRecord = filteredProperties.length;
  const startItem = offset + 1;
  const endItem = Math.min(offset + ITEMS_PER_PAGE, totalRecord);
  const recordSummary = `${startItem} to ${endItem} of ${totalRecord} Properties`;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Format area size display
  const formatAreaSize = (areaSize) => {
    if (!areaSize) return "";
    return areaSize.name;
  };

  if (loading) return <div className="text-center py-5">Loading properties...</div>;
  if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;

  return (
    <>
      <MyNavbar />
      <div>
        <div className="headline-item text-center my-5">
          <h3>
            Property <span className="head-red">Listings</span>
          </h3>
        </div>
        
        <div className="d-flex container-fluid justify-content-between align-items-center my-4 px-5">
          <input
            className="p-2 mr-2"
            type="text"
            placeholder="Search Properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "200px" }}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 mx-2"
          >
            <option value="All">All Categories</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>

        <Container className="px-lg-5 px-0" fluid>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12} className="px-0">
              <Card className="px-3">
                <CardHeader className="bg-white py-0">
                  <div style={{ float: "left" }}>
                    <div style={{ lineHeight: "3", fontWeight: "600" }}>{recordSummary}</div>
                  </div>
                  {window.innerWidth < 992 && (
  <div className="hide-grid-button" style={{ float: "right" }}>
    <NavLink 
      className={`font-4 ${viewMode === "grid" ? "active-fill-view" : "unactive-fill-view"}`} 
      onClick={() => setViewMode("grid")}
    >
      <FaThLarge />
    </NavLink>
    <NavLink 
      className={`ml-2 font-4 ${viewMode === "list" ? "active-fill-view" : "unactive-fill-view"}`} 
      onClick={() => setViewMode("list")}
    >
      <FaBars />
    </NavLink>
  </div>
)}

                </CardHeader>
                <CardBody style={{ background: "#dee2e6" }} className="py-0">
                  <Row className={viewMode === "grid" ? "" : "flex-column"}>
                    {currentItems.length > 0 ? (
                      currentItems.map((property) => (
                        <Col 
                          key={property._id} 
                          xl={viewMode === "grid" ? 6 : 12} 
                          lg={viewMode === "grid" ? 6 : 12} 
                          md={12} 
                          sm={12} 
                          className=""
                        >
                          <Link to={`/property/${property._id}`}>
                            {viewMode === "grid" ? (
                              <GridPropertyCard 
                                property={property} 
                                formatAreaSize={formatAreaSize} 
                              />
                            ) : (
                              <ListPropertyCard 
                                property={property} 
                                formatAreaSize={formatAreaSize} 
                              />
                            )}
                          </Link>
                        </Col>
                      ))
                    ) : (
                      <div className="no-records w-100 text-center py-5">No Properties Found</div>
                    )}
                  </Row>
                </CardBody>
                <CardFooter className="bg-white">
                  {filteredProperties.length > ITEMS_PER_PAGE && (
                    <ReactPaginate
                      previousLabel={"←"}
                      nextLabel={"→"}
                      pageCount={pageCount}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      pageClassName={"page-item"}
                      pageLinkClassName={"page-link"}
                      activeClassName={"active"}
                      previousClassName={"prev-next"}
                      nextClassName={"prev-next"}
                      disabledClassName={"disabled"}
                    />
                  )}
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
      <FooterBottom />
    </>
  );
};

// Grid View Card Component
const GridPropertyCard = ({ property, formatAreaSize }) => (
  
  <ul className="list-unstyled p-0 bg-white b-1 grid my-2" style={{ borderRadius: "5px" }}>
    <li>
      <figure style={{ position: "relative", height: "250px" }}>
        {property.images?.[0] && (
          <img 
            className="w-100 h-100 banner-image" 
            src={property.images[0]} 
            style={{ borderRadius: "5px 5px 0px 0px", objectFit: "cover" }} 
            alt={property.name} 
          />
        )}
        {property.status === 'hot' && <span className="top-tag">Hot</span>}
        {property.category?.name && <span className="tag">{property.category.name}</span>}
      </figure>
    </li>
    <li className="px-3">
      <h5 className="project-heading">PKR {property.price.toLocaleString()}</h5>
    </li>
    <li className="px-3">
      <h5 className="project-heading">{property.name}</h5>
    </li>
    <li className="px-3 pb-2 mt-2">
    <TextTruncate text={property.description} className="list-view-description" />
    </li>
    <li className="py-1 d-flex px-3">
      <img height={30} width={30} src="/images/property.png" alt="Property Type" />
      <p className="ml-2 text-black font-0 text-bold icon-line-height">
        {property.propertyTypes?.map(pt => pt.name).join(", ")}
      </p>
    </li>
    <li className="py-1 d-flex px-3">
      <img height={30} width={30} src="/images/area.png" alt="Area Size" />
      <p className="ml-2 text-black font-0 text-bold icon-line-height">
        {property.areaSizes?.map(formatAreaSize).join(", ")}
      </p>
    </li>
    <li className="py-1 pb-3 d-flex px-3">
      <img height={30} width={30} src="/images/map.png" alt="Address" />
      <p className="ml-2 text-black font-0 text-bold icon-line-height">
        {property.address}
      </p>
    </li>
    
    {property.location?.coordinates && (
      
      <li>
        <div style={{ height: '200px', width: '100%', marginTop: '15px' }}>   
        <MapContainer 
          center={[property.location.coordinates[0], property.location.coordinates[1]]}
          zoom={13}
          style={{ height: '100%', width: '100%', borderRadius: '5px' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=b10ff82cd89f4664a4fc96b348d503f0"
            attribution='&copy; <a href="https://www.geoapify.com/">Geoapify</a> contributors'
          />
          <Marker 
            position={[property.location.coordinates[0], property.location.coordinates[1]]}
            icon={L.icon({
              iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41]
            })}
          >
            <Popup>{property.name}</Popup>
          </Marker>
        </MapContainer>
      </div>
      </li>
      
    )}
  </ul>
);

// List View Card Component
const ListPropertyCard = ({ property, formatAreaSize }) => (
  
  <ul className="list-unstyled p-0 bg-white b-1 list-view my-2" style={{ borderRadius: "5px" }}>
    <li style={{width:"33.3%"}}>
      <figure className="m-0 list-view-figure">
        {property.images?.[0] && (
          <img 
            className="w-100 h-100 list-view-image" 
            src={property.images[0]} 
            alt={property.name} 
          />
        )}
        {property.status === 'hot' && <span className="top-tag">Hot</span>}
        {property.category?.name && <span className="tag">{property.category.name}</span>}
      </figure>
    </li>
    <li style={{width:"33.3%"}} className=" mt-2 mt-lg-4 mt-md-3 mt-sm-3">
      <ul className="px-2">
        <li>
          <h5 className="list-view-heading">PKR {property.price.toLocaleString()}</h5>
        </li>
        <li>
          <h5 className="list-view-heading">{property.name}</h5>
        </li>
        <li className="my-2">
          <TextTruncate text={property.description} className="list-view-description" />
        </li>
        <li className="py-1 d-flex">
          <img src="/images/property.png" className="list-view-icon" alt="Property Type" />
          <p className="ml-2 text-black list-view-icon-text text-bold icon-line-height">
            {property.propertyTypes?.map(pt => pt.name).join(", ")}
          </p>
        </li>
        <li className="py-1 d-flex">
          <img src="/images/area.png" className="list-view-icon" alt="Area Size" />
          <p className="ml-2 text-black list-view-icon-text text-bold icon-line-height">
            {property.areaSizes?.map(formatAreaSize).join(", ")}
          </p>
        </li>
        <li className="py-1 d-flex">
          <img src="/images/map.png" className="list-view-icon" alt="Address" />
          <p className="ml-2 text-black list-view-icon-text text-bold icon-line-height">
            {property.address}
          </p>
        </li>
      </ul>
    </li>
    <li className="" style={{width:"33.3%"}}>
    {property.location?.coordinates && (
      
          <div style={{ height: '330px', width: '100%' }}>   
        <MapContainer 
          center={[property.location.coordinates[0], property.location.coordinates[1]]}
          zoom={13}
          style={{ height: '100%', width: '100%', borderRadius: '5px' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=b10ff82cd89f4664a4fc96b348d503f0"
            attribution='&copy; <a href="https://www.geoapify.com/">Geoapify</a> contributors'
          />
          <Marker 
            position={[property.location.coordinates[0], property.location.coordinates[1]]}
            icon={L.icon({
              iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41]
            })}
          >
            <Popup>{property.name}</Popup>
          </Marker>
        </MapContainer>
      </div>
      
    )}
    </li>
  </ul>
);

export default PropertyListings;