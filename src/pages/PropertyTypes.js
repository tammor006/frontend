import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Spinner, Alert, Pagination } from 'react-bootstrap';
import axios from "../components/axiosInstance";
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const PropertyTypes = () => {
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentPropertyType, setCurrentPropertyType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 1
  });

  useEffect(() => {
    fetchPropertyTypes();
  }, [pagination.page]);

  const fetchPropertyTypes = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/property-types?page=${pagination.page}&limit=${pagination.limit}`);
      setPropertyTypes(res.data.data);
      setPagination({
        ...pagination,
        total: res.data.total,
        pages: res.data.pages
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch property types');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    debugger
      const token = localStorage.getItem('token');

      if (currentPropertyType) {
        // Update existing property type
        await axios.put(`/property-types/${currentPropertyType._id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      } else {
        // Create new property type
        await axios.post('/property-types', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      }

      setShowModal(false);
      fetchPropertyTypes();
      resetForm();
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  const handleEdit = (propertyType) => {
    setCurrentPropertyType(propertyType);
    setFormData({
      name: propertyType.name,
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this property type?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`/property-types/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        fetchPropertyTypes();
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete property type');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
    });
    setCurrentPropertyType(null);
  };

  const handleModalClose = () => {
    setShowModal(false);
    resetForm();
  };

  const handlePageChange = (page) => {
    setPagination({
      ...pagination,
      page
    });
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Property Types</h2>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          <FaPlus className="me-2" /> Add Property Type
        </Button>
      </div>

      {error && <Alert variant="danger">{error}</Alert>}

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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {propertyTypes.map((propertyType, index) => (
                <tr key={propertyType._id}>
                  <td>{propertyType.name}</td>
                  <td>
                    <Button 
                      variant="warning" 
                      size="sm" 
                      className="me-2"
                      onClick={() => handleEdit(propertyType)}
                    >
                      <FaEdit />
                    </Button>
                    <Button 
                      variant="danger" 
                      size="sm"
                      onClick={() => handleDelete(propertyType._id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {pagination.pages > 1 && (
            <Pagination className="mt-3">
              <Pagination.First 
                onClick={() => handlePageChange(1)} 
                disabled={pagination.page === 1} 
              />
              <Pagination.Prev 
                onClick={() => handlePageChange(pagination.page - 1)} 
                disabled={pagination.page === 1} 
              />
              
              {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(page => (
                <Pagination.Item
                  key={page}
                  active={page === pagination.page}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Pagination.Item>
              ))}
              
              <Pagination.Next 
                onClick={() => handlePageChange(pagination.page + 1)} 
                disabled={pagination.page === pagination.pages} 
              />
              <Pagination.Last 
                onClick={() => handlePageChange(pagination.pages)} 
                disabled={pagination.page === pagination.pages} 
              />
            </Pagination>
          )}
        </>
      )}

      <Modal show={showModal} onHide={handleModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {currentPropertyType ? 'Edit Property Type' : 'Add New Property Type'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              {currentPropertyType ? 'Update' : 'Save'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default PropertyTypes;