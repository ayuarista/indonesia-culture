import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const NavDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1">
        {props.navLink}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden">
          {props.links.map((link, index) => (
            <li key={index} className="hover:bg-gray-200">
              <Link
                to={link.path}
                className="block px-4 py-2 text-black"
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
