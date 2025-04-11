import React, { useState, useEffect, useCallback } from "react";
import axios from "../components/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Select from 'react-select';


const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    points: [],
    address: "",
    images: [],
    location: [33.6844, 73.0479],
    category: "",
    propertyTypes: [],
    areaSizes: []
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    points: "",
    address: "",
    images: "",
    category: "",
    propertyTypes: "",
    areaSizes: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedAreaSizes, setSelectedAreaSizes] = useState([]);
  const [propertyTypeOptions, setPropertyTypeOptions] = useState([]);
  const [areaSizeOptions, setAreaSizeOptions] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch property and categories data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("token");
        
        // Fetch categories
        const categoriesRes = await axios.get('/categories', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCategories(categoriesRes.data.data);

        // Fetch property
        const propertyRes = await axios.get(`/properties/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const property = propertyRes.data;
        
        // Find category for the property
        const propertyCategory = categoriesRes.data.data.find(c => c._id === property.category);
        
        setFormData({
          name: property.name,
          description: property.description,
          price: property.price,
          points: property.points || [],
          address: property.address,
          location: property.location?.coordinates || [33.6844, 73.0479],
          category: property.category,
          propertyTypes: property.propertyTypes || [],
          areaSizes: property.areaSizes || []
        });

        setExistingImages(property.images || []);
        
        // Set selected category and options
        if (propertyCategory) {
          setSelectedCategory({
            value: propertyCategory._id,
            label: propertyCategory.name
          });
          
          // Set property type options and selected values
          const ptOptions = propertyCategory.propertyTypes.map(pt => ({
            value: pt._id,
            label: pt.name
          }));
          setPropertyTypeOptions(ptOptions);
          
          const selectedPTs = ptOptions.filter(opt => 
            property.propertyTypes.includes(opt.value)
          );
          setSelectedPropertyTypes(selectedPTs);
          
          // Set area size options and selected values
          const asOptions = propertyCategory.areaSizes.map(as => ({
            value: as._id,
            label: as.name
          }));
          setAreaSizeOptions(asOptions);
          
          const selectedASs = asOptions.filter(opt => 
            property.areaSizes.includes(opt.value)
          );
          setSelectedAreaSizes(selectedASs);
        }

      } catch (error) {
        console.error("Failed to load data:", error);
        setErrorMessage("Failed to load property data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Clean up image previews
  useEffect(() => {
    return () => {
      newImages.forEach(image => URL.revokeObjectURL(image.preview));
    };
  }, [newImages]);

  // Handle file drop for new images
  const onDrop = useCallback((acceptedFiles) => {
    const filesWithPreview = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      id: `new-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }));
    setNewImages(prev => [...prev, ...filesWithPreview]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
    maxFiles: 10,
  });

  // Update options when category changes
  useEffect(() => {
    if (selectedCategory) {
      const categoryObj = categories.find(c => c._id === selectedCategory.value);
      
      if (categoryObj) {
        setPropertyTypeOptions(
          categoryObj.propertyTypes.map(pt => ({
            value: pt._id,
            label: pt.name
          }))
        );
        
        setAreaSizeOptions(
          categoryObj.areaSizes.map(as => ({
            value: as._id,
            label: as.name
          }))
        );
      }
    }
  }, [selectedCategory, categories]);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setFormData(prev => ({
      ...prev,
      category: selectedOption ? selectedOption.value : "",
      propertyTypes: [],
      areaSizes: []
    }));
    setSelectedPropertyTypes([]);
    setSelectedAreaSizes([]);
  };

  const handlePropertyTypeChange = (selectedOptions) => {
    setSelectedPropertyTypes(selectedOptions || []);
    setFormData(prev => ({
      ...prev,
      propertyTypes: selectedOptions ? selectedOptions.map(opt => opt.value) : []
    }));
  };

  const handleAreaSizeChange = (selectedOptions) => {
    setSelectedAreaSizes(selectedOptions || []);
    setFormData(prev => ({
      ...prev,
      areaSizes: selectedOptions ? selectedOptions.map(opt => opt.value) : []
    }));
  };

  // Address change and geocoding
  const handleAddressChange = async (e) => {
    const address = e.target.value;
    setFormData(prev => ({ ...prev, address }));

    if (address.length > 5) {
      try {
        const res = await axios.get("https://api.geoapify.com/v1/geocode/search", {
          params: {
            text: address,
            apiKey: "b10ff82cd89f4664a4fc96b348d503f0",
          },
        });

        if (res.data.features.length > 0) {
          const { lat, lon } = res.data.features[0].properties;
          setFormData(prev => ({
            ...prev,
            location: [lat, lon],
          }));
        }
      } catch (err) {
        console.error("Geoapify error:", err);
      }
    }
  };

  // Helper component to recenter the map
  const RecenterMap = ({ lat, lng }) => {
    const map = useMap();
    map.setView([lat, lng], 14);
    return null;
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.price) newErrors.price = "Price is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (formData.propertyTypes.length === 0) newErrors.propertyTypes = "At least one property type is required";
    if (formData.areaSizes.length === 0) newErrors.areaSizes = "At least one area size is required";
    if (existingImages.length + newImages.length === 0) newErrors.images = "At least one image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");

      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("points", JSON.stringify(formData.points));
      data.append("address", formData.address);
      data.append("location", JSON.stringify(formData.location));
      data.append("category", formData.category);
      data.append("propertyTypes", JSON.stringify(formData.propertyTypes));
      data.append("areaSizes", JSON.stringify(formData.areaSizes));
      data.append("existingImages", JSON.stringify(existingImages));

      // Append new image files
      newImages.forEach(({ file }) => {
        data.append("images", file);
      });

      await axios.put(`/properties/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/properties", { state: { success: "Property updated successfully!" } });
    } catch (error) {
      console.error("Update error:", error);
      setErrorMessage(error.response?.data?.message || "Failed to update property. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Remove an image (either existing or new)
  const removeImage = (id) => {
    if (id.startsWith('new-')) {
      const imageToRemove = newImages.find(img => img.id === id);
      if (imageToRemove) URL.revokeObjectURL(imageToRemove.preview);
      setNewImages(prev => prev.filter(img => img.id !== id));
    } else {
      setExistingImages(prev => prev.filter(img => img !== id));
    }
  };

  return (
    <Container className="py-4">
      <h1 className="mb-4">Edit Property</h1>
      
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Property Name*</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                isInvalid={!!errors.name}
                placeholder="Enter property name"
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Category Select */}
            <Form.Group className="mb-3">
              <Form.Label>Category*</Form.Label>
              <Select
                options={categories.map(category => ({
                  value: category._id,
                  label: category.name
                }))}
                value={selectedCategory}
                onChange={handleCategoryChange}
                placeholder="Select category..."
                isClearable
                isDisabled={isLoading}
              />
              {errors.category && <div className="text-danger small">{errors.category}</div>}
            </Form.Group>

            {/* Property Type Select */}
            <Form.Group className="mb-3">
              <Form.Label>Property Types*</Form.Label>
              <Select
                isMulti
                options={propertyTypeOptions}
                value={selectedPropertyTypes}
                onChange={handlePropertyTypeChange}
                placeholder={selectedCategory ? "Select property types" : "Select a category first"}
                isDisabled={!selectedCategory || isLoading}
              />
              {errors.propertyTypes && <div className="text-danger small">{errors.propertyTypes}</div>}
            </Form.Group>

            {/* Area Size Select */}
            <Form.Group className="mb-3">
              <Form.Label>Area Sizes*</Form.Label>
              <Select
                isMulti
                options={areaSizeOptions}
                value={selectedAreaSizes}
                onChange={handleAreaSizeChange}
                placeholder={selectedCategory ? "Select area sizes" : "Select a category first"}
                isDisabled={!selectedCategory || isLoading}
              />
              {errors.areaSizes && <div className="text-danger small">{errors.areaSizes}</div>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                isInvalid={!!errors.description}
                placeholder="Describe the property in detail"
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                  <Form.Label>Price*</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    isInvalid={!!errors.price}
                    placeholder="Enter price"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.price}
                  </Form.Control.Feedback>
                </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Key Points</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={formData.points.join(", ")}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  points: e.target.value.split(",").map(point => point.trim()).filter(point => point)
                })}
                placeholder="Enter key points separated by commas"
              />
              <Form.Text className="text-muted">
                Example: Near market, 24/7 security, Parking available
              </Form.Text>
            </Form.Group>
          </Col>

          <Col md={6}>
            {/* Images Section */}
            <Form.Group className="mb-3">
              <Form.Label>Images*</Form.Label>
              <div 
                {...getRootProps()} 
                className={`dropzone p-4 border rounded ${isDragActive ? "border-primary" : "border-secondary"}`}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p className="mb-0 text-center">Drop the images here...</p>
                ) : (
                  <p className="mb-0 text-center">
                    Drag & drop images here, or click to select files<br />
                    <small className="text-muted">(Max 10 images, {10 - (existingImages.length + newImages.length)} remaining)</small>
                  </p>
                )}
              </div>
              {errors.images && (
                <div className="text-danger small">{errors.images}</div>
              )}
              
              {/* Image Previews */}
              <div className="d-flex flex-wrap gap-2 mt-3">
                {/* Existing images */}
                {existingImages.map((imgUrl, index) => (
                  <div key={`existing-${index}`} className="position-relative">
                    <img 
                      src={imgUrl} 
                      alt={`Existing ${index}`}
                      className="img-thumbnail"
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(imgUrl)}
                      className="btn btn-sm btn-danger position-absolute top-0 end-0"
                      style={{ transform: "translate(30%, -30%)" }}
                      aria-label="Remove image"
                      disabled={isLoading}
                    >
                      &times;
                    </button>
                  </div>
                ))}
                
                {/* New images */}
                {newImages.map((image) => (
                  <div key={image.id} className="position-relative">
                    <img
                      src={image.preview}
                      alt={`New ${image.id}`}
                      className="img-thumbnail"
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(image.id)}
                      className="btn btn-sm btn-danger position-absolute top-0 end-0"
                      style={{ transform: "translate(30%, -30%)" }}
                      aria-label="Remove image"
                      disabled={isLoading}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </Form.Group>

            {/* Location Section */}
            <Form.Group className="mb-3">
              <Form.Label>Address*</Form.Label>
              <Form.Control
                type="text"
                value={formData.address}
                onChange={handleAddressChange}
                isInvalid={!!errors.address}
                placeholder="Enter full address"
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="mb-3">
              <Form.Label>Location on Map</Form.Label>
              <div className="border rounded" style={{ height: "250px" }}>
                <MapContainer 
                  center={formData.location} 
                  zoom={13} 
                  scrollWheelZoom 
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker
                    position={formData.location}
                    icon={L.icon({ 
                      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                      iconSize: [25, 41],
                      iconAnchor: [12, 41],
                    })}
                  />
                  <RecenterMap lat={formData.location[0]} lng={formData.location[1]} />
                </MapContainer>
              </div>
              <Form.Text className="text-muted">
                The marker will update automatically when you enter an address
              </Form.Text>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <Button 
            variant="outline-secondary" 
            onClick={() => navigate(-1)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            variant="primary"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Property"}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditProperty;