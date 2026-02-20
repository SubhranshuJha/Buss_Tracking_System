import { useBuses } from "../../context/BusContext";

const BusDetails = () => {
  const { buses, selectedBus } = useBuses();

  return (
    <div style={{ padding: '20px', height: '100%', overflowY: 'auto' }}>
      <h3>Live Fleet</h3>
      {selectedBus && (
        <div style={{ background: '#dbeafe', padding: '10px', borderRadius: '6px', marginBottom: '15px' }}>
          <strong>Currently Tracking: {selectedBus.busNumber}</strong>
        </div>
      )}
      {buses.map(bus => (
        <div key={bus._id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
          <span>Bus {bus.busNumber}</span>
          <span style={{ float: 'right', fontSize: '12px' }}>Live</span>
        </div>
      ))}
    </div>
  );
};

export default BusDetails;