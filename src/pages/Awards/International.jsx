import React, { useState } from "react";
import UNESCOCard from "./UNESCOCard";
import { unescoData } from "./unescoData";
import TopInternationalSection from "../../components/Molecules/TopInternationalSection";
import AsiaAwards from "../../components/Molecules/AsiaAwards";
import InternationalDropdownFilter from "../../components/Filter/InternationalDropdownFilter";

const International = () => {
  const [selectedFilter, setSelectedFilter] = useState(
    "Guinness World Records (GWR)"
  );

  const filterOptions = [
    {
      value: "Guinness World Records (GWR)",
      label: "Guinness World Records (GWR)",
    },
    { value: "UNESCO Recognition", label: "UNESCO Recognition" },
    { value: "Asia Awards (ABU)", label: "Asia Awards (ABU)" },
  ];

  const handleFilterSelect = (value) => {
    setSelectedFilter(value);
  };

  return (
    <div className="pt-32">
      <TopInternationalSection />
      <div className="flex justify-between mx-16 items-center gap-3 mt-10">
        <h1 className="font-semibold text-2xl text-light-red">
          {selectedFilter}
        </h1>
        <div className="flex items-center gap-3">
        <p className="text-black">Sort by: </p>
        <InternationalDropdownFilter
          options={filterOptions}
          selectedOption={selectedFilter}
          onSelect={handleFilterSelect}
        />
        </div>
      </div>

      {selectedFilter === "Guinness World Records (GWR)" && (
        <UNESCOCard data={unescoData} />
      )}
      {selectedFilter === "Asia Awards (ABU)" && <AsiaAwards />}
    </div>
  );
};

export default International;
