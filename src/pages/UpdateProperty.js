import React, { useEffect, useState, useCallback } from "react";
import axios from "../components/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const EditProperty = () => {
  const { id } = useParams(); // Get property ID from route
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
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]); // State for files with previews

  // Fetch property on load
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`/properties/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const property = res.data;
        setFormData({
          ...property,
          points: property.points || [],
          location: property.location?.coordinates || [33.6844, 73.0479],
          images: property.images || [],
        });

        // Preload images for preview
        const preloadedFiles = property.images.map((imageUrl, index) => ({
          preview: imageUrl,
          name: `image-${index}`,
        }));
        setFiles(preloadedFiles);
      } catch (error) {
        console.error("Failed to load property:", error);
      }
    };

    fetchProperty();
  }, [id]);

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => {
      const previewUrl = URL.createObjectURL(file);
      return { ...file, preview: previewUrl };
    });
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

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
          setFormData((prev) => ({
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.description) formErrors.description = "Description is required";
    if (!formData.price) formErrors.price = "Price is required";
    if (!formData.points.length) formErrors.points = "At least one point is required";
    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.area) formErrors.area = "Area is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");

      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("points", JSON.stringify(formData.points));
      data.append("address", formData.address);
      data.append("area", formData.area);
      data.append("location", JSON.stringify(formData.location));

      const inputElement = document.querySelector("input[type='file']");
      if (inputElement?.files) {
        for (let i = 0; i < inputElement.files.length; i++) {
          data.append("images", inputElement.files[i]);
        }
      }

      await axios.put(`/properties/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Property updated successfully.");
      navigate("/dashboard/properties");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update property.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h1 className="mt-4">Edit Property</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              {errors.description && <div className="text-danger">{errors.description}</div>}
            </Form.Group>

            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
              {errors.price && <div className="text-danger">{errors.price}</div>}
            </Form.Group>

            <Form.Group>
              <Form.Label>Points</Form.Label>
              <Form.Control
                value={formData.points.join(", ")}
                onChange={(e) => setFormData({ ...formData, points: e.target.value.split(", ") })}
              />
              {errors.points && <div className="text-danger">{errors.points}</div>}
            </Form.Group>

            <Form.Group>
              <Form.Label>Area</Form.Label>
              <Form.Control
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              />
              {errors.area && <div className="text-danger">{errors.area}</div>}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Images</Form.Label>
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <div className="previews">
                  {files.map((file) => (
                    <div key={file.name} className="preview">
                      <img src={file.preview} alt={file.name} />
                      <p>{file.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={formData.address}
                onChange={handleAddressChange}
              />
              {errors.address && <div className="text-danger">{errors.address}</div>}
            </Form.Group>

            <MapContainer center={formData.location} zoom={13} scrollWheelZoom style={{ height: "300px", width: "100%" }}>
              <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={formData.location}
                icon={L.icon({ iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png" })}
              />
              <RecenterMap lat={formData.location[0]} lng={formData.location[1]} />
            </MapContainer>
          </Col>
        </Row>

        <Button type="submit" className="mt-4" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Property"}
        </Button>
      </Form>
    </Container>
  );
};

export default EditProperty;
