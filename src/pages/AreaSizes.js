import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Spinner, Alert, Pagination } from 'react-bootstrap';
import axios from "../components/axiosInstance";
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const AreaSizes = () => {
  const [areaSizes, setAreaSizes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentAreaSize, setCurrentAreaSize] = useState(null);
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
    fetchAreaSizes();
  }, [pagination.page]);

  const fetchAreaSizes = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/area-sizes?page=${pagination.page}&limit=${pagination.limit}`);
      setAreaSizes(res.data.data);
      setPagination({
        ...pagination,
        total: res.data.total,
        pages: res.data.pages
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch area sizes');
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
      const token = localStorage.getItem('token');
      
      if (currentAreaSize) {
        // Update existing area size
        await axios.put(`/area-sizes/${currentAreaSize._id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } else {
        // Create new area size
        await axios.post('/area-sizes', formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }

      setShowModal(false);
      fetchAreaSizes();
      resetForm();
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  const handleEdit = (areaSize) => {
    setCurrentAreaSize(areaSize);
    setFormData({
      name: areaSize.name,
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this area size?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`/area-sizes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        fetchAreaSizes();
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete area size');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
    });
    setCurrentAreaSize(null);
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
        <h2>Area Sizes</h2>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          <FaPlus className="me-2" /> Add Area Size
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
              {areaSizes.map((areaSize, index) => (
                <tr key={areaSize._id}>
                  <td>{areaSize.name}</td>
                  <td>
                    <Button 
                      variant="warning" 
                      size="sm" 
                      className="me-2"
                      onClick={() => handleEdit(areaSize)}
                    >
                      <FaEdit />
                    </Button>
                    <Button 
                      variant="danger" 
                      size="sm"
                      onClick={() => handleDelete(areaSize._id)}
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

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentAreaSize ? 'Edit Area Size' : 'Add New Area Size'}
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
              {currentAreaSize ? 'Update' : 'Save'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default AreaSizes;