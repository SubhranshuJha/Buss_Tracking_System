const Navbar = () => {
  return (
    <nav style={{ 
      height: '60px', 
      background: '#1e293b', 
      color: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      padding: '0 20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ margin: 0 }}>GSRTC Tracker</h2>
    </nav>
  );
};

export default Navbar;