import React from "react";
import HeroProvince from "../../components/Province/Hero/HeroProvince";
import IndonesiaMaps from "../../components/Organisms/IndonesiaMaps";
import CardProvince from "../../components/Province/Card/CardProvince";
import SectionWonderedIndonesia from "../../components/Province/Section/SectionWonderedIndonesia";
import TraditionCultural from "../../components/Province/Section/TraditionCultural";

const Province = () => {
  return (
    <div className="pt-10">
      <HeroProvince/>
      <IndonesiaMaps padding="pt-16" property="hidden"/>
      <CardProvince/>
      <div className="mt-20">
      <SectionWonderedIndonesia/>
      </div>
      <TraditionCultural/>
    </div>
  );
};

export default Province;
