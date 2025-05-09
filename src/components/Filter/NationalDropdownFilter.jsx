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
      sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
      setFilteredData(sortedData.slice(0, 6));
    } else if (option === "Previous") {
      sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
      setFilteredData(sortedData.slice(0, 6));
    } else if (option === "Popular") {
      sortedData.sort((a, b) => b.views - a.views);
      setFilteredData(sortedData.slice(0, 6));
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="md:flex items-center justify-between w-full">
        <div className="mx-10 lg:mx-16 xl:mx-32">
          <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl text-light-red">
            {sortOption}
          </h1>
        </div>
        <div className="relative text-black mx-10 lg:mx-16 mt-2 lg:mt-0">
          <div className="flex items-center gap-3">
              <h1>Sort by:</h1>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="border cursor-pointer border-light-red xl:text-lg font-semibold text-light-red px-4 py-1 rounded-full w-40 md:w-48 text-left flex items-center justify-between"
            >
              {sortOption}
              <IoIosArrowDown
                className={`ml-2 transform transition-transform duration-300 ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {showDropdown && (
            <div className="absolute text-[15px] md:text-[16px] xl:text-[17px] bg-white rounded-lg mt-2 w-full shadow-2xl z-10 p-2">
              <button
                onClick={() => handleSort("All")}
                className="block w-full rounded-full text-left px-4 py-1 cursor-pointer hover:bg-light-red hover:text-white"
              >
                All
              </button>
              <button
                onClick={() => handleSort("Latest")}
                className="block w-full rounded-full text-left px-4 py-1 cursor-pointer hover:bg-light-red hover:text-white"
              >
                Latest
              </button>
              <button
                onClick={() => handleSort("Previous")}
                className="block w-full rounded-full text-left px-4 py-1 cursor-pointer hover:bg-light-red hover:text-white"
              >
                Previous
              </button>
              <button
                onClick={() => handleSort("Popular")}
                className="block w-full rounded-full text-left px-4 py-1 cursor-pointer hover:bg-light-red hover:text-white"
              >
                Popular
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-3 lg:mt-6 mx-10 lg:mx-16">
        {filteredData.map((item) => (
          <CardNational
            key={item.id}
            id={item.id}
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
