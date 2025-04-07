import React from "react";
import CalenderEvents from "./CalenderEvents";
import CardCalenderEvents from "../components/Card/CardCalenderEvents";

const Province = () => {
  return (
    <div className="pt-28 mx-8">
      <h1 className="text-3xl text-black font-bold">Province</h1>
      <div className="grid grid-cols-4 gap-5">
      <CardCalenderEvents/>
      <CardCalenderEvents/>
      <CardCalenderEvents/>
      <CardCalenderEvents/>
      </div>
    </div>
  );
};

export default Province;
