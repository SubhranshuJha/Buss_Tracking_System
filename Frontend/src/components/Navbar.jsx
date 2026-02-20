import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo / App Name */}
        <Link to="/" className="text-xl font-bold">
           Bus Tracker
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link 
            to="/" 
            className="hover:text-gray-200 transition"
          >
            Home
          </Link>

          <Link 
            to="/track" 
            className="hover:text-gray-200 transition"
          >
            Track Bus
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;