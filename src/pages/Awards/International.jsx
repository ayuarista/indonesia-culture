import React, { useState } from "react";
import TopInternationalSection from "../../components/Molecules/TopInternationalSection";
import AsiaAwards from "../../components/Molecules/AsiaAwards";
import InternationalDropdownFilter from "../../components/Filter/InternationalDropdownFilter";
import GuinnessWorldRecords from "../../components/Molecules/GuinnessWorldRecords";
import UNESCORecognition from "../../components/Molecules/UNESCORecognition";
import ASEAN from "../../components/Molecules/ASEAN";
import WorldCraftsCouncil from "../../components/Molecules/WorldCraftsCouncil";

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
    { value: "ASEAN Cultural Awards", label: "ASEAN Cultural Awards" },
    { value: "Asia Awards (ABU)", label: "Asia Awards (ABU)" },
    { value: "World Crafts Council (WCC) ", label: "World Crafts Council (WCC)" },
  ];

  const handleFilterSelect = (value) => {
    setSelectedFilter(value);
  };

  return (
    <div className="pt-24 lg:pt-24">
      <TopInternationalSection />
      <div className="lg:flex justify-between mx-8 lg:mx-16 items-center gap-3 mt-14 xl:mt-20">
        <h1 className="font-bold text-xl md:text-xl lg:text-2xl xl:text-3xl text-light-red">
          {selectedFilter}
        </h1>
        <div className="flex items-center gap-3 mt-5 lg:mt-0">
        <p className="text-black">Sort by: </p>
        <InternationalDropdownFilter
          options={filterOptions}
          selectedOption={selectedFilter}
          onSelect={handleFilterSelect}
        />
        </div>
      </div>

      {selectedFilter === "Guinness World Records (GWR)" && <GuinnessWorldRecords/>}
      {selectedFilter === "UNESCO Recognition" && <UNESCORecognition/>}
      {selectedFilter === "ASEAN Cultural Awards" && <ASEAN/>}
      {selectedFilter === "Asia Awards (ABU)" && <AsiaAwards />}
      {selectedFilter === "World Crafts Council (WCC) " && <WorldCraftsCouncil />}
    </div>
  );
};

export default International;
