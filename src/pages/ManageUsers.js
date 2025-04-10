import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Table, Pagination, Spinner,NavLink } from "react-bootstrap";
import axios from "../components/axiosInstance";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/dashboard/Sidebar";
const User = () => {
  const role= localStorage.getItem("role") || sessionStorage.getItem("role")
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [editUserId, setEditUserId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    cnic: "",
    gender: "male",
    role: "agent",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async (page) => {
    try {
        debugger
        setLoading(true);
        const token= localStorage.getItem("token") || sessionStorage.getItem("token")
        if (!token) {
            console.error("No token found. Please login.");
            return;
          }
      const res = await axios.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
      setTotalPages(res.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users", error);
      setLoading(false);
    }
  };
  const deleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
    try {
      debugger
      const token= localStorage.getItem("token") || sessionStorage.getItem("token")
        if (!token) {
            console.error("No token found. Please login.");
            return;
          }
   const res=   await axios.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // After successful deletion, update the state to remove the user
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
  };
  const handleEditUser = (user) => {
    setEditUserId(user._id);
    setFormData({
      name: user.name,
      email: user.email,
      password: "",
      phone: user.phone,
      address: user.address,
      cnic: user.cnic,
      gender: user.gender,
      role: user.role,
    });
    setShowModal(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  
    // Clear the error for the field when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
const validatePassword = (password) => password.length >= 6;
  const handleSubmit = async () => {
    debugger
    let formErrors = {};
  
    if (!formData.name) {
      formErrors.name = "Name is required";
    }
    if (!formData.email || !validateEmail(formData.email)) {
      formErrors.email = "Valid email is required";
    }
   if(!editUserId && (!formData.password || !validatePassword(formData.password))) {
      formErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.phone) {
      formErrors.phone = "Phone is required";
    }
    if (!formData.address) {
      formErrors.address = "Address is required";
    }
    if (!formData.cnic) {
      formErrors.cnic = "CNIC is required";
    }
  
    // If there are any errors, don't submit the form
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    // Submit form
    if (editUserId) {
      await handleUpdateUser();
    } else {
      await handleCreateUser();
    }
  };
  const handleUpdateUser = async () => {
    try {
      debugger
      const token= localStorage.getItem("token") || sessionStorage.getItem("token")
        if (!token) {
            console.error("No token found. Please login.");
            return;
        }
       await axios.put(`/users/${editUserId}`, formData, {
        headers: ({
          Authorization: `Bearer ${token}`,
        }),
      });
      setShowModal(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        cnic: "",
        gender: "male",
        role: "agent",
      });
      setEditUserId(null); // Reset the editUserId
      fetchUsers(currentPage);
    } catch (error) {
      console.error("Error updating user", error);
    }
  };
  const handleShowUser = async () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      cnic: "",
      gender: "male",
      role: "agent",
    });
    setEditUserId(null);
    setShowModal(true);
  };
  const handleCreateUser = async () => {
    try {
      const res = await axios.post("/auth/register", formData);
      setShowModal(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        cnic: "",
        gender: "male",
        role: "agent",
      });
      fetchUsers(currentPage);
    } catch (error) {
      console.error("Error creating user", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchUsers(page);
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  return (
    <div className="admin-container">
       <Sidebar role={role} />
        <div className="admin-content">
        <h3 className="mb-3">Manage Users</h3>
      <Button variant="primary" onClick={() => handleShowUser()}>
        Create User
      </Button>

      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td style={{display:"flex"}}>
                   
                    <NavLink className="text-success mx-2 font-3"   onClick={() => handleEditUser(user)}>
                        <FaEdit /> {/* Edit icon */}
                      </NavLink>
                      <NavLink className="text-danger mx-2 font-3"  onClick={() => deleteUser(user._id)}>
                        <FaTrashAlt /> {/* Delete icon */}
                      </NavLink>
                  </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Pagination>
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

      {/* Create User Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editUserId ? "Update User" : "Save User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter name"
      value={formData.name}
      name="name"
      onChange={handleChange} // Using the new onChange handler
    />
    {errors.name && <div className="text-danger">{errors.name}</div>}
  </Form.Group>

  <Form.Group controlId="formEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control
      type="email"
      placeholder="Enter email"
      value={formData.email}
      name="email"
      onChange={handleChange} // Using the new onChange handler
    />
    {errors.email && <div className="text-danger">{errors.email}</div>}
  </Form.Group>

  {!editUserId && (
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                  />
                  {errors.password && <div className="text-danger">{errors.password}</div>}
                </Form.Group>
              )}
  <Form.Group controlId="formPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter phone"
      value={formData.phone}
      name="phone"
      onChange={handleChange} // Using the new onChange handler
    />
    {errors.phone && <div className="text-danger">{errors.phone}</div>}
  </Form.Group>

  <Form.Group controlId="formAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter address"
      value={formData.address}
      name="address"
      onChange={handleChange} // Using the new onChange handler
    />
    {errors.address && <div className="text-danger">{errors.address}</div>}
  </Form.Group>

  <Form.Group controlId="formCnic">
    <Form.Label>CNIC</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter CNIC"
      value={formData.cnic}
      name="cnic"
      onChange={handleChange} // Using the new onChange handler
    />
    {errors.cnic && <div className="text-danger">{errors.cnic}</div>}
  </Form.Group>

  <Form.Group controlId="formGender">
    <Form.Label>Gender</Form.Label>
    <Form.Control
      as="select"
      value={formData.gender}
      name="gender"
      onChange={handleChange} // Using the new onChange handler
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="formRole">
    <Form.Label>Role</Form.Label>
    <Form.Control
      as="select"
      value={formData.role}
      name="role"
      onChange={handleChange} // Using the new onChange handler
    >
      <option value="agent">Agent</option>
      <option value="admin">Admin</option>
    </Form.Control>
  </Form.Group>

</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
          {editUserId ? "Update" : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
};

export default User;
