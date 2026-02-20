import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#181C14]/90 backdrop-blur-md border-b border-[#697565] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-extrabold text-[#ECDFCC] tracking-tight hover:opacity-80 transition-all duration-300"
        >
          Bus<span className="text-[#697565]">Tracker</span>
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-8 text-[#ECDFCC] font-medium">

          <Link 
            to="/" 
            className="relative group transition duration-300 text-sm uppercase tracking-widest"
          >
            <span className="group-hover:text-[#697565] transition duration-300">
              Home
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#697565] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link 
            to="/login" 
            className="bg-[#3C3D37] text-[#ECDFCC] border border-[#697565] px-6 py-2 rounded-lg shadow-md hover:bg-[#697565] hover:text-[#181C14] transition-all duration-300 font-bold uppercase text-xs tracking-tighter"
          >
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;