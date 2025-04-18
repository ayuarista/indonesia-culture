import React from "react";

const IslandsMaps = ({heading, text, image, padding, width}) => {
  return (
    <div className={`mx-10 mt-10 lg:mx-0 lg:mt-0 xl:mx-0 xl:mt-0 flex flex-col lg:flex-row xl:flex-row items-center justify-center gap-x-20 ${padding}`}>
      <div>
        <h1 className="text-3xl max-w-md font-bold bg-clip-text bg-gradient-to-r from-light-red to-dark-red text-transparent">
          {heading}
        </h1>
        <p className="text-light-gray mt-4 text-[15px]/relaxed lg:max-w-md xl:max-w-lg lg:text-[15px]/relaxed xl:text-lg">
        {text}
        </p>
      </div>
      <img src={image} alt="" className={`${width} lg:w-[35%] object-cover`}/>
    </div>
  );
};

export default IslandsMaps;
