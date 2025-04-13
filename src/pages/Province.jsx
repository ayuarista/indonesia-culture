import React from "react";
import HeroProvince from "../components/Province/Hero/HeroProvince";
import IndonesiaMaps from "../components/Organisms/IndonesiaMaps";
import CardProvince from "../components/Province/Card/CardProvince";

const Province = () => {
  return (
    <div className="pt-10">
      <HeroProvince/>
      <IndonesiaMaps padding="pt-12"/>
      <CardProvince/>
    </div>
  );
};

export default Province;
