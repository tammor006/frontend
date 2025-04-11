import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Spinner, Alert, Badge } from 'react-bootstrap';
import axios from "../components/axiosInstance";
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Sidebar from "../components/dashboard/Sidebar";
import Select from 'react-select';

const Categories = () => {
    const role = localStorage.getItem("role") || sessionStorage.getItem("role");
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        areaSizes: [],
        propertyTypes: []
    });
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [areaSizeOptions, setAreaSizeOptions] = useState([]);
    const [propertyTypeOptions, setPropertyTypeOptions] = useState([]);
    const [selectedAreaSizes, setSelectedAreaSizes] = useState([]);
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories();
        fetchAreaSizes();
        fetchPropertyTypes();
    }, []);

    const fetchCategories = async () => {
        try {
          setLoading(true);
          const token = localStorage.getItem("token") || sessionStorage.getItem("token");
          const res = await axios.get('/categories', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          
          // Ensure we have an array of categories
          const categoriesData = Array.isArray(res.data.data) 
            ? res.data.data 
            : Array.isArray(res.data) 
              ? res.data 
              : [];
          
          setCategories(categoriesData);
          
          // Also fetch the options for the dropdowns
          await fetchAreaSizes();
          await fetchPropertyTypes();
        } catch (err) {
          setError(err.response?.data?.message || 'Failed to fetch categories');
        } finally {
          setLoading(false);
        }
      };

    const fetchAreaSizes = async () => {
        try {
            const token = localStorage.getItem("token") || sessionStorage.getItem("token");
            const res = await axios.get('/area-sizes', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAreaSizeOptions(res.data.data.map(size => ({
                value: size._id,
                label: size.name
            })));
        } catch (err) {
            console.error('Failed to fetch area sizes:', err);
        }
    };

    const fetchPropertyTypes = async () => {
        try {
            const token = localStorage.getItem("token") || sessionStorage.getItem("token");
            const res = await axios.get('/property-types', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPropertyTypeOptions(res.data.data.map(type => ({
                value: type._id,
                label: type.name
            })));
        } catch (err) {
            console.error('Failed to fetch property types:', err);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleAreaSizeChange = (selectedOptions) => {
        setFormData({
            ...formData,
            areaSizes: selectedOptions.map(option => option.value)
        });
    };

    const handlePropertyTypeChange = (selectedOptions) => {
        setFormData({
            ...formData,
            propertyTypes: selectedOptions.map(option => option.value)
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token') || sessionStorage.getItem('token');
            const data = new FormData();
            data.append('name', formData.name);
            data.append('areaSizes', JSON.stringify(formData.areaSizes));
            data.append('propertyTypes', JSON.stringify(formData.propertyTypes));
            if (image) {
                data.append('image', image);
            }

            if (currentCategory) {
                // Update existing category
                await axios.put(`/categories/${currentCategory._id}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                });
            } else {
                // Create new category
                await axios.post('/categories', data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }

            setShowModal(false);
            fetchCategories();
            resetForm();
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    const handleEdit = (category) => {
        debugger
        setCurrentCategory(category);
        
        // Convert areaSize IDs to react-select format
        // const selectedAreaSizes = category.areaSizes
        //   ? areaSizeOptions.filter(option => 
        //       category.areaSizes.includes(option.value==)
        //     )
        //   : [];
          const selectedAreaSizes = category.areaSizes.map(typeId => {
           let type={}
           type= areaSizeOptions.find(o => o.value === typeId._id)
           return type
           });
           const selectedPropertyTypes = category.propertyTypes.map(typeId => {
            let type={}
            type= propertyTypeOptions.find(o => o.value === typeId._id)
            return type
            });
        
        // Convert propertyType IDs to react-select format
        
      
        setFormData({
          name: category.name,
          areaSizes: category.areaSizes || [],
          propertyTypes: category.propertyTypes || []
        });
      
        // Set the selected options for the dropdowns
        setSelectedAreaSizes(selectedAreaSizes);
        setSelectedPropertyTypes(selectedPropertyTypes);
        
        setImagePreview(category.image);
        setShowModal(true);
      };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            try {
                const token = localStorage.getItem('token') || sessionStorage.getItem('token');
                await axios.delete(`/categories/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchCategories();
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to delete category');
            }
        }
    };

    const resetForm = () => {
        setFormData({
          name: '',
          areaSizes: [],
          propertyTypes: []
        });
        setSelectedAreaSizes([]);
        setSelectedPropertyTypes([]);
        setImage(null);
        setImagePreview('');
        setCurrentCategory(null);
      };

    const handleModalClose = () => {
        setShowModal(false);
        resetForm();
    };


    return (
        <div className="admin-container">
            <Sidebar role={role} />
            <div className="admin-content">
                <h3>Categories</h3>
                <Button variant="primary" className="my-4" onClick={() => setShowModal(true)}>
                    <FaPlus className="me-2" /> Add Category
                </Button>

                {error && <Alert variant="danger">{error}</Alert>}

                {loading ? (
                    <div className="text-center">
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Area Sizes</th>
                                <th>Property Types</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category._id}>
                                    <td>{category.name}</td>
                                    <td>
                                        {category.areaSizes && category.areaSizes.length > 0 ? (
                                            <div className="d-flex flex-wrap gap-1">
                                                {category.areaSizes.map(sizeId => {
                                                    const size = areaSizeOptions.find(o => o.value === sizeId._id);
                                                    return size ? (
                                                        <Badge key={sizeId} bg="secondary" className="me-1">
                                                            {size.label}
                                                        </Badge>
                                                    ) : null;
                                                })}
                                            </div>
                                        ) : '-'}
                                    </td>
                                    <td>
                                        {category.propertyTypes && category.propertyTypes.length > 0 ? (
                                            <div className="d-flex flex-wrap gap-1">
                                                {category.propertyTypes.map(typeId => {
                                                    debugger
                                                    let type={};
                                                     type = propertyTypeOptions.find(o => o.value === typeId._id
                                                        );
                                                    return type ? (
                                                        <Badge key={typeId} bg="info" className="me-1">
                                                            {type.label}
                                                        </Badge>
                                                    ) : null;
                                                })}
                                            </div>
                                        ) : '-'}
                                    </td>
                                    <td>
                                        <img 
                                            src={category.image} 
                                            alt={category.name} 
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                                        />
                                    </td>
                                    <td>
                                        <Button 
                                            variant="warning" 
                                            size="sm" 
                                            className="me-2"
                                            onClick={() => handleEdit(category)}
                                        >
                                            <FaEdit />
                                        </Button>
                                        <Button 
                                            variant="danger" 
                                            size="sm"
                                            onClick={() => handleDelete(category._id)}
                                        >
                                            <FaTrash />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}

                <Modal show={showModal} onHide={handleModalClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {currentCategory ? 'Edit Category' : 'Add New Category'}
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Category Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
  <Form.Label>Area Sizes</Form.Label>
  <Select
    isMulti
    options={areaSizeOptions}
    value={selectedAreaSizes}
    onChange={(selected) => {
      setSelectedAreaSizes(selected);
      setFormData({
        ...formData,
        areaSizes: selected.map(option => option.value)
      });
    }}
    placeholder="Select area sizes..."
    className="basic-multi-select"
    classNamePrefix="select"
  />
</Form.Group>

<Form.Group className="mb-3">
  <Form.Label>Property Types</Form.Label>
  <Select
    isMulti
    options={propertyTypeOptions}
    value={selectedPropertyTypes}
    onChange={(selected) => {
      setSelectedPropertyTypes(selected);
      setFormData({
        ...formData,
        propertyTypes: selected.map(option => option.value)
      });
    }}
    placeholder="Select property types..."
    className="basic-multi-select"
    classNamePrefix="select"
  />
</Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Category Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    required={!currentCategory}
                                />
                                {imagePreview && (
                                    <div className="mt-2">
                                        <img 
                                            src={imagePreview} 
                                            alt="Preview" 
                                            style={{ maxWidth: '200px', maxHeight: '200px' }} 
                                        />
                                    </div>
                                )}
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                {currentCategory ? 'Update' : 'Save'}
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        </div>
    );
};

export default Categories;