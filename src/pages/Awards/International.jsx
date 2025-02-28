import React, { useState } from "react";
import Filter from "./Filter";
import ABUCard from "./ABUCard";
import UNESCOCard from "./UNESCOCard";
import { unescoData } from "./unescoData";
import { abuData } from "./abuData";
import CardAboutInternational from "../../components/Card/CardAboutInternational";
import TopInternationalSection from "../../components/Molecules/TopInternationalSection";
import CardRRI from "../../components/Card/CardRRI";
import CardTVRI from "../../components/Card/CardTVRI";
import AsiaAwards from "../../components/Molecules/AsiaAwards";

const International = () => {
    const [selectedFilter, setSelectedFilter] = useState("UNESCO");

    const filterOptions = [
      { value: "UNESCO", label: "UNESCO" },
      { value: "Asia Awards (ABU)", label: "Asia Awards (ABU)" },
    ];
  
    const handleFilterSelect = (value) => {
      setSelectedFilter(value);
    };
  
    return (
      <div className="pt-32">
      <TopInternationalSection/>
        <h1>Filter dan Card</h1>
        <h1 className="font-bold text-2xl text-black">{selectedFilter}</h1>
        <Filter
          options={filterOptions}
          selectedOption={selectedFilter}
          onSelect={handleFilterSelect}
        />
  
        {selectedFilter === "UNESCO" && <UNESCOCard data={unescoData} />}
        {selectedFilter === "Asia Awards (ABU)" && <AsiaAwards/>}
        {/* <AsiaAwards/> */}
      </div>
    );
  };

export default International;