import { MapContainer, TileLayer } from "react-leaflet";
import { useContext } from "react";
import { BusContext } from "../context/BusContext";
import BusMarker from "./BusMarker";
import RoutePolyline from "./RoutePolyline";

const MapView = () => {
  const { bus } = useContext(BusContext);

  const center = bus?.currentLocation
    ? [bus.currentLocation.lat, bus.currentLocation.lng]
    : [23.0225, 72.5714];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {bus && (
        <>
          <BusMarker />
          <RoutePolyline />
        </>
      )}
    </MapContainer>
  );
};

export default MapView;