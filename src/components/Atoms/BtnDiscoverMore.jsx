import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BtnDiscoverMore = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <a href="#muri">
        <div className="">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative lg:w-80 w-[18rem] h-12 rounded-full flex items-center justify-between px-6 cursor-pointer shadow-lg overflow-hidden transition-all duration-500 ${
              isHovered
                ? "bg-gradient-to-r from-dark-red to to-light-red border-none"
                : "border border-light-red"
            }`}
          >
            <h1 className={`text-base font-medium transition-all duration-500 ${
                isHovered ? "text-white" : "text-black"
            }`}>Discover More</h1>
            <span className={`p-2 rounded-full transition-all duration-500 ${
                isHovered ? "bg-white" : "bg-gradient-to-r from-dark-red to to-light-red"
            }`}>
                <IoIosArrowForward className={`transition-all duration-500 ${
                    isHovered ? "text-light-red" : "text-white"
                }`}/>
            </span>
            <div className={`absolute top-0
                 left-0 w-full h-full bg-gradient-to-r from-dark-red to to-light-red transition-all duration-1000 ease-in-out ${
                    isHovered ? "translate-x-96" : "-translate-x-full"
                 }`}/>
          </div>
        </div>
      </a>
    </>
  );
};

export default BtnDiscoverMore;