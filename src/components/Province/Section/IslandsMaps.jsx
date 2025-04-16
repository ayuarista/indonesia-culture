import React from "react";

const IslandsMaps = ({heading, text, image, padding, width}) => {
  return (
    <div className={`flex flex-col lg:flex-row xl:flex-row items-center justify-center gap-x-20 ${padding}`}>
      <div>
        <h1 className="text-3xl max-w-sm font-bold bg-clip-text bg-gradient-to-r from-light-red to-dark-red text-transparent">
          {heading}
        </h1>
        <p className="text-light-gray mt-4 text-sm lg:max-w-md xl:max-w-lg lg:text-[15px]/relaxed xl:text-lg">
        {text}
        </p>
      </div>
      <img src={image} alt="" className={`${width} lg:w-[35%] object-cover`}/>
    </div>
  );
};

export default IslandsMaps;
