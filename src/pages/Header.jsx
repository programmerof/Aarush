import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsGlobe } from 'react-icons/bs';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Button } from '../components/ui/button';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <header className="w-full px-4 py-2 bg-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-900">
          Aarush International Education Private Limited 🌍
          </h1>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <Button variant="outline" as={Link} to="/about">
                About 🔍
              </Button>
            </li>
            <li>
              <Button variant="outline" as={Link} to="/services">
                Services 🧭
              </Button>
            </li>
            <li className="relative">
              <Button
                variant="outline"
                className="flex items-center space-x-2"
                onClick={toggleDropdown}
                aria-label="Study Destinations"
                aria-expanded={isDropdownOpen}
              >
                <BsGlobe className="w-5 h-5" />
                <span>Study Destinations 🌎</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isDropdownOpen ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Button>
              {isDropdownOpen && (
                <div
                  className="absolute z-10 w-48 py-2 mt-2 bg-white rounded-lg shadow-lg transition-all duration-300"
                  ref={dropdownRef}
                  role="menu"
                  aria-label="Study Destinations Dropdown"
                >
                  <Button
                    variant="outline"
                    as={Link}
                    to="/study-destinations/usa"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                    role="menuitem"
                  >
                    USA 🇺🇸
                  </Button>
                  <Button
                    variant="outline"
                    as={Link}
                    to="/study-destinations/canada"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                    role="menuitem"
                  >
                    Canada 🇨🇦
                  </Button>
                  <Button
                    variant="outline"
                    as={Link}
                    to="/study-destinations/australia"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                    role="menuitem"
                  >
                    Australia 🇦🇺
                  </Button>
                  <Button
                    variant="outline"
                    as={Link}
                    to="/study-destinations/uk"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                    role="menuitem"
                  >
                    UK 🇬🇧
                  </Button>
                </div>
              )}
            </li>
            <li>
              <Button variant="outline" as={Link} to="/contact">
                Contact 📞
              </Button>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle Mobile Navigation"
        >
          <HiOutlineMenuAlt3 className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;