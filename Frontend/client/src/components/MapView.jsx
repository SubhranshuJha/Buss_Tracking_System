import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useContext, useEffect } from "react";
import { BusContext } from "../context/BusContext";
import BusMarker from "./BusMarker";
import RoutePolyline from "./RoutePolyline";

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
  return (
    <MapContainer
      center={defaultCenter}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {bus?.currentLocation && (
        <>

          <RecenterMap location={bus.currentLocation} />
          <BusMarker />
          <RoutePolyline />
        </>
      )}
    </MapContainer>
  );
};

export default MapView;