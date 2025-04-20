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
        className={`relative h-10 md:px-12 lg:px-16 w-full rounded-full flex items-center justify-between cursor-pointer overflow-hidden transition-all duration-500 ${
          isHovered
            ? "bg-gradient-to-r from-light-red from-10% to-transparent"
            : "bg-gradient-to-r from-light-red from-10% to-transparent"
        }`}
      >
        <span
          className={`p-1.5 rounded-full transition-all duration-1000 ${
            isHovered ? "translate-x-60" : "-translate-x-10 bg-white"
          }`}
        >
          <IoIosArrowForward
            className={`transition-all duration-500 ${
              isHovered ? "text-transparent" : "text-light-red"
            }`}
          />
        </span>
        <h1 className="text-sm text-left lg:text-[14px] w-full xl:text-base font-bold text-white">
          {location}
        </h1>
        <div
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
            isHovered ? "translate-x-96" : "-translate-x-full"
          }`}
        />
      </button>
    </div>
  );
};

export default ButtonProvince;
