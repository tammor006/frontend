import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { FaBed,FaMapMarkerAlt } from "react-icons/fa";
import { Container, Row,Col} from "react-bootstrap";
 
const projects = [
    { id: 1, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 2, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 3, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 4, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 5, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 6, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 7, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 8, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 9, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 9, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 10, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 11, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 12, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 13, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 14, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 15, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 16, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 17, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 18, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 19, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 20, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 21, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 22, name: "CHINA GOLD PARK MAIL", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
    { id: 23, name: "CHINA GOLD PARK MAIL8686", category: "Installment",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",Bed:"Lorem ipsum dolor sit amet cons",Address:"Lorem ipsum dolor sit amet cons" },
  ];
  const ITEMS_PER_PAGE = 12;
  const PropertyListings = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
  
    // Filter products by search term & category
    const filteredProducts = projects.filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Pagination logic
    const offset = currentPage * ITEMS_PER_PAGE;
    const currentItems = filteredProducts.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  
    const handlePageClick = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    return (
      <div>
        <div className="headline-item text-center my-5">
            <h3>Project
            <span class="head-red"> Listings</span>
            </h3>
          </div>
  
        {/* Search Input */}
        <div className="ml-3 my-4">
        <input
        className="p-2 mr-2"
          type="text"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{  width: "200px" }}
        />
  
        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2"
        >
          <option value="All">All Categories</option>
          <option value="Installment">Installment</option>
          <option value="Clothing">Apartment</option>
          <option value="Accessories">Commerical</option>
        </select>
        </div>
        
       
          
            <Container fluid>
                <Row>
                {currentItems.length > 0 ? (
                currentItems.map((product) => (
                    <Col xl={4} lg={4} md={6} xs={12} sm={12} >
                    <ul className="list-unstyled p-0 bg-white br-1">
                            <li>
                                <figure style={{position:"relative"}}>
                                <img className="w-100" src="/images/china-gold.jpg" alt=""/>
                                <span className="tag">Installment</span>
                                </figure>
                            
                            </li>
                            <li className="px-3">
                              <h5 className="project-heading mt-3">
                               {product.name}
                              </h5>
                            </li>
                            <li className="px-3 mt-2">
                              <p className="project-explanation">
                                {product.description}
                              </p>
                            </li>
                            <li className="project-room mt-4  py-2 d-flex px-3">
                              <FaBed className="font-2 text-theme"></FaBed>
                              <p className="ml-3">
                                {product.Bed}
                              </p>
                            </li>
                            <li className="project-room py-2 d-flex px-3">
                              <FaMapMarkerAlt className="font-2 text-theme"></FaMapMarkerAlt>
                              <p className="ml-3">
                                {product.Address}
                              </p> 
                            </li>
                            <li className="px-3">
                              <img className="w-100" src="/images/map.jpeg" alt=""/>
                            </li>
                            <li className="text-center px-3 pb-3">
                              <a href="/" className="btn btn-lg w-100 mt-3">GET DETAILS
                              </a>
                            </li>
                         </ul></Col>
                ))
                         ) : (
                          <div className="no-records">No Records Found</div>)}
                </Row>
            </Container>
             
          
        
  
        {/* Pagination Component */}
        {filteredProducts.length > ITEMS_PER_PAGE && (
          <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"} /* Makes entire li clickable */
          pageLinkClassName={"page-link"}
          activeClassName={"active"}
          previousClassName={"prev-next"} /* Same style as page buttons */
          nextClassName={"prev-next"}
          disabledClassName={"disabled"}
          />
        )}
      </div>
    );
  };
  
  export default PropertyListings;
