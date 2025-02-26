import React, { useState } from "react";

const data = [
  { id: 1, title: "Item A", date: "2024-02-20", popularity: 10, length: 200 },
  { id: 2, title: "Item B", date: "2024-02-25", popularity: 15, length: 150 },
  { id: 3, title: "Item C", date: "2024-02-18", popularity: 5, length: 300 },
];

const SortFilter = () => {
  const [sortOption, setSortOption] = useState("All");
  const [filteredData, setFilteredData] = useState(data);

  const handleSort = (option) => {
    setSortOption(option);
    let sortedData = [...data];

    if (option === "Latest") {
      sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (option === "Longest") {
      sortedData.sort((a, b) => b.length - a.length);
    } else if (option === "Popular") {
      sortedData.sort((a, b) => b.popularity - a.popularity);
    } else {
      sortedData = data;
    }

    setFilteredData(sortedData);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="flex items-center space-x-2">
        <span className="text-gray-700 font-medium">Sort by:</span>
        <div className="relative">
          <select
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring focus:ring-red-500"
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Latest">Latest</option>
            <option value="Longest">Longest</option>
            <option value="Popular">Popular</option>
          </select>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {filteredData.map((item) => (
          <div key={item.id} className="p-3 border rounded-lg shadow-md bg-white">
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-sm text-gray-600">Date: {item.date}</p>
            <p className="text-sm text-gray-600">Length: {item.length} words</p>
            <p className="text-sm text-gray-600">Popularity: {item.popularity} stars</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortFilter;
