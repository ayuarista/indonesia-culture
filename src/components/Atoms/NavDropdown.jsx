import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const NavDropdown = ({ navLink, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 hover:text-gray-600 transition-colors"
      >
        {navLink}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
          {links.map((link, index) => (
            <li key={index} className="hover:bg-gray-200">
              <Link
                to={link.path}
                className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavDropdown;
