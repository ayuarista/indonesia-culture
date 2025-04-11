import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const NavDropdown = ({ navLink, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isAwardPage = links.some(link => location.pathname.startsWith(link.path));

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
        className={`flex items-center gap-1 text-[0.90rem] xl:text-[1rem] font-medium rounded-full transition ease-in-out duration-300 px-4 py-1 cursor-pointer
          ${isAwardPage ? "text-white rounded-full bg-gradient-to-r from-[#430304] to-[#A90809]" : "hover:bg-[#E7E7E7]"}`}
      >
        {navLink}
        <IoIosArrowDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {isOpen && (
        <ul className="absolute left-1/2 -translate-x-1/2 mt-3 w-40 xl:w-48 bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
          {links.map((link, index) => (
            <li key={index} className="hover:bg-gray-200 text-[0.90rem] xl:text-[1rem]">
              <Link
                to={link.path}
                className="block px-4 py-2 text-black hover:bg-gradient-to-r hover:from-[#430304] hover:to-[#B20607] hover:text-white transition-all"
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
