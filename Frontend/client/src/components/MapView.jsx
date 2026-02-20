import React, { useContext, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";
import { BusContext } from "../context/BusContext";
import BusMarker from "./BusMarker";

const createDotIcon = (color) => new L.DivIcon({
  className: 'custom-stop-icon',
  html: `<div style="
    background-color: ${color};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 4px rgba(0,0,0,0.3);
  "></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6]
});

const greenDot = createDotIcon("#2ecc71");
const blueDot = createDotIcon("#3498db");  

const RecenterMap = ({ location }) => {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.setView([location.lat, location.lng], map.getZoom(), {
        animate: true,
        duration: 1,
      });
    }
  }, [location, map]);
  return null;
};

const MapView = () => {
  const { bus } = useContext(BusContext);

  const defaultCenter = [23.0225, 72.5714];
  const polylinePositions = bus?.route?.map(stop => [stop.lat, stop.lng]) || [];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={defaultCenter}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {bus && (
          <>
            {bus.currentLocation && <RecenterMap location={bus.currentLocation} />}

            {polylinePositions.length > 0 && (
              <Polyline 
                positions={polylinePositions} 
                pathOptions={{ color: '#34495e', weight: 4, opacity: 0.6, dashArray: '10, 10' }} 
              />
            )}

            {bus.route?.map((stop, index) => {
              const isNextStop = index === bus.nextStop?.index;
              
              return (
                <Marker
                  key={stop._id || index}
                  position={[stop.lat, stop.lng]}
                  icon={isNextStop ? greenDot : blueDot}
                >
                  <Popup>
                    <strong>{stop.name}</strong> <br />
                    {isNextStop ? "🚀 Next Stop" : "Route Stop"}
                  </Popup>
                </Marker>
              );
            })}

            <BusMarker />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default MapView;