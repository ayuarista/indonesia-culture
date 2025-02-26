import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

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
      <Link to="">
        <div className="">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative lg:w-96 w-[18rem] h-12 rounded-full flex items-center justify-between px-6 mx-auto cursor-pointer shadow-lg overflow-hidden transition-all duration-500 ${
              isHovered
                ? "bg-gradient-to-r from-[#FFD6D6] to to-[#A90809]"
                : "bg-gradient-to-r from-dark-red to to-light-red"
            }`}
          >
            <h1 className={`text-lg font-semibold transition-all duration-500 ${
                isHovered ? "text-white" : "text-white"
            }`}>Discover More</h1>
            <span className={`p-2 rounded-full transition-all duration-500 ${
                isHovered ? "bg-white" : "bg-white"
            }`}>
                <IoIosArrowForward className={`transition-all duration-500 ${
                    isHovered ? "text-light-red" : "text-light-red"
                }`}/>
            </span>
            <div className={`absolute top-0
                 left-0 w-full bg-light-red transition-all duration-1000 ease-in-out ${
                    isHovered ? "translate-x-52" : "-translate-full"
                 }`}></div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BtnDiscoverMore;