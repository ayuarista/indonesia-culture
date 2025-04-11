import { useModal } from "./PopupLogic";
import MapGWRPopup from "../Popup/MapGWRPopup";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
const BtnGWRPopup = ({itemId}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedId, setSelectedId] = useState(null);

  const handleOpen = () => {
    setSelectedId(itemId);
    openModal();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="mt-3">
      <button
        onClick={handleOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full h-12 rounded-full flex items-center justify-between px-6 cursor-pointer overflow-hidden transition-all duration-500 ${
          isHovered
            ? "bg-light-red"
            : "bg-gradient-to-r from-dark-red to to-light-red"
        }`}
      >
        <h1
          className={`text-sm xl:text-base font-medium transition-all duration-500 ${
            isHovered ? "text-white" : "text-white"
          }`}
        >
          Discover More
        </h1>
        <span
          className={`p-2 rounded-full transition-all duration-500 ${
            isHovered ? "bg-white" : "bg-white"
          }`}
        >
          <IoIosArrowForward
            className={`transition-all duration-500 ${
              isHovered ? "text-light-red" : "text-black"
            }`}
          />
        </span>
        <div
          className={`absolute top-0
                                 left-0 w-full h-full bg-dark-red transition-all duration-1000 ease-in-out ${
                                   isHovered
                                     ? "translate-x-96"
                                     : "-translate-x-full"
                                 }`}
        />
      </button>
      <MapGWRPopup
        isOpen={isOpen}
        closeModal={closeModal}
        selectedId={selectedId}
      />
    </div>
  );
};

export default BtnGWRPopup;
