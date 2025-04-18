import React from "react";

const TraditionCultural = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row xl:flex-row items-center lg:items-start xl:items-start justify-center gap-12 lg:gap-20 xl:gap-20 pt-28">
      <div className="mx-8 lg:mx-0 xl:mx-0">
        <h1 className="text-3xl xl:text-4xl font-third font-bold bg-clip-text bg-gradient-to-r from-light-red to-dark-red text-transparent">
          Tradition Cultural
        </h1>
        <p className="text-pretty text-justify text-abu mt-4 text-sm/relaxed lg:max-w-md lg:text-[15px]/relaxed xl:text-lg/relaxed">
          Indonesian wedding ceremonies are rich in meaning and tradition.
        </p>
        <p className="text-pretty text-justify text-abu mt-4 text-sm/relaxed lg:max-w-md lg:text-[15px]/relaxed xl:text-lg/relaxed">
        More
          than just uniting two people, marriage is a sacred cultural event with
          deep philosophical values, carried out through meaningful traditional
          stages.
        </p>
      </div>
      <div className="relative mx-10 lg:mx-0 xl:mx-0">
      <div className="absolute w-1 h-28 border-4 border-white bg-light-red p-1 top-16 -left-8 rounded-full shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)]"></div>
        <div className="absolute -right-5 -top-3 w-80 h-50 bg-light-red  rounded-tr-3xl rounded-bl-3xl"></div>
        <img src="https://images.unsplash.com/photo-1549474975-4f35751d8839?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-[27rem] h-72 lg:w-full lg:h-60 zl:w-full xl:h-60 object-cover  rounded-tr-3xl rounded-bl-3xl relative"/>
      </div>
    </div>
  );
};

export default TraditionCultural;
