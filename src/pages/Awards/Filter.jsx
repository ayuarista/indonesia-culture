import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Filter = ({ options, selectedOption, onSelect }) => {
  const [showDropdown,  setShowDropdown] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between w-full">
        <div className="mx-16">
          <div className="relative text-black mx-16">
            <button onClick={() => setShowDropdown(!showDropdown)} className="border cursor-pointer border-light-red text-light-red font-medium px-10 py-1 rounded-full w-full text-left flex items-center justify-between">
              {selectedOption}
              <IoIosArrowDown className={`ml-2 transform transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`} />
            </button>
            {showDropdown && (
              <div className="absolute text-[15px] bg-white rounded-lg mt-2 w-full shadow-2xl z-10 p-2">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => onSelect(option.value)}
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
    // <select
    //   value={selectedOption}
    //   onChange={(e) => onSelect(e.target.value)}
    //   style={{
    //     padding: "8px",
    //     borderRadius: "4px",
    //     border: "1px solid #ccc",
    //     marginBottom: "20px",
    //     color: "black",
    //   }}
    // >
    //   <option value="">Pilih Filter</option>
    //   {options.map((option) => (
    //     <option key={option.value} value={option.value}>
    //       {option.label}
    //     </option>
    //   ))}
    // </select>
  );
};

export default Filter;
