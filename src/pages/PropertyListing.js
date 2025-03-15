import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import {  FaThLarge, FaBars } from "react-icons/fa";
import { Container, Row, Col, CardBody,Card, CardFooter, CardHeader,NavLink } from "react-bootstrap";
import TextTruncate from "../components/TextTruncate";
const ITEMS_PER_PAGE = 12;
const projects = [
  {id:1,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:2,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:3,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:4,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:5,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:6,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:7,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:8,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:9,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:10,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:11,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:12,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:13,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:14,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  {id:15,name:"CHINA GOLD PARK MAIL",price:" PKR 19.3 Lakh to 1.22 Crore", category:"Installment",popular:"Hot",image:"/images/china-gold.jpg",description:"Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us  Own A Shop Starting from 1 Crore Get 18 Lac as Rental from us  Get 3 Years Advance Rent from us ",area:" 3 Marla to 12 Marla",address:"Lahore, Main Boulevard Gulberg",subCategory:" Commercial Plots, Residential Plots" },
  
];
const PropertyListings = () => {
  console.log("Projects Data:", projects); // Debugging
//   if (!Array.isArray(projects)) {
//     console.error("Error: `projects` is not an array", projects);
//     return null; // Avoid rendering the component
// }
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("list"); // "grid" or "list"

  const filteredProducts = projects.filter(
    (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const totalRecord=projects.length; 
  const startItem = currentPage * ITEMS_PER_PAGE + 1;
  const endItem = Math.min((currentPage + 1) * ITEMS_PER_PAGE, totalRecord);
  const recordSummary=startItem +" to " +endItem +" of "+totalRecord +" Properties";
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="headline-item text-center my-5">
        <h3>
          Project <span className="head-red">Listings</span>
        </h3>
      </div>

      {/* <div className="d-flex justify-content-between align-items-center my-4 px-3">
        <input
          className="p-2 mr-2"
          type="text"
          placeholder="Search Products..."
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
          <option value="Installment">Installment</option>
          <option value="Apartment">Apartment</option>
          <option value="Commercial">Commercial</option>
        </select>

        
      </div> */}

      <Container >
        <Row>
          <Col xl={9} lg={9} md={12} sm={12} className="px-0">
          <Card>
            <CardHeader className="bg-white py-0">
              <div style={{float:"left"}}>
                <div style={{lineHeight:"3",fontWeight:"600"}}>{recordSummary}</div>
              </div>
            <div className="hide-grid-button" style={{float:"right"}}>
            <NavLink className={` font-4 ${viewMode === "grid" ? "active-fill-view" : "unactive-fill-view"}`} onClick={() => setViewMode("grid")}>
            <FaThLarge />
          </NavLink>
          <NavLink className={`ml-2 font-4 ${viewMode === "list" ? "active-fill-view" : "unactive-fill-view"}`} onClick={() => setViewMode("list")}>
            <FaBars />
          </NavLink>
        </div>
            </CardHeader>
            <CardBody style={{background:"#dee2e6"}} className="py-0">
            <Row className={viewMode === "grid" ? "" : "flex-column"}>
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <Col key={product.id} xl={viewMode === "grid" ? 6 : 12} lg={viewMode === "grid" ? 6 : 12} md={12} sm={12} className="px-0 px-lg-3 px-md-3 px-sm-3">
                {viewMode==="grid"?
                <NavLink to="/property" >
                <ul className="list-unstyled p-0 bg-white b-1 grid my-2" style={{borderRadius:"5px"}}>
                  <li>
                      <figure style={{position:"relative",height:"250px"}}>
                      <img className="w-100 h-100 banner-image" src={product.image} style={{borderRadius:"5px 5px 0px 0px"}} alt=""/>
                      <span className="top-tag">{product.popular}</span>
                      <span className="tag">{product.category}</span>
                     
                      </figure>
                  
                  </li>
                  <li className="px-3">
                    <h5 className="project-heading">
                    {product.price}
                    </h5>
                  </li>
                  <li className="px-3">
                    <h5 className="project-heading">
                     {product.name}
                    </h5>
                  </li>
                  <li className="px-3 pb-4 mt-2">
                    <p className="project-explanation">
                      {product.description}
                    </p>
                  </li>
                  <li className=" py-1 d-flex px-3">
                    <img height={30} width={30} src="/images/property.png" className="" alt=''/>
                    <p className="ml-2 text-black font-0 text-bold icon-line-height">
                       {product.subCategory}
                    </p>
                  </li>
                  <li className="py-1 d-flex px-3">
                  <img height={30} width={30} src="/images/area.png" className="" alt=''/>
                    <p className="ml-2 text-black font-0 text-bold icon-line-height">
                    {product.area}
                    </p> 
                  </li>
                  <li className=" py-1 pb-3 d-flex px-3">
                  <img height={30} width={30} src="/images/map.png" className="" alt=''/>
                    <p className="ml-2 text-black font-0 text-bold icon-line-height">
                    {product.address}
                    </p> 
                  </li>
               </ul>
              </NavLink>
                :
                <NavLink to="/property" >
              <ul className="list-unstyled p-0 bg-white b-1 list-view my-2" style={{borderRadius:"5px"}}>
                <li className="w-50 w-40">
                    <figure className="m-0 list-view-figure">
                    <img className="w-100 h-100 list-view-image" src={product.image} alt=""/>
                    <span className="top-tag">{product.popular}</span>
                    <span className="tag">{product.category}</span>
                   
                    </figure>
                
                </li>
                <li className="w-50 w-60 mt-2 mt-lg-4 mt-md-3 mt-sm-3">
                  <ul className="px-2">
                    <li>
                    <h5 className="list-view-heading">{product.price}</h5>
                    </li>
                    <li>
                  <h5 className="list-view-heading">
                   {product.name}
                  </h5>
                </li>
                <li className="mt-2">
                  <TextTruncate text={product.description} className="list-view-description" />
                  {/* <p className="list-view-description">
                    {product.description}
                  </p> */}
                </li>
                <li className="py-1 d-flex">
                  <img src="/images/property.png" className="list-view-icon" alt=''/>
                  <p className="ml-2 text-black list-view-icon-text text-bold icon-line-height">
                     {product.subCategory}
                  </p>
                </li>
                <li className="py-1 d-flex">
                <img src="/images/area.png" className="list-view-icon" alt=''/>
                  <p className="ml-2 text-black list-view-icon-text text-bold icon-line-height">
                  {product.area}
                  </p> 
                </li>
                <li className=" py-1 d-flex">
                <img src="/images/map.png" className="list-view-icon" alt=''/>
                  <p className="ml-2 text-black list-view-icon-text text-bold icon-line-height">
                  {product.address}
                  </p> 
                </li>
                  </ul>
                  
                </li>
                
             </ul>
            </NavLink>
                }
                
             
              </Col>
            ))
          ) : (
            <div className="no-records">No Records Found</div>
          )}
          
        </Row>
            </CardBody>
            <CardFooter className="bg-white">
            {filteredProducts.length > ITEMS_PER_PAGE && (
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
          <Col xl={3}></Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default PropertyListings;




