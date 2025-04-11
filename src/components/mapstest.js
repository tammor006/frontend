import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icon issue
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapView = () => {
  const center = [33.6844, 73.0479]; // Islamabad coordinates

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=b10ff82cd89f4664a4fc96b348d503f0"
          attribution='&copy; <a href="https://www.geoapify.com/">Geoapify</a> contributors'
          crossOrigin="anonymous"
        />
        <Marker position={center}>
          <Popup>Islamabad</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
