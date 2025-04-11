import React, { useState, useEffect } from "react";
import { Table, Button, Pagination, Spinner, NavLink } from "react-bootstrap";
import axios from "../components/axiosInstance";
import Sidebar from "../components/dashboard/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt,FaThumbsUp  } from "react-icons/fa";

const PropertyLists = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const role= localStorage.getItem("role") || sessionStorage.getItem("role")
  const fetchProperties = async (page) => {
    try {
      setLoading(true);
     
      const token= localStorage.getItem("token") || sessionStorage.getItem("token")
        if (!token) {
            console.error("No token found. Please login.");
            return;
          }
      const res = await axios.get(`/properties?page=${page}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
    });
      setProperties(res.data.properties); // backend should return { properties, totalPages }
      setTotalPages(res.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching properties", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const deleteProperty = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this property?");
  if (!confirmDelete) return;

  try {
    const token = localStorage.getItem("token")|| sessionStorage.getItem("token");

    await axios.delete(`/properties/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Property deleted successfully.");
    // Refresh your list here after deletion
    fetchProperties(); // or remove the deleted item from the state
  } catch (error) {
    console.error("Delete error:", error);
    alert("Failed to delete property.");
  }
  };
  const handleEditProperty = (id) => {
    debugger
    navigate(`/properties/update/${id}`);
  };
  const handleAddProperty = async () => {
    navigate("/properties/add");
  };
  const approveProperty = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(`/properties/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Property approved!");
      fetchProperties(); // refetch list
    } catch (error) {
      console.error("Approval error:", error);
      alert("Failed to approve property.");
    }
  };
  return (
    <div className="admin-container">
      <Sidebar role={role} />
      <div className="admin-content">
        <h3 className="mb-3">Property Listings</h3>
        <Button variant="primary" className="my-3" onClick={() => handleAddProperty()}>
                Create Property
        </Button>
        {loading ? (
          <div className="text-center">
          <Spinner animation="border" />
          </div>
        ) : (
          <>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property._id}>
                    <td>{property.name}</td>
                    <td>{property.price}</td>
                    <td>{property.address}</td>
                    <td>{property.status}</td>
                    <td style={{display:"flex"}}>
                    {role === "admin" && property.status === "pending" && (
                   <NavLink className="text-warning mx-2 font-3" onClick={() => approveProperty(property._id)}><FaThumbsUp/></NavLink>
                    )}
                      <NavLink className="text-success mx-2 font-3"  onClick={() => handleEditProperty(property._id)}>
                        <FaEdit /> {/* Edit icon */}
                      </NavLink>
                      <NavLink className="text-danger mx-2 font-3" onClick={() => deleteProperty(property._id)}>
                        <FaTrashAlt /> {/* Delete icon */}
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Pagination Controls */}
            <Pagination className="mt-3">
              {[...Array(totalPages).keys()].map((page) => (
                <Pagination.Item
                  key={page + 1}
                  active={page + 1 === currentPage}
                  onClick={() => handlePageChange(page + 1)}
                >
                  {page + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyLists;
