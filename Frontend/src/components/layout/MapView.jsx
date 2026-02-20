import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useBuses } from "../../context/BusContext"; 
import { useEffect } from "react";

// Helper component to center map when selectedBus changes
const RecenterMap = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], 15);
    }
  }, [lat, lng, map]);
  return null;
};

const MapView = () => {
  const { buses, selectedBus } = useBuses();

  // Default coordinates (e.g., Gandhinagar/Ahmedabad area)
  const defaultCenter = [23.2156, 72.6369]; 

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer 
        center={defaultCenter} 
        zoom={13} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {/* Render all active buses from your context */}
        {buses.map((bus) => (
          <Marker 
            key={bus._id} 
            position={[bus.currentLocation.lat, bus.currentLocation.lng]}
          >
            <Popup>
              <strong>Bus {bus.busNumber}</strong> <br />
              Status: Live
            </Popup>
          </Marker>
        ))}

        {/* If a user searches for a bus, the map will move to it */}
        {selectedBus && (
          <RecenterMap 
            lat={selectedBus.currentLocation.lat} 
            lng={selectedBus.currentLocation.lng} 
          />
        )}
      </MapContainer>
    </div>
  );
};

export default MapView;