import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const InternationalDropdownFilter = ({ options, selectedOption, onSelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative" ref={dropdownRef}>
      <div className="flex items-center justify-between">
        <div className="">
          <div className="relative text-black">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="border cursor-pointer border-light-red text-light-red font-semibold w-68 lg:w-72 xl:w-80 px-3 py-2 rounded-full flex items-center justify-between text-sm xl:text-base"
            >
              {selectedOption}
              <IoIosArrowDown
                className={`ml-2 transform transition-transform duration-300 ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDropdown && (
              <div className="absolute text-[15px] xl:text-base bg-white rounded-lg mt-2 w-72 xl:w-80 shadow-2xl z-10 p-2">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSelect(option.value);
                    }}
                    className="block w-full rounded-full text-left px-4 py-1 cursor-pointer hover:bg-light-red hover:text-white"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalDropdownFilter;
