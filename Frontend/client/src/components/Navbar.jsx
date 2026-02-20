import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-extrabold text-blue-600 tracking-tight hover:scale-105 transition-transform duration-300"
        >
          Bus Tracker
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-10 text-gray-700 font-medium">

          <Link 
            to="/" 
            className="relative group transition duration-300"
          >
            <span className="group-hover:text-blue-600 transition duration-300">
              Home
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>


          <Link 
            to="/login" 
            className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;