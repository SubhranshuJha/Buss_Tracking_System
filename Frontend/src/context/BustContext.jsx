import { useBuses } from "./BustContext";

const BusDetails = () => {
  const { buses, selectedBus } = useBuses();

  return (
    <div style={styles.detailsPanel}>
      <h2 style={styles.title}>Live Fleet Status</h2>
      
      {/* If a bus is selected via SearchBar, show it prominently */}
      {selectedBus && (
        <div style={styles.selectedCard}>
          <span style={styles.badge}>TRACKING</span>
          <h3>Bus {selectedBus.busNumber}</h3>
          <p>Route: {selectedBus.route}</p>
          <p>Location: {selectedBus.currentLocation.lat.toFixed(4)}, {selectedBus.currentLocation.lng.toFixed(4)}</p>
        </div>
      )}

      <hr style={styles.divider} />

      {/* List of all buses from the system */}
      {buses.map((bus) => (
        <div key={bus._id} style={{
          ...styles.busCard,
          borderLeft: selectedBus?._id === bus._id ? '5px solid #2563eb' : '5px solid #cbd5e1'
        }}>
          <h4>{bus.busNumber}</h4>
          <p style={styles.routeText}>{bus.route || "Regular Route"}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  detailsPanel: { flex: '1', padding: '20px', borderRight: '1px solid #ddd', overflowY: 'auto', background: '#f8fafc' },
  title: { fontSize: '1.2rem', marginBottom: '15px', color: '#1e293b' },
  selectedCard: { background: '#eff6ff', padding: '15px', borderRadius: '8px', border: '1px solid #bfdbfe', marginBottom: '20px' },
  badge: { fontSize: '10px', background: '#2563eb', color: 'white', padding: '2px 6px', borderRadius: '4px' },
  busCard: { background: 'white', padding: '12px', marginBottom: '10px', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' },
  routeText: { fontSize: '12px', color: '#64748b', margin: '4px 0 0 0' },
  divider: { margin: '20px 0', border: 'none', borderTop: '1px solid #e2e8f0' }
};

export default BusDetails;