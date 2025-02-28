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

const International = () => {
    const [selectedFilter, setSelectedFilter] = useState("unesco");

    const filterOptions = [
      { value: "unesco", label: "UNESCO" },
      { value: "abu", label: "ABU" },
    ];
  
    const handleFilterSelect = (value) => {
      setSelectedFilter(value);
    };
  
    return (
      <div className="pt-32">
        <h1>Filter dan Card</h1>
        <h1 className="font-bold text-2xl text-black">{selectedFilter}</h1>
        <Filter
          options={filterOptions}
          selectedOption={selectedFilter}
          onSelect={handleFilterSelect}
        />
  
        {selectedFilter === "unesco" && <UNESCOCard data={unescoData} />}
        {selectedFilter === "abu" && <ABUCard/>}
        <TopInternationalSection/>
        <CardRRI/>
        <CardTVRI/>
      </div>
    );
  };

export default International;