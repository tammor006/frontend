import React, { useState } from "react";
import axios from "../components/axiosInstance";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    points: [],
    address: "",
    area: "",
    images: [],
    location: [33.6844, 73.0479], // Default location: Islamabad
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Dropzone for image uploads
  const onDrop = (acceptedFiles) => {
    setFormData({
      ...formData,
      images: acceptedFiles,
    });
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "image/*", multiple: true });

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

  // Internal component to auto-fly map on location update
  const RecenterMap = ({ lat, lng }) => {
    const map = useMap();
    map.setView([lat, lng], 14);
    return null;
  };

  // Form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
  debugger
    const formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.description) formErrors.description = "Description is required";
    if (!formData.price) formErrors.price = "Price is required";
    if (!formData.points.length) formErrors.points = "At least one point is required";
    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.area) formErrors.area = "Area is required";
    if (!formData.images.length) formErrors.images = "At least one image is required";
  
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
  
      // ✅ Append real image files (not preview URLs)
      const inputElement = document.querySelector("input[type='file']");
      if (inputElement?.files) {
        for (let i = 0; i < inputElement.files.length; i++) {
          data.append("images", inputElement.files[i]);
        }
      }
  
      const response = await axios.post("/properties", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
  
      alert("Property added successfully!");
    } catch (error) {
      console.error("Add property error:", error);
      alert("Something went wrong while adding property.");
    } finally {
      setIsLoading(false);
    }
  };
  

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

            <Form.Group>
              <Form.Label>Area</Form.Label>
              <Form.Control name="area" value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })} />
              {errors.area && <div className="text-danger">{errors.area}</div>}
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
