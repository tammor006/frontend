import React, { useState, useEffect } from "react";
import axios from "../components/axiosInstance";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

const AddProperty = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    points: [],
    address: "",
    area: "",
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

  // Dropzone for image uploads
  const onDrop = (acceptedFiles) => {
    setFormData({
      ...formData,
      images: acceptedFiles,
    });
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "image/*", multiple: true });

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get('/categories', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(res.data.data);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      }
    };
    fetchCategories();
  }, []);

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
            label: `${as.name} (${as.minSize}-${as.maxSize} sq ft)`
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
    setFormData({ ...formData, address });

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
  const RecenterMap = ({ lat, lng }) => {
    const map = useMap();
    map.setView([lat, lng], 14);
    return null;
  };

  // Form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.description) formErrors.description = "Description is required";
    if (!formData.price) formErrors.price = "Price is required";
    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.images.length) formErrors.images = "At least one image is required";
    if (!formData.category) formErrors.category = "Category is required";
    if (!formData.propertyTypes || formData.propertyTypes.length === 0) formErrors.propertyTypes = "At least one property type is required";
    if (!formData.areaSizes || formData.areaSizes.length === 0) formErrors.areaSizes = "At least one area size is required";
  
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  
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
  
      formData.images.forEach((image) => {
        data.append("images", image);
      });
  
      const response = await axios.post("/properties", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
  
      alert("Property added successfully!");
      navigate("/properties");
    } catch (error) {
      console.error("Add property error:", error);
      alert(error.response?.data?.message || "Something went wrong while adding property.");
    } finally {
      setIsLoading(false);
    }
  };

  // Rest of your component...
  return (
    <Container>
      <h1 className="mt-4">Add Property</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </Form.Group>
      {/* Category Select */}
<Form.Group className="mb-3">
  <Form.Label>Category</Form.Label>
  <Select
    options={categories.map(category => ({
      value: category._id,
      label: category.name
    }))}
    value={selectedCategory}
    onChange={handleCategoryChange}
    placeholder="Select category..."
    isClearable
    required
  />
  {errors.category && <div className="text-danger">{errors.category}</div>}
</Form.Group>

{/* Property Type Select */}
<Form.Group className="mb-3">
  <Form.Label>Property Types</Form.Label>
  <Select
    isMulti
    options={propertyTypeOptions}
    value={selectedPropertyTypes}
    onChange={handlePropertyTypeChange}
    placeholder={selectedCategory ? "Select property types" : "Select a category first"}
    isDisabled={!selectedCategory}
    required
  />
  {errors.propertyTypes && <div className="text-danger">{errors.propertyTypes}</div>}
</Form.Group>

{/* Area Size Select */}
<Form.Group className="mb-3">
  <Form.Label>Area Sizes</Form.Label>
  <Select
    isMulti
    options={areaSizeOptions}
    value={selectedAreaSizes}
    onChange={handleAreaSizeChange}
    placeholder={selectedCategory ? "Select area sizes" : "Select a category first"}
    isDisabled={!selectedCategory}
    required
  />
  {errors.areaSizes && <div className="text-danger">{errors.areaSizes}</div>}
</Form.Group>
    
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
              {errors.description && <div className="text-danger">{errors.description}</div>}
            </Form.Group>

            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control name="price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
              {errors.price && <div className="text-danger">{errors.price}</div>}
            </Form.Group>

            <Form.Group>
              <Form.Label>Points</Form.Label>
              <Form.Control
                name="points"
                value={formData.points.join(", ")}
                onChange={(e) => setFormData({ ...formData, points: e.target.value.split(", ") })}
              />
              {errors.points && <div className="text-danger">{errors.points}</div>}
            </Form.Group>

           
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Images</Form.Label>
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Drag 'n' drop images, or click to select files</p>
              </div>
              {formData.images.length > 0 && (
  <div className="images-preview">
    {formData.images.map((img, i) => {
      const src = typeof img === "string" ? img : URL.createObjectURL(img);
      return <img key={i} src={src} alt={`img-${i}`} style={{ width: 100 }} />;
    })}
  </div>
)}
              {errors.images && <div className="text-danger">{errors.images}</div>}
            </Form.Group>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search for address"
                value={formData.address}
                onChange={handleAddressChange}
              />
              {errors.address && <div className="text-danger">{errors.address}</div>}
            </Form.Group>

            <MapContainer center={formData.location} zoom={13} scrollWheelZoom style={{ height: "300px", width: "100%" }}>
              <TileLayer
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={formData.location} icon={L.icon({ iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png" })} />
              <RecenterMap lat={formData.location[0]} lng={formData.location[1]} />
            </MapContainer>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-4" disabled={isLoading}>
          {isLoading ? "Saving..." : "Add Property"}
        </Button>
      </Form>
    </Container>
  );
};

export default AddProperty;
