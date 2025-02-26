import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const NationalDropdownFilter = ({onSort}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [sortOption, setSortOption] = useState(false);

    const handleSort = (option) => {
        setSortOption(option);
        onSort(option);
        setShowDropdown(false);
    }
    return(
        <div className="relative w-64 mx-auto">
            <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="border border-gray-200 text-black px-4 py-2
            rounded-lg w-full text-left flex items-center justify-between"
            >
                {sortOption}
                <IoIosArrowDown className={`ml-2 transform transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`}/>
            </button>
            {showDropdown && (
                <div className="absolute bg-white border-gray-300 rounded-lg mt-2 w-full shadown-lg
                z-10">
                    <button
                    onClick={() => handleSort("Popular")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                        Popular
                    </button>
                    <button
                    onClick={() => handleSort("Latest")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                        Latest
                    </button>
                    <button
                    onClick={() => handleSort("Others")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                        Others
                    </button>
                </div>
            )}
        </div>
    )
}

export default NationalDropdownFilter;