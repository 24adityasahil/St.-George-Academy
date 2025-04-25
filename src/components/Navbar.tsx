
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-playfair text-2xl font-bold text-school-primary">
            St. George Academy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-school-primary font-medium transition-colors">
            About
          </a>
          <a href="#programs" className="text-gray-700 hover:text-school-primary font-medium transition-colors">
            Programs
          </a>
          <a href="#campus" className="text-gray-700 hover:text-school-primary font-medium transition-colors">
            Campus Life
          </a>
          <Link to="/gallery" className="text-gray-700 hover:text-school-primary font-medium transition-colors">
            Gallery
          </Link>
          <Link to="/fee-structure" className="text-gray-700 hover:text-school-primary font-medium transition-colors">
            Fee Structure
          </Link>
          <a href="#contact" className="text-gray-700 hover:text-school-primary font-medium transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-school-primary font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#programs" 
              className="text-gray-700 hover:text-school-primary font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>
            <a 
              href="#campus" 
              className="text-gray-700 hover:text-school-primary font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Campus Life
            </a>
            <Link 
              to="/gallery" 
              className="text-gray-700 hover:text-school-primary font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/fee-structure" 
              className="text-gray-700 hover:text-school-primary font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Fee Structure
            </Link>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-school-primary font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
