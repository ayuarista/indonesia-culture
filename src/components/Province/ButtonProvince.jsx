import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ButtonProvince = ({ path, location }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="mt-3 mb-3 mx-2">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative w-full h-10  px-16 rounded-full flex items-center justify-between cursor-pointer overflow-hidden transition-all duration-500 ${
          isHovered
            ? "bg-light-red/50"
            : "bg-gradient-to-r from-light-red from-10% to-white/20"
        }`}
      >
        <span className="absolute left-3 p-1.5 rounded-full bg-white">
          <IoIosArrowForward
            className={`transition-all duration-500 text-lg ${
              isHovered ? "text-light-red" : "text-light-red"
            }`}
          />
        </span>
        <h1 className="text-sm text-left lg:text-[16px] xl:text-base font-bold text-white">
          {location}
        </h1>
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r to-light-red from-10% from-white/20 transition-all duration-1000 ease-in-out ${
            isHovered ? "translate-x-96" : "-translate-x-full"
          }`}
        />
      </button>
    </div>
  );
};

export default ButtonProvince;
