
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GalleryHorizontal, DollarSign, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="font-playfair text-2xl font-bold text-school-primary">
            XYZ School
          </span>
        </a>

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
          <a href="/gallery" className="text-gray-700 hover:text-school-primary font-medium transition-colors flex items-center gap-2">
            <GalleryHorizontal size={18} />
            Gallery
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-700 hover:text-school-primary font-medium transition-colors flex items-center gap-2">
              <DollarSign size={18} />
              Fee Structure
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white">
              {[...Array(10)].map((_, i) => (
                <DropdownMenuItem key={i + 1} className="cursor-pointer">
                  Grade {i + 1} Fee Structure
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="#contact" className="text-gray-700 hover:text-school-primary font-medium transition-colors">
            Contact
          </a>
          <Button className="bg-school-primary hover:bg-school-primary/90 text-white">
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
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
            <a 
              href="/gallery" 
              className="text-gray-700 hover:text-school-primary font-medium py-2 transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <GalleryHorizontal size={18} />
              Gallery
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-school-primary font-medium py-2 transition-colors flex items-center gap-2 w-full text-left">
                <DollarSign size={18} />
                Fee Structure
                <ChevronDown size={16} className="ml-auto" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white">
                {[...Array(10)].map((_, i) => (
                  <DropdownMenuItem key={i + 1} className="cursor-pointer">
                    Grade {i + 1} Fee Structure
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-school-primary font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-school-primary hover:bg-school-primary/90 text-white w-full">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
