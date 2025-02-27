import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import data from "../../data/card/DataCardNational";
import CardNational from "../Card/CardNational";


const NationalDropdownFilter = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [sortOption, setSortOption] = useState("All");
    const [filteredData, setFilteredData] = useState(data);

    const handleSort = (option) => {
        setSortOption(option);
        setShowDropdown(false);

        let sortedData = [...data];

        if (option === "Latest") {
            sortedData.sort((a, b) => new Date(a.date) - new Date(b.date)); // Urutkan berdasarkan tanggal paling awal
            setFilteredData(sortedData.slice(0, 6));
        } else if (option === "Previous") {
            sortedData.sort((a, b) => new Date(b.date) - new Date(a.date)); // Urutkan berdasarkan tanggal paling lama
            setFilteredData(sortedData.slice(0, 6));
        } else if (option === "Popular") {
            sortedData.sort((a, b) => b.views - a.views); // Urutkan berdasarkan views terbanyak
            setFilteredData(sortedData.slice(0, 6));
        } else {
            setFilteredData(data);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-between w-full max-w-2xl">
                <h1 className="font-bold text-xl text-light-red">{sortOption}</h1>
                <div className="relative text-black">
                    <button 
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="border border-gray-200 text-black px-4 py-2 rounded-lg w-48 text-left flex items-center justify-between"
                    >
                        {sortOption}
                        <IoIosArrowDown className={`ml-2 transform transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    {showDropdown && (
                        <div className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-full shadow-lg z-10">
                            <button
                                onClick={() => handleSort("All")}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                            >
                                All
                            </button>
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
                                onClick={() => handleSort("Previous")}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                            >
                                Previous
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {filteredData.map((item) => (
                    <CardNational
                    key={item.id}
                    image={item.image}
                    date={item.date}
                    views={item.views}
                    title={item.title}
                    sortOption={sortOption}
                    />
                    
                ))} 
            </div>
        </div>
    );
};

export default NationalDropdownFilter;
